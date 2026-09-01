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
// LOAD QUESTIONS
// ============================================

const questions =
    JSON.parse(
        fs.readFileSync(
            "./questions.json",
            "utf8"
        )
    );

console.log(
    `${questions.length} questions loaded`
);


// ============================================
// GAME STORAGE
// ============================================

const games = new Map();


// ============================================
// GENERATE 6-DIGIT GAME CODE
// ============================================

function generateCode() {

    let code;

    do {

        code =
            Math.floor(
                100000 +
                Math.random() * 900000
            ).toString();

    } while (
        games.has(code)
    );

    return code;
}


// ============================================
// CLEAN NAME
// ============================================

function cleanName(name) {

    return String(name || "")
        .trim()
        .replace(/[<>]/g, "")
        .slice(0, 30);
}


// ============================================
// GET GAME
// ============================================

function getGame(code) {

    return games.get(
        String(code)
    );

}


// ============================================
// ROOM NAME
// ============================================

function room(game) {

    return `game-${game.code}`;

}


// ============================================
// GET PLAYERS
// ============================================

function getPlayers(game) {

    return Object.values(
        game.players
    ).map(player => {

        return {

            playerId:
                player.playerId,

            name:
                player.name,

            score:
                player.score,

            answered:
                player.answered

        };

    });

}


// ============================================
// LEADERBOARD
// ============================================

function getLeaderboard(game) {

    return getPlayers(game)
        .sort(
            (a, b) =>
                b.score - a.score
        );

}


// ============================================
// FIND PLAYER
// ============================================

function findPlayer(
    game,
    playerId
) {

    if (!playerId)
        return null;

    return Object.values(
        game.players
    ).find(
        player =>
            player.playerId ===
            playerId
    ) || null;

}


// ============================================
// FIND PLAYER BY NAME
// ============================================

