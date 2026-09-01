// ============================================
// ChemBonding Quiz Server
// ============================================

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT =
    process.env.PORT || 3000;


// ============================================
// QUESTIONS
// ============================================

const questions =
    JSON.parse(
        fs.readFileSync("./questions.json", "utf8")
    );


// ============================================
// GAMES
// ============================================

const games = new Map();


// ============================================
// UTILITIES
// ============================================

function generateCode() {

    let code;

    do {

        code =
            Math.floor(
                100000 +
                Math.random() * 900000
            ).toString();

    } while (games.has(code));

    return code;
}


function cleanName(name) {

    return String(name || "")
        .trim()
        .replace(/[<>]/g, "")
        .slice(0, 30);
}


function getGame(code) {

    return games.get(
        String(code)
    );

}


// ============================================
// PLAYERS
// ============================================

function getPlayers(game) {

    return Object.entries(
        game.players
    ).map(
        ([id, player]) => ({

            id,

            name:
                player.name,

            score:
                player.score,

            answered:
                player.answered

        })
    );

}


function getLeaderboard(game) {

    return getPlayers(game)
        .sort(
            (a, b) =>
                b.score - a.score
        );

}


// ============================================
// PUBLIC QUESTION
// ============================================

function publicQuestion(game) {

    const q =
        questions[
            game.questionIndex
        ];


    if (!q)
        return null;


    return {

        id:
            q.id,

        question:
            q.question,

        options:
            q.options,

        points:
            q.points || 1000,

        index:
            game.questionIndex,

        total:
            questions.length,

        duration:
            game.duration,

        startedAt:
            game.questionStartedAt

    };

}


// ============================================
// ROOM
// ============================================

function room(game) {

    return `game-${game.code}`;

}


// ============================================
// PLAYERS UPDATE
// ============================================

function broadcastPlayers(game) {

    io.to(
        room(game)
    ).emit(
        "players-updated",
        getPlayers(game)
    );

}


// ============================================
// SEND CURRENT STATE TO SOCKET
// ============================================

function sendCurrentState(
    socket,
    game
) {

    // ------------------------------
    // QUESTION
    // ------------------------------

    if (
        game.status ===
        "question"
    ) {

        const question =
            publicQuestion(game);


        if (question) {

            socket.emit(
                "question",
                question
            );

        }

        return;
    }


    // ------------------------------
    // LEADERBOARD
    // ------------------------------

    if (
        game.status ===
        "leaderboard"
    ) {

        socket.emit(
            "question-ended",
            {
                leaderboard:
                    getLeaderboard(game)
            }
        );

        return;
    }


    // ------------------------------
    // FINISHED
    // ------------------------------

    if (
        game.status ===
        "finished"
    ) {

        socket.emit(
            "game-finished",
            {
                leaderboard:
                    getLeaderboard(game)
            }
        );

    }

}


// ============================================
// SEND QUESTION
// ============================================

function sendQuestion(game) {

    if (
        game.questionIndex >=
        questions.length
    ) {

        finishGame(game);

        return;
    }


    game.status =
        "question";


    game.questionStartedAt =
        Date.now();


    // Reset answers

    for (
        const player
        of Object.values(game.players)
    ) {

        player.answered =
            false;

    }


    const question =
        publicQuestion(game);


    console.log(
        `Game ${game.code}: Question ${game.questionIndex + 1}`
    );


    // IMPORTANT:
    // Send to EVERYONE

    io.to(
        room(game)
    ).emit(
        "question",
        question
    );


    // Timer

    setTimeout(
        () => {

            const current =
                getGame(game.code);


            if (!current)
                return;


            if (
                current.status !==
                "question"
            )
                return;


            // Make sure this timeout
            // belongs to this question

            if (
                current.questionStartedAt !==
                game.questionStartedAt
            )
                return;


            endQuestion(current);

        },
        game.duration * 1000
    );

}


// ============================================
// END QUESTION
// ============================================

