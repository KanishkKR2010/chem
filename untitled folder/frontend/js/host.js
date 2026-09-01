console.log("host.js loaded");


// ========================================
// SOCKET CONNECTION
// ========================================

const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});


// ========================================
// HTML ELEMENTS
// ========================================

const titleInput = document.getElementById("title");
const durationInput = document.getElementById("duration");
const createBtn = document.getElementById("createBtn");
const error = document.getElementById("error");
const created = document.getElementById("created");
const gameCode = document.getElementById("gameCode");
const lobbyBtn = document.getElementById("lobbyBtn");

let code = null;


// ========================================
// SERVER CONNECTION
// ========================================

socket.on("connect", () => {

    console.log(
        "Connected to ChemBonding server:",
        socket.id
    );

    error.textContent =
        "Connected to quiz server.";

    error.style.color =
        "#55ff9a";

});


socket.on("connect_error", (err) => {

    console.error(
        "Socket connection failed:",
        err
    );

    error.textContent =
        "Could not connect to quiz server.";

    error.style.color =
        "#ff5c6c";

    createBtn.disabled =
        false;

    createBtn.textContent =
        "CREATE QUIZ";

});


// ========================================
// CREATE QUIZ
// ========================================

createBtn.addEventListener("click", () => {

    console.log("CREATE QUIZ clicked");


    // Clear previous message

    error.textContent = "";


    // Get values

    const quizTitle =
        titleInput.value.trim();

    const quizDuration =
        Number(durationInput.value);


    // ====================================
    // VALIDATE TITLE
    // ====================================

    if (!quizTitle) {

        error.textContent =
            "Enter a quiz title.";

        error.style.color =
            "#ff5c6c";

        titleInput.focus();

        return;
    }


    // ====================================
    // CHECK SERVER
    // ====================================

    if (!socket.connected) {

        error.textContent =
            "Not connected to the quiz server.";

        error.style.color =
            "#ff5c6c";

        console.error(
            "Socket is not connected."
        );

        return;
    }


    // ====================================
    // DISABLE BUTTON
    // ====================================

    createBtn.disabled =
        true;

    createBtn.textContent =
        "CREATING...";


    console.log(
        "Sending create-game request..."
    );


    // ====================================
    // SEND TO SERVER
    // ====================================

    socket.emit(
        "create-game",
        {
            title: quizTitle,
            duration: quizDuration
        }
    );

});


// ========================================
// GAME CREATED
// ========================================

socket.on("game-created", (game) => {

    console.log(
        "GAME CREATED:",
        game
    );


    if (!game || !game.code) {

        console.error(
            "Invalid game data:",
            game
        );

        error.textContent =
            "Server returned invalid game data.";

        error.style.color =
            "#ff5c6c";

        createBtn.disabled =
            false;

        createBtn.textContent =
            "CREATE QUIZ";

        return;
    }


    // Save game code

    code =
        game.code;


    // ====================================
    // SAVE HOST DATA
    // ====================================

    localStorage.setItem(
        "hostCode",
        game.code
    );


    if (game.hostToken) {

        localStorage.setItem(
            "hostToken",
            game.hostToken
        );

    }


    if (game.title) {

        localStorage.setItem(
            "quizTitle",
            game.title
        );

    }


    // ====================================
    // DISPLAY GAME CODE
    // ====================================

    gameCode.textContent =
        game.code;


    created.classList.remove(
        "hidden"
    );


    // ====================================
    // UPDATE BUTTON
    // ====================================

    createBtn.disabled =
        false;

    createBtn.textContent =
        "QUIZ CREATED";


    // ====================================
    // SUCCESS MESSAGE
    // ====================================

    error.textContent =
        "Quiz created successfully.";

    error.style.color =
        "#55ff9a";


    console.log(
        "GAME CODE:",
        game.code
    );

});


// ========================================
// HOST ERROR
// ========================================

socket.on("host-error", (message) => {

    console.error(
        "Host error:",
        message
    );


    error.textContent =
        message || "Unable to create quiz.";

    error.style.color =
        "#ff5c6c";


    createBtn.disabled =
        false;

    createBtn.textContent =
        "CREATE QUIZ";

});


// ========================================
// OPEN LOBBY
// ========================================

lobbyBtn.addEventListener("click", () => {

    console.log(
        "OPEN LOBBY clicked"
    );


    if (!code) {

        error.textContent =
            "Game code is not available.";

        error.style.color =
            "#ff5c6c";

        return;
    }


    window.location.href =
        `lobby.html?code=${encodeURIComponent(code)}&host=true`;

});