function findPlayerByName(
    game,
    name
) {

    if (!name)
        return null;

    return Object.values(
        game.players
    ).find(
        player =>
            player.name.toLowerCase() ===
            name.toLowerCase()
    ) || null;

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
// BROADCAST PLAYERS
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
// SEND CURRENT STATE
// ============================================

function sendCurrentState(
    socket,
    game
) {

    // ----------------------------
    // CURRENT QUESTION
    // ----------------------------

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


    // ----------------------------
    // LEADERBOARD
    // ----------------------------

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


    // ----------------------------
    // FINISHED
    // ----------------------------

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

    Object.values(
        game.players
    ).forEach(
        player => {

            player.answered =
                false;

        }
    );


    const question =
        publicQuestion(game);


    console.log(
        `Game ${game.code}: Question ${game.questionIndex + 1}/${questions.length}`
    );


    // Send question to everyone

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
                getGame(
                    game.code
                );


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


            endQuestion(
                current
            );

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

    if (
        game.status ===
        "finished"
    )
        return;


    game.status =
        "finished";


    console.log(
        `Game ${game.code}: Finished`
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
// HTTP ROUTES
// ============================================

app.get(
    "/",
    (req, res) => {

        res.json({

            status:
                "online",

            service:
                "ChemBonding Quiz Server",

            questions:
                questions.length

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


        // ========================================
        // CREATE GAME
        // ========================================

        socket.on(
            "create-game",
            data => {

                const title =
                    cleanName(
                        data?.title
                    ) ||
                    "Chemical Bonding Quiz";


                const duration =
                    Math.max(
                        5,
                        Math.min(
                            Number(
                                data?.duration
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


        // ========================================
        // HOST RECONNECT
        // ========================================

        socket.on(
            "host-reconnect",
            data => {

                const game =
                    getGame(
                        data?.code
                    );


                if (!game) {

                    socket.emit(
                        "host-error",
                        "Game no longer exists."
                    );

                    return;

                }


                if (
                    data?.hostToken !==
                    game.hostToken
                ) {

                    socket.emit(
                        "host-error",
                        "Invalid host session."
                    );

                    return;

                }


                // New host socket

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
                    `Host reconnected: ${game.code}`
                );


                // Restore current state

                sendCurrentState(
                    socket,
                    game
                );


                broadcastPlayers(
                    game
                );

            }
        );


        // ========================================
        // JOIN GAME
        // ========================================

        socket.on(
            "join-game",
            data => {

                const code =
                    String(
                        data?.code || ""
                    )
                        .trim();


                const name =
                    cleanName(
                        data?.name
                    );


                const playerId =
                    String(
                        data?.playerId || ""
                    )
                        .trim();


                // ----------------------------
                // Validate code
                // ----------------------------

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


                // ----------------------------
                // Validate name
                // ----------------------------

                if (!name) {

                    socket.emit(
                        "join-error",
                        "Enter your name."
                    );

                    return;

                }


                // ----------------------------
                // Validate player ID
                // ----------------------------

                if (!playerId) {

                    socket.emit(
                        "join-error",
                        "Student session is invalid. Please join again."
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
                // LOBBY
                // ====================================

                if (
                    game.status ===
                    "lobby"
                ) {

                    // Check whether this
                    // student already exists

                    let existingPlayer =
                        findPlayer(
                            game,
                            playerId
                        );


                    // ----------------------------
                    // Existing player
                    // ----------------------------

                    if (
                        existingPlayer
                    ) {

                        existingPlayer.socketId =
                            socket.id;


                        socket.gameCode =
                            code;

                        socket.isHost =
                            false;

                        socket.playerId =
                            playerId;


                        socket.join(
                            room(game)
                        );


                        socket.emit(
                            "joined-game",
                            {

                                code,

                                name:
                                    existingPlayer.name,

                                title:
                                    game.title,

                                playerId

                            }
                        );


                        broadcastPlayers(
                            game
                        );


                        return;

                    }


                    // ----------------------------
                    // Check duplicate player ID
                    // ----------------------------

                    const duplicateId =
                        findPlayer(
                            game,
                            playerId
                        );


                    if (
                        duplicateId
                    ) {

                        socket.emit(
                            "join-error",
                            "You are already in this quiz."
                        );

                        return;

                    }


                    // ----------------------------
                    // Check duplicate name
                    // ----------------------------

                    const duplicateName =
                        findPlayerByName(
                            game,
                            name
                        );


                    if (
                        duplicateName
                    ) {

                        socket.emit(
                            "join-error",
                            "That name is already taken."
                        );

                        return;

                    }


                    // ----------------------------
                    // Create player
                    // ----------------------------

                    game.players[
                        playerId
                    ] = {

                        playerId,

                        socketId:
                            socket.id,

                        name,

                        score:
                            0,

                        answered:
                            false

                    };


                    socket.gameCode =
                        code;

                    socket.isHost =
                        false;

                    socket.playerId =
                        playerId;


                    socket.join(
                        room(game)
                    );


                    socket.emit(
                        "joined-game",
                        {

                            code,

                            name,

                            title:
                                game.title,

                            playerId

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
                // QUESTION / LEADERBOARD
                // ====================================

                if (
                    game.status ===
                    "question" ||
                    game.status ===
                    "leaderboard"
                ) {

                    let player =
                        findPlayer(
                            game,
                            playerId
                        );


                    // ----------------------------
                    // Player ID not found
                    // ----------------------------

                    if (!player) {

                        // Fallback by name.
                        // This helps older sessions
                        // created before playerId.

                        player =
                            findPlayerByName(
                                game,
                                name
                            );

                    }


                    if (!player) {

                        socket.emit(
                            "join-error",
                            "You were not part of this quiz."
                        );

                        return;

                    }


                    // ----------------------------
                    // Update socket
                    // ----------------------------

                    player.socketId =
                        socket.id;


                    socket.gameCode =
                        code;

                    socket.isHost =
                        false;

                    socket.playerId =
                        player.playerId;


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
                                game.title,

                            playerId:
                                player.playerId

                        }
                    );


                    console.log(
                        `${player.name} reconnected to ${code}`
                    );


                    // Send current question
                    // or leaderboard

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


        // ========================================
        // START GAME
        // ========================================

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


                // Question 1

                game.questionIndex =
                    0;


                sendQuestion(
                    game
                );

            }
        );


        // ========================================
        // SUBMIT ANSWER
        // ========================================

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
                        socket.playerId
                    ];


                if (!player)
                    return;


                if (
                    player.answered
                )
                    return;


                const answer =
                    Number(
                        data?.answer
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
                        game.duration *
                        1000 -
                        elapsed
                    );


                let points =
                    0;


                // Correct

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

                }

                // Incorrect

                else {

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


                // Lock answer

                socket.emit(
                    "answer-locked"
                );


                // Send answer progress
                // to host

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
                                    player =>
                                        player.answered
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


        // ========================================
        // END QUESTION
        // ========================================

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


        // ========================================
        // NEXT QUESTION
        // ========================================

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


        // ========================================
        // END GAME
        // ========================================

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


        // ========================================
        // DISCONNECT
        // ========================================

        socket.on(
            "disconnect",
            () => {

                console.log(
                    "Disconnected:",
                    socket.id
                );


                const code =
                    socket.gameCode;


                const game =
                    getGame(code);


                if (!game)
                    return;


                // ==================================
                // HOST DISCONNECT
                // ==================================

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
                                getGame(
                                    code
                                );


                            if (!current)
                                return;


                            // Host has not
                            // reconnected

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


                // ==================================
                // STUDENT DISCONNECT
                // ==================================

                const player =
                    game.players[
                        socket.playerId
                    ];


                if (!player)
                    return;


                /*
                 * IMPORTANT:
                 *
                 * Do NOT delete the player.
                 *
                 * The student may simply be
                 * moving from lobby.html to
                 * quiz.html, which creates a
                 * new Socket.IO connection.
                 *
                 * We keep the player in the game.
                 */

                console.log(
                    `Student disconnected: ${player.name}`
                );


                // Only clear socket reference

                if (
                    player.socketId ===
                    socket.id
                ) {

                    player.socketId =
                        null;

                }


                broadcastPlayers(
                    game
                );

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
            "===================================="
        );

        console.log(
            "ChemBonding Quiz Server"
        );

        console.log(
            `Running on port ${PORT}`
        );

        console.log(
            `${questions.length} questions available`
        );

        console.log(
            "===================================="
        );

    }
);