function endQuestion(game) {

    if (
        game.status !==
        "question"
    )
        return;


    game.status =
        "leaderboard";


    console.log(
        `Game ${game.code}: Leaderboard`
    );


    io.to(
        room(game)
    ).emit(
        "question-ended",
        {
            leaderboard:
                getLeaderboard(game)
        }
    );

}


// ============================================
// FINISH GAME
// ============================================

function finishGame(game) {

    game.status =
        "finished";


    console.log(
        `Game ${game.code}: FINISHED`
    );


    io.to(
        room(game)
    ).emit(
        "game-finished",
        {
            leaderboard:
                getLeaderboard(game)
        }
    );

}


// ============================================
// HTTP
// ============================================

app.get(
    "/",
    (req, res) => {

        res.json({
            status: "online",
            service:
                "ChemBonding Quiz Server"
        });

    }
);


app.get(
    "/health",
    (req, res) => {

        res.json({
            status: "ok"
        });

    }
);


// ============================================
// SOCKET CONNECTION
// ============================================

io.on(
    "connection",
    socket => {

        console.log(
            "Connected:",
            socket.id
        );


        // ====================================
        // CREATE GAME
        // ====================================

        socket.on(
            "create-game",
            data => {

                const title =
                    cleanName(
                        data.title
                    ) ||
                    "Chemical Bonding Quiz";


                const duration =
                    Math.max(
                        5,
                        Math.min(
                            Number(
                                data.duration
                            ) || 20,
                            120
                        )
                    );


                const code =
                    generateCode();


                const hostToken =
                    Math.random()
                        .toString(36)
                        .substring(2) +
                    Date.now()
                        .toString(36);


                const game = {

                    code,

                    hostToken,

                    title,

                    duration,

                    hostSocket:
                        socket.id,

                    status:
                        "lobby",

                    questionIndex:
                        -1,

                    questionStartedAt:
                        0,

                    players: {}

                };


                games.set(
                    code,
                    game
                );


                socket.join(
                    room(game)
                );


                socket.gameCode =
                    code;

                socket.isHost =
                    true;

                socket.hostToken =
                    hostToken;


                socket.emit(
                    "game-created",
                    {
                        code,
                        title,
                        hostToken
                    }
                );


                broadcastPlayers(
                    game
                );


                console.log(
                    `Game created: ${code}`
                );

            }
        );


        // ====================================
        // HOST RECONNECT
        // ====================================

        socket.on(
            "host-reconnect",
            data => {

                const game =
                    getGame(
                        data.code
                    );


                if (!game) {

                    socket.emit(
                        "host-error",
                        "Game no longer exists."
                    );

                    return;
                }


                if (
                    data.hostToken !==
                    game.hostToken
                ) {

                    socket.emit(
                        "host-error",
                        "Invalid host session."
                    );

                    return;
                }


                // Replace old host socket

                game.hostSocket =
                    socket.id;


                socket.gameCode =
                    game.code;

                socket.isHost =
                    true;

                socket.hostToken =
                    game.hostToken;


                socket.join(
                    room(game)
                );


                socket.emit(
                    "host-reconnected",
                    {
                        code:
                            game.code,

                        title:
                            game.title
                    }
                );


                console.log(
                    `Host reconnected to ${game.code}`
                );


                // IMPORTANT:
                // Restore current game state

                sendCurrentState(
                    socket,
                    game
                );


                broadcastPlayers(
                    game
                );

            }
        );


        // ====================================
        // JOIN GAME
        // ====================================

        socket.on(
            "join-game",
            data => {

                const code =
                    String(
                        data.code || ""
                    )
                        .trim()
                        .toUpperCase();


                const name =
                    cleanName(
                        data.name
                    );


                if (
                    !/^\d{6}$/.test(
                        code
                    )
                ) {

                    socket.emit(
                        "join-error",
                        "Enter a valid 6-digit code."
                    );

                    return;
                }


                if (!name) {

                    socket.emit(
                        "join-error",
                        "Enter your name."
                    );

                    return;
                }


                const game =
                    getGame(code);


                if (!game) {

                    socket.emit(
                        "join-error",
                        "Quiz not found."
                    );

                    return;
                }


                // ====================================
                // GAME STILL IN LOBBY
                // ====================================

                if (
                    game.status ===
                    "lobby"
                ) {

                    const duplicate =
                        Object.values(
                            game.players
                        ).some(
                            p =>
                                p.name
                                    .toLowerCase() ===
                                name.toLowerCase()
                        );


                    if (duplicate) {

                        socket.emit(
                            "join-error",
                            "That name is already taken."
                        );

                        return;
                    }


                    game.players[
                        socket.id
                    ] = {

                        name,

                        score: 0,

                        answered: false

                    };


                    socket.gameCode =
                        code;

                    socket.isHost =
                        false;


                    socket.join(
                        room(game)
                    );


                    socket.emit(
                        "joined-game",
                        {
                            code,
                            name,
                            title:
                                game.title
                        }
                    );


                    broadcastPlayers(
                        game
                    );


                    console.log(
                        `${name} joined ${code}`
                    );


                    return;
                }


                // ====================================
                // GAME ALREADY STARTED
                //
                // This is the important fix.
                // The student is coming from lobby
                // to quiz.html with a NEW socket.
                // ====================================

                if (
                    game.status ===
                    "question" ||
                    game.status ===
                    "leaderboard"
                ) {

                    let existingId =
                        null;


                    for (
                        const [
                            playerId,
                            player
                        ]
                        of Object.entries(
                            game.players
                        )
                    ) {

                        if (
                            player.name
                                .toLowerCase() ===
                            name.toLowerCase()
                        ) {

                            existingId =
                                playerId;

                            break;
                        }

                    }


                    // Student must already
                    // be part of the game

                    if (!existingId) {

                        socket.emit(
                            "join-error",
                            "You were not in this quiz."
                        );

                        return;
                    }


                    const player =
                        game.players[
                            existingId
                        ];


                    // Remove old socket mapping

                    if (
                        existingId !==
                        socket.id
                    ) {

                        delete game.players[
                            existingId
                        ];

                    }


                    // Attach player to
                    // new socket

                    game.players[
                        socket.id
                    ] = player;


                    socket.gameCode =
                        code;

                    socket.isHost =
                        false;


                    socket.join(
                        room(game)
                    );


                    socket.emit(
                        "joined-game",
                        {
                            code,
                            name:
                                player.name,
                            title:
                                game.title
                        }
                    );


                    console.log(
                        `${name} reconnected to ${code}`
                    );


                    // IMPORTANT:
                    // Give student the current
                    // question/leaderboard

                    sendCurrentState(
                        socket,
                        game
                    );


                    broadcastPlayers(
                        game
                    );


                    return;
                }


                // ====================================
                // FINISHED
                // ====================================

                if (
                    game.status ===
                    "finished"
                ) {

                    socket.emit(
                        "join-error",
                        "This quiz has finished."
                    );

                    return;
                }

            }
        );


        // ====================================
        // START GAME
        // ====================================

        socket.on(
            "start-game",
            () => {

                const game =
                    getGame(
                        socket.gameCode
                    );


                if (!game)
                    return;


                if (
                    socket.id !==
                    game.hostSocket
                )
                    return;


                if (
                    game.status !==
                    "lobby"
                )
                    return;


                if (
                    Object.keys(
                        game.players
                    ).length === 0
                ) {

                    socket.emit(
                        "host-error",
                        "At least one student must join."
                    );

                    return;
                }


                // IMPORTANT:
                // Start at Question 1

                game.questionIndex =
                    0;


                sendQuestion(
                    game
                );

            }
        );


        // ====================================
        // SUBMIT ANSWER
        // ====================================

        socket.on(
            "submit-answer",
            data => {

                const game =
                    getGame(
                        socket.gameCode
                    );


                if (!game)
                    return;


                if (
                    game.status !==
                    "question"
                )
                    return;


                const player =
                    game.players[
                        socket.id
                    ];


                if (!player)
                    return;


                if (
                    player.answered
                )
                    return;


                const answer =
                    Number(
                        data.answer
                    );


                const q =
                    questions[
                        game.questionIndex
                    ];


                if (!q)
                    return;


                player.answered =
                    true;


                const elapsed =
                    Date.now() -
                    game.questionStartedAt;


                const remaining =
                    Math.max(
                        0,
                        game.duration * 1000 -
                        elapsed
                    );


                let points =
                    0;


                if (
                    answer ===
                    q.answer
                ) {

                    const base =
                        q.points ||
                        1000;


                    const bonus =
                        Math.round(
                            base *
                            0.5 *
                            (
                                remaining /
                                (
                                    game.duration *
                                    1000
                                )
                            )
                        );


                    points =
                        base +
                        bonus;


                    player.score +=
                        points;


                    socket.emit(
                        "answer-result",
                        {
                            correct:
                                true,

                            points,

                            score:
                                player.score
                        }
                    );

                } else {

                    socket.emit(
                        "answer-result",
                        {
                            correct:
                                false,

                            points:
                                0,

                            score:
                                player.score
                        }
                    );

                }


                socket.emit(
                    "answer-locked"
                );


                io.to(
                    game.hostSocket
                ).emit(
                    "answer-progress",
                    {

                        answered:
                            Object.values(
                                game.players
                            )
                                .filter(
                                    p =>
                                        p.answered
                                )
                                .length,

                        total:
                            Object.keys(
                                game.players
                            ).length

                    }
                );

            }
        );


        // ====================================
        // END QUESTION
        // ====================================

        socket.on(
            "end-question",
            () => {

                const game =
                    getGame(
                        socket.gameCode
                    );


                if (!game)
                    return;


                if (
                    socket.id !==
                    game.hostSocket
                )
                    return;


                endQuestion(
                    game
                );

            }
        );


        // ====================================
        // NEXT QUESTION
        // ====================================

        socket.on(
            "next-question",
            () => {

                const game =
                    getGame(
                        socket.gameCode
                    );


                if (!game)
                    return;


                if (
                    socket.id !==
                    game.hostSocket
                )
                    return;


                if (
                    game.status !==
                    "leaderboard"
                )
                    return;


                game.questionIndex++;


                if (
                    game.questionIndex >=
                    questions.length
                ) {

                    finishGame(
                        game
                    );

                    return;
                }


                sendQuestion(
                    game
                );

            }
        );


        // ====================================
        // END GAME
        // ====================================

        socket.on(
            "end-game",
            () => {

                const game =
                    getGame(
                        socket.gameCode
                    );


                if (!game)
                    return;


                if (
                    socket.id !==
                    game.hostSocket
                )
                    return;


                finishGame(
                    game
                );

            }
        );


        // ====================================
        // DISCONNECT
        // ====================================

        socket.on(
            "disconnect",
            () => {

                const code =
                    socket.gameCode;


                const game =
                    getGame(code);


                if (!game)
                    return;


                // ----------------------------
                // HOST
                // ----------------------------

                if (
                    socket.id ===
                    game.hostSocket
                ) {

                    console.log(
                        `Host disconnected from ${code}`
                    );


                    setTimeout(
                        () => {

                            const current =
                                getGame(code);


                            if (!current)
                                return;


                            if (
                                current.hostSocket ===
                                socket.id
                            ) {

                                console.log(
                                    `Closing game ${code}`
                                );


                                io.to(
                                    room(current)
                                ).emit(
                                    "game-closed"
                                );


                                games.delete(
                                    code
                                );

                            }

                        },
                        60000
                    );


                    return;
                }


                // ----------------------------
                // STUDENT
                // ----------------------------

                /*
                 * If the player has already
                 * reconnected with a new socket,
                 * don't delete the new player.
                 */

                if (
                    game.players[
                        socket.id
                    ]
                ) {

                    delete game.players[
                        socket.id
                    ];

                    broadcastPlayers(
                        game
                    );

                }

            }

        );

    }
);


// ============================================
// START SERVER
// ============================================

server.listen(
    PORT,
    () => {

        console.log(
            `ChemBonding server running on port ${PORT}`
        );

        console.log(
            `${questions.length} questions loaded`
        );

    }
);
