// ============================================
// ChemBonding - Lobby
// ============================================

console.log("lobby.js loaded");

const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});

const params =
    new URLSearchParams(window.location.search);

const gameCode =
    params.get("code");

const isHost =
    params.get("host") === "true";


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


let reconnecting = false;


// ============================================
// Basic validation
// ============================================

if (!gameCode) {

    alert("No game code provided.");

    window.location.href =
        "index.html";
}


// ============================================
// Display code
// ============================================

codeElement.textContent =
    gameCode;


// ============================================
// Connection
// ============================================

socket.on("connect", () => {

    console.log(
        "Lobby connected:",
        socket.id
    );

    reconnectToGame();

});


socket.on("connect_error", (error) => {

    console.error(
        "Lobby connection error:",
        error
    );

});


// ============================================
// Reconnect
// ============================================

function reconnectToGame() {

    if (reconnecting)
        return;

    reconnecting = true;


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

        socket.emit(
            "host-reconnect",
            {
                code: gameCode,
                hostToken: hostToken
            }
        );

    } else {

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

        socket.emit(
            "join-game",
            {
                code: gameCode,
                name: playerName
            }
        );
    }
}


// ============================================
// Host successfully reconnects
// ============================================

socket.on(
    "host-reconnected",
    (data) => {

        console.log(
            "Host reconnected:",
            data
        );

        titleElement.textContent =
            data.title;

        if (isHost) {

            startBtn.classList.remove(
                "hidden"
            );
        }
    }
);


// ============================================
// Student joins/rejoins
// ============================================

socket.on(
    "joined-game",
    (data) => {

        console.log(
            "Student joined:",
            data
        );

        titleElement.textContent =
            data.title;

        sessionStorage.setItem(
            "playerName",
            data.name
        );

        sessionStorage.setItem(
            "quizCode",
            data.code
        );

        if (isHost) {
            startBtn.classList.remove(
                "hidden"
            );
        }
    }
);


// ============================================
// Player list
// ============================================

socket.on(
    "players-updated",
    (players) => {

        console.log(
            "Players:",
            players
        );

        countElement.textContent =
            players.length;

        playersElement.innerHTML = "";


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

        startBtn.disabled = true;

        startBtn.textContent =
            "STARTING...";

        socket.emit(
            "start-game"
        );
    }
);


// ============================================
// First question
// ============================================

socket.on(
    "question",
    () => {

        window.location.href =
            `quiz.html?code=${gameCode}` +
            (isHost
                ? "&host=true"
                : "");

    }
);


// ============================================
// Host error
// ============================================

socket.on(
    "host-error",
    (message) => {

        alert(message);

        startBtn.disabled =
            false;

        startBtn.textContent =
            "START QUIZ";
    }
);


// ============================================
// Game closed
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
// Disconnect
// ============================================

socket.on(
    "disconnect",
    () => {

        console.log(
            "Lobby disconnected"
        );

    }
);
