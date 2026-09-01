const socket =
    io(https://chem-1-b9sa.onrender.com);

const code =
    document.getElementById("code");

const name =
    document.getElementById("name");

const joinBtn =
    document.getElementById("joinBtn");

const error =
    document.getElementById("error");


joinBtn.onclick = () => {

    const gameCode =
        code.value.trim();

    const playerName =
        name.value.trim();

    if (!/^\d{6}$/.test(gameCode)) {

        error.textContent =
            "Enter a 6-digit code.";

        return;
    }

    if (!playerName) {

        error.textContent =
            "Enter your name.";

        return;
    }

    joinBtn.disabled =
        true;

    joinBtn.textContent =
        "JOINING...";

    socket.emit(
        "join-game",
        {
            code: gameCode,
            name: playerName
        }
    );

};


socket.on(
    "joined-game",
    data => {

        sessionStorage.setItem(
            "quizCode",
            data.code
        );

        sessionStorage.setItem(
            "playerName",
            data.name
        );

        window.location.href =
            `lobby.html?code=${data.code}`;

    }
);


socket.on(
    "join-error",
    message => {

        error.textContent =
            message;

        joinBtn.disabled =
            false;

        joinBtn.textContent =
            "JOIN GAME";

    }
);
