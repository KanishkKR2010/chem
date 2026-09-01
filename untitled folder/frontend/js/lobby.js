// ============================================
// ChemBonding - Lobby
// ============================================

console.log("lobby.js loaded");


// ============================================
// SOCKET
// ============================================

const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});


// ============================================
// URL
// ============================================

const params =
    new URLSearchParams(
        window.location.search
    );

const gameCode =
    (params.get("code") || "")
        .trim()
        .toUpperCase();

const isHost =
    params.get("host") === "true";


// ============================================
// ELEMENTS
// ============================================

const codeElement =
    document.getElementById("code");

const titleElement =
    document.getElementById("title");

const countElement =
    document.getElementById("count");

const playersElement =
    document.getElementById("players");

const startBtn =
    document.getElementById("startBtn");


// ============================================
// STATE
// ============================================

let reconnecting = false;
let gameStarted = false;


// ============================================
// VALIDATION
// ============================================

if (!gameCode) {

    alert("No game code provided.");

    window.location.href =
        "index.html";
}


// ============================================
// DISPLAY CODE
// ============================================

codeElement.textContent =
    gameCode;


// ============================================
// SAVE CODE
// ============================================

sessionStorage.setItem(
    "quizCode",
    gameCode
);


// ============================================
// CONNECTION
// ============================================

socket.on("connect", () => {

    console.log(
        "Lobby connected:",
        socket.id
    );

    reconnectToGame();

});


socket.on(
    "connect_error",
    (error) => {

        console.error(
            "Lobby connection error:",
            error
        );

    }
);


// ============================================
// RECONNECT
// ============================================

function reconnectToGame() {

    if (reconnecting)
        return;

    reconnecting = true;


    // ------------------------------
    // HOST
    // ------------------------------

    if (isHost) {

        const hostToken =
            localStorage.getItem(
                "hostToken"
            );


        if (!hostToken) {

            alert(
                "Host session not found."
            );

            window.location.href =
                "host.html";

            return;
        }


        console.log(
            "Reconnecting host..."
        );


        socket.emit(
            "host-reconnect",
            {
                code: gameCode,
                hostToken: hostToken
            }
        );


        return;
    }


    // ------------------------------
    // STUDENT
    // ------------------------------

    const playerName =
        sessionStorage.getItem(
            "playerName"
        );


    if (!playerName) {

        alert(
            "Student session not found."
        );

        window.location.href =
            "student.html";

        return;
    }


    console.log(
        "Rejoining as:",
        playerName
    );


    socket.emit(
        "join-game",
        {
            code: gameCode,
            name: playerName
        }
    );

}


// ============================================
// HOST RECONNECTED
// ============================================

socket.on(
    "host-reconnected",
    (data) => {

        console.log(
            "Host reconnected:",
            data
        );


        titleElement.textContent =
            data.title ||
            "ChemBonding Quiz";


        if (isHost) {

            startBtn.classList.remove(
                "hidden"
            );

        }

    }
);


// ============================================
// STUDENT JOINED
// ============================================

socket.on(
    "joined-game",
    (data) => {

        console.log(
            "Joined game:",
            data
        );


        titleElement.textContent =
            data.title ||
            "ChemBonding Quiz";


        sessionStorage.setItem(
            "playerName",
            data.name
        );


        sessionStorage.setItem(
            "quizCode",
            data.code
        );


        // Only host sees START

        if (isHost) {

            startBtn.classList.remove(
                "hidden"
            );

        }

    }
);


// ============================================
// PLAYERS UPDATED
// ============================================

socket.on(
    "players-updated",
    (players) => {

        console.log(
            "Players:",
            players
        );


        if (!Array.isArray(players))
            return;


        countElement.textContent =
            players.length;


        playersElement.innerHTML =
            "";


        if (players.length === 0) {

            playersElement.innerHTML =
                `<div class="player">
                    Waiting for students...
                </div>`;

            return;
        }


        players.forEach(
            (player, index) => {

                const playerDiv =
                    document.createElement(
                        "div"
                    );


                playerDiv.className =
                    "player";


                playerDiv.textContent =
                    `${index + 1}. ${player.name}`;


                playersElement.appendChild(
                    playerDiv
                );

            }
        );

    }
);


// ============================================
// START QUIZ
// ============================================

startBtn.addEventListener(
    "click",
    () => {

        if (!isHost)
            return;


        if (gameStarted)
            return;


        gameStarted = true;


        startBtn.disabled =
            true;


        startBtn.textContent =
            "STARTING...";


        console.log(
            "Starting game:",
            gameCode
        );


        socket.emit(
            "start-game"
        );

    }
);


// ============================================
// QUESTION STARTED
// ============================================

socket.on(
    "question",
    (data) => {

        console.log(
            "Question started:",
            data
        );


        if (gameStarted === false) {

            gameStarted = true;

        }


        window.location.href =
            `quiz.html?code=${encodeURIComponent(gameCode)}` +
            (
                isHost
                    ? "&host=true"
                    : ""
            );

    }
);


// ============================================
// GAME STARTED
// ============================================

socket.on(
    "game-started",
    (data) => {

        console.log(
            "Game started:",
            data
        );

    }
);


// ============================================
// HOST ERROR
// ============================================

socket.on(
    "host-error",
    (message) => {

        console.error(
            "Host error:",
            message
        );


        alert(
            message ||
            "Unable to start the quiz."
        );


        gameStarted =
            false;


        startBtn.disabled =
            false;


        startBtn.textContent =
            "START QUIZ";

    }
);


// ============================================
// JOIN ERROR
// ============================================

socket.on(
    "join-error",
    (message) => {

        console.error(
            "Join error:",
            message
        );


        alert(
            message ||
            "Unable to join the game."
        );


        window.location.href =
            "student.html";

    }
);


// ============================================
// GAME CLOSED
// ============================================

socket.on(
    "game-closed",
    () => {

        alert(
            "The quiz has been closed."
        );


        window.location.href =
            "index.html";

    }
);


// ============================================
// DISCONNECT
// ============================================

socket.on(
    "disconnect",
    () => {

        console.log(
            "Lobby disconnected"
        );

    }
);
