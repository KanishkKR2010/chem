// ============================================
// ChemBonding - Student
// ============================================

console.log("student.js loaded");


// ============================================
// SOCKET CONNECTION
// ============================================

const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});


// ============================================
// HTML ELEMENTS
// ============================================

const codeInput =
    document.getElementById("code");

const nameInput =
    document.getElementById("name");

const joinBtn =
    document.getElementById("joinBtn");

const errorBox =
    document.getElementById("error");


// ============================================
// PERSISTENT PLAYER ID
// ============================================

let playerId =
    sessionStorage.getItem("playerId");


if (!playerId) {

    playerId =
        crypto.randomUUID();

    sessionStorage.setItem(
        "playerId",
        playerId
    );

}


// ============================================
// SOCKET CONNECTION
// ============================================

socket.on("connect", () => {

    console.log(
        "Student connected:",
        socket.id
    );

    errorBox.textContent = "";

});


// ============================================
// CONNECTION ERROR
// ============================================

socket.on(
    "connect_error",
    (error) => {

        console.error(
            "Connection error:",
            error
        );

        errorBox.textContent =
            "Unable to connect to quiz server.";

        errorBox.style.color =
            "#ff5c6c";

        joinBtn.disabled =
            false;

        joinBtn.textContent =
            "JOIN GAME";

    }
);


// ============================================
// JOIN BUTTON
// ============================================

joinBtn.addEventListener(
    "click",
    joinGame
);


// ============================================
// ENTER KEY
// ============================================

nameInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            joinGame();

        }

    }
);


codeInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            joinGame();

        }

    }
);


// ============================================
// JOIN GAME
// ============================================

function joinGame() {

    errorBox.textContent = "";


    const code =
        codeInput.value
            .trim()
            .toUpperCase();


    const name =
        nameInput.value
            .trim();


    // ========================================
    // CODE VALIDATION
    // ========================================

    if (!/^\d{6}$/.test(code)) {

        errorBox.textContent =
            "Enter the 6-digit game code.";

        errorBox.style.color =
            "#ff5c6c";

        codeInput.focus();

        return;

    }


    // ========================================
    // NAME VALIDATION
    // ========================================

    if (!name) {

        errorBox.textContent =
            "Enter your name.";

        errorBox.style.color =
            "#ff5c6c";

        nameInput.focus();

        return;

    }


    if (name.length > 30) {

        errorBox.textContent =
            "Name must be 30 characters or less.";

        errorBox.style.color =
            "#ff5c6c";

        return;

    }


    // ========================================
    // CONNECTION CHECK
    // ========================================

    if (!socket.connected) {

        errorBox.textContent =
            "Quiz server is not connected.";

        errorBox.style.color =
            "#ff5c6c";

        return;

    }


    // ========================================
    // SAVE STUDENT DATA
    // ========================================

    sessionStorage.setItem(
        "playerId",
        playerId
    );

    sessionStorage.setItem(
        "playerName",
        name
    );

    sessionStorage.setItem(
        "quizCode",
        code
    );


    // ========================================
    // BUTTON
    // ========================================

    joinBtn.disabled =
        true;

    joinBtn.textContent =
        "JOINING...";


    console.log(
        "Joining game:",
        code
    );

    console.log(
        "Player ID:",
        playerId
    );


    // ========================================
    // SEND TO SERVER
    // ========================================

    socket.emit(
        "join-game",
        {
            code: code,
            name: name,
            playerId: playerId
        }
    );

}


// ============================================
// SUCCESSFULLY JOINED
// ============================================

socket.on(
    "joined-game",
    (data) => {

        console.log(
            "Joined game:",
            data
        );


        // Save returned data

        sessionStorage.setItem(
            "playerId",
            data.playerId || playerId
        );

        sessionStorage.setItem(
            "playerName",
            data.name
        );

        sessionStorage.setItem(
            "quizCode",
            data.code
        );

        sessionStorage.setItem(
            "quizTitle",
            data.title ||
            "ChemBonding Quiz"
        );


        // ====================================
        // GO TO LOBBY
        // ====================================

        window.location.href =
            `lobby.html?code=${encodeURIComponent(data.code)}`;

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


        errorBox.textContent =
            message ||
            "Unable to join game.";

        errorBox.style.color =
            "#ff5c6c";


        joinBtn.disabled =
            false;

        joinBtn.textContent =
            "JOIN GAME";

    }
);
