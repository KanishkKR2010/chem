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

const PORT = process.env.PORT || 3000;

const questions =
    JSON.parse(
        fs.readFileSync("./questions.json", "utf8")
    );

const games = new Map();

function generateCode() {

    let code;

    do {
        code = Math.floor(
            100000 + Math.random() * 900000
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
    return games.get(String(code));
}

function getPlayers(game) {

    return Object.entries(game.players)
        .map(([id, player]) => ({
            id,
            name: player.name,
            score: player.score,
            answered: player.answered
        }));
}

function getLeaderboard(game) {

    return getPlayers(game)
        .sort((a, b) => b.score - a.score);
}

function publicQuestion(game) {

    const q =
        questions[game.questionIndex];

    if (!q) return null;

    return {
        id: q.id,
        question: q.question,
        options: q.options,
        points: q.points || 1000,
        index: game.questionIndex,
        total: questions.length,
        duration: game.duration,
        startedAt: game.questionStartedAt
    };
}

function broadcastPlayers(game) {

    io.to(`game-${game.code}`)
        .emit(
            "players-updated",
            getPlayers(game)
        );
}

function sendQuestion(game) {

    if (
        game.questionIndex >=
        questions.length
    ) {
        finishGame(game);
        return;
    }

    game.status = "question";

    game.questionStartedAt =
        Date.now();

    for (const player of
        Object.values(game.players)) {

        player.answered = false;
    }

    io.to(`game-${game.code}`)
        .emit(
            "question",
            publicQuestion(game)
        );

    setTimeout(() => {

        const current =
            getGame(game.code);

        if (!current) return;

        if (current.status !== "question")
            return;

        endQuestion(current);

    }, game.duration * 1000);
}

function endQuestion(game) {

    if (game.status !== "question")
        return;

    game.status = "leaderboard";

    io.to(`game-${game.code}`)
        .emit(
            "question-ended",
            {
                leaderboard:
                    getLeaderboard(game)
            }
        );
}

function finishGame(game) {

    game.status = "finished";

    io.to(`game-${game.code}`)
        .emit(
            "game-finished",
            {
                leaderboard:
                    getLeaderboard(game)
            }
        );
}

app.get("/", (req, res) => {

    res.json({
        status: "online",
        service: "ChemBonding Quiz Server"
    });

});

app.get("/health", (req, res) => {

    res.json({
        status: "ok"
    });

});

io.on("connection", socket => {

    console.log(
        "Connected:",
        socket.id
    );


    // =====================================================
    // CREATE GAME
    // =====================================================

    socket.on("create-game", data => {

        const title =
            cleanName(data.title) ||
            "Chemical Bonding Quiz";

        const duration =
            Math.max(
                5,
                Math.min(
                    Number(data.duration) || 20,
                    120
                )
            );

        const code =
            generateCode();

        const hostToken =
            Math.random()
                .toString(36)
                .substring(2) +
            Date.now().toString(36);

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
            `game-${code}`
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

        broadcastPlayers(game);

    });


    // =====================================================
    // RECONNECT HOST
    // =====================================================

    socket.on("host-reconnect", data => {

        const game =
            getGame(data.code);

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

        game.hostSocket =
            socket.id;

        socket.gameCode =
            game.code;

        socket.isHost =
            true;

        socket.hostToken =
            game.hostToken;

        socket.join(
            `game-${game.code}`
        );

        socket.emit(
            "host-reconnected",
            {
                code: game.code,
                title: game.title
            }
        );

        broadcastPlayers(game);

    });


    // =====================================================
    // JOIN GAME
    // =====================================================

    socket.on("join-game", data => {

        const code =
            String(data.code || "")
                .trim();

        const name =
            cleanName(data.name);

        if (!/^\d{6}$/.test(code)) {

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

        if (game.status !== "lobby") {

            socket.emit(
                "join-error",
                "The quiz has already started."
            );

            return;
        }

        const duplicate =
            Object.values(
                game.players
            ).some(
                p =>
                    p.name.toLowerCase() ===
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
            `game-${code}`
        );

        socket.emit(
            "joined-game",
            {
                code,
                name,
                title: game.title
            }
        );

        broadcastPlayers(game);

    });


    // =====================================================
    // START
    // =====================================================

    socket.on("start-game", () => {

        const game =
            getGame(socket.gameCode);

        if (!game) return;

        if (
            socket.id !==
            game.hostSocket
        ) return;

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

        game.questionIndex = 0;

        sendQuestion(game);

    });


    // =====================================================
    // ANSWER
    // =====================================================

    socket.on("submit-answer", data => {

        const game =
            getGame(socket.gameCode);

        if (!game) return;

        if (game.status !== "question")
            return;

        const player =
            game.players[socket.id];

        if (!player) return;

        if (player.answered)
            return;

        const answer =
            Number(data.answer);

        const q =
            questions[
                game.questionIndex
            ];

        if (!q) return;

        player.answered = true;

        const elapsed =
            Date.now() -
            game.questionStartedAt;

        const remaining =
            Math.max(
                0,
                game.duration * 1000 -
                elapsed
            );

        let points = 0;

        if (
            answer === q.answer
        ) {

            const base =
                q.points || 1000;

            const bonus =
                Math.round(
                    base *
                    0.5 *
                    (
                        remaining /
                        (game.duration * 1000)
                    )
                );

            points =
                base + bonus;

            player.score += points;

            socket.emit(
                "answer-result",
                {
                    correct: true,
                    points,
                    score: player.score
                }
            );

        } else {

            socket.emit(
                "answer-result",
                {
                    correct: false,
                    points: 0,
                    score: player.score
                }
            );

        }

        socket.emit(
            "answer-locked"
        );

        io.to(game.hostSocket)
            .emit(
                "answer-progress",
                {
                    answered:
                        Object.values(
                            game.players
                        ).filter(
                            p => p.answered
                        ).length,

                    total:
                        Object.keys(
                            game.players
                        ).length
                }
            );

    });


    // =====================================================
    // END QUESTION
    // =====================================================

    socket.on("end-question", () => {

        const game =
            getGame(socket.gameCode);

        if (!game) return;

        if (
            socket.id !==
            game.hostSocket
        ) return;

        endQuestion(game);

    });


    // =====================================================
    // NEXT QUESTION
    // =====================================================

    socket.on("next-question", () => {

        const game =
            getGame(socket.gameCode);

        if (!game) return;

        if (
            socket.id !==
            game.hostSocket
        ) return;

        if (
            game.status !==
            "leaderboard"
        ) return;

        game.questionIndex++;

        if (
            game.questionIndex >=
            questions.length
        ) {

            finishGame(game);

            return;
        }

        sendQuestion(game);

    });


    // =====================================================
    // END GAME
    // =====================================================

    socket.on("end-game", () => {

        const game =
            getGame(socket.gameCode);

        if (!game) return;

        if (
            socket.id !==
            game.hostSocket
        ) return;

        finishGame(game);

    });


    // =====================================================
    // DISCONNECT
    // =====================================================

    socket.on("disconnect", () => {

        const code =
            socket.gameCode;

        const game =
            getGame(code);

        if (!game) return;

        if (
            socket.id ===
            game.hostSocket
        ) {

            /*
             * Don't immediately delete the room.
             * The host can reconnect.
             */

            setTimeout(() => {

                const current =
                    getGame(code);

                if (!current) return;

                if (
                    current.hostSocket ===
                    socket.id
                ) {

                    io.to(
                        `game-${code}`
                    ).emit(
                        "game-closed"
                    );

                    games.delete(code);
                }

            }, 60000);

            return;
        }

        delete game.players[
            socket.id
        ];

        broadcastPlayers(game);

    });

});

server.listen(
    PORT,
    () => {

        console.log(
            `ChemBonding server running on port ${PORT}`
        );

    }
);