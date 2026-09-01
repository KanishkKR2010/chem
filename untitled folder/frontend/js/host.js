const socket =
    io(https://chem-1-b9sa.onrender.com);

const title =
    document.getElementById("title");

const duration =
    document.getElementById("duration");

const createBtn =
    document.getElementById("createBtn");

const error =
    document.getElementById("error");

const created =
    document.getElementById("created");

const gameCode =
    document.getElementById("gameCode");

const lobbyBtn =
    document.getElementById("lobbyBtn");


let code = null;


createBtn.onclick = () => {

    error.textContent = "";

    if (!title.value.trim()) {

        error.textContent =
            "Enter a quiz title.";

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
