console.log("host.js loaded");

const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});

const titleInput = document.getElementById("title");
const durationInput = document.getElementById("duration");
const createBtn = document.getElementById("createBtn");
const error = document.getElementById("error");
const created = document.getElementById("created");
const gameCode = document.getElementById("gameCode");
const lobbyBtn = document.getElementById("lobbyBtn");

let code = null;


// ================================
// SERVER CONNECTION
// ================================

socket.on("connect", () => {

    console.log(
        "Connected to ChemBonding server:",
        socket.id
    );

    error.textContent =
        "Connected to quiz server.";

    error.style.color = "#55ff9a";
});


socket.on("connect_error", (err) => {

    console.error(
        "Socket connection failed:",
        err
    );

    error.textContent =
        "Could not connect to quiz server.";

    error.style.color = "#ff5c6c";

    createBtn.disabled = false;
    createBtn.textContent = "CREATE QUIZ";
});


// ================================
// CREATE QUIZ
// ================================

createBtn.addEventListener("click", () => {

    console.log("CREATE QUIZ clicked");

    error.textContent = "";

    const quizTitle =
        titleInput.value.trim();

    const quizDuration =
        Number(durationInput.value);


    if (!quizTitle) {

        error.textContent =
            "Enter a quiz title.";

        error.style.color =
            "#ff5c6c";

        titleInput.focus();

        return;
    }


    if (!socket.connected) {

        error.textContent =
            "Not connected to the quiz server.";

        error.style.color =
            "#ff5c6c";

        return;
    }


    createBtn.disabled = true;

    createBtn.textContent =
        "CREATING...";


    console.log(
        "Sending create-game request..."
    );


    socket.emit(
        "create-game",
        {
            title: quizTitle,
            duration: quizDuration
        }
    );

});


// ================================
// GAME CREATED
// ================================

socket.on("game-created", (game) => {

    console.log(
        "GAME CREATED:",
        game
    );


    code =
        game.code;


    localStorage.setItem(
        "hostCode",
        game.code
    );


    localStorage.setItem(
        "hostToken",
        game.hostToken
    );


    localStorage.setItem(
        "quizTitle",
        game.title
    );


    gameCode.textContent =
        game.code;


    created.classList.remove(
        "hidden"
    );


    createBtn.disabled =
        false;


    createBtn.textContent =
        "QUIZ CREATED";


    error.textContent =
        "Quiz created successfully.";

    error.style.color =
        "#55ff9a";


    console.log(
        "GAME CODE:",
        game.code
    );

});


// ================================
// HOST ERROR
// ================================

socket.on("host-error", (message) => {

    console.error(
        "Host error:",
        message
    );


    error.textContent =
        message;


    error.style.color =
        "#ff5c6c";


    createBtn.disabled =
        false;


    createBtn.textContent =
        "CREATE QUIZ";

});


// ================================
// OPEN LOBBY
// ================================

lobbyBtn.addEventListener("click", () => {

    if (!code) {

        error.textContent =
            "Game code is not available.";

        return;
    }


    window.location.href =
        `lobby.html?code=${code}&host=true`;

});
        return;
    }

    createBtn.disabled = true;

    createBtn.textContent =
        "CREATING...";

    socket.emit(
        "create-game",
        {
            title:
                title.value.trim(),

            duration:
                Number(duration.value)
        }
    );

};


socket.on(
    "game-created",
    game => {

        code =
            game.code;

        localStorage.setItem(
            "hostCode",
            game.code
        );

        localStorage.setItem(
            "hostToken",
            game.hostToken
        );

        gameCode.textContent =
            game.code;

        created.classList.remove(
            "hidden"
        );

        createBtn.textContent =
            "QUIZ CREATED";

    }
);


socket.on(
    "host-error",
    message => {

        error.textContent =
            message;

        createBtn.disabled =
            false;

        createBtn.textContent =
            "CREATE QUIZ";

    }
);


lobbyBtn.onclick = () => {

    window.location.href =
        `lobby.html?code=${code}&host=true`;

};
