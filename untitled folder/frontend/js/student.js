// ============================================
// ChemBonding - Student
// ============================================

console.log("student.js loaded");

const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});

const codeInput = document.getElementById("code");
const nameInput = document.getElementById("name");
const joinBtn = document.getElementById("joinBtn");
const errorBox = document.getElementById("error");

socket.on("connect", () => {
    console.log("Student connected:", socket.id);
});

socket.on("connect_error", (error) => {
    console.error("Connection error:", error);

    errorBox.textContent =
        "Unable to connect to quiz server.";
});

joinBtn.addEventListener("click", joinGame);

nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        joinGame();
    }
});

codeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        joinGame();
    }
});

function joinGame() {

    errorBox.textContent = "";

    const code =
        codeInput.value.trim();

    const name =
        nameInput.value.trim();

    if (!/^\d{6}$/.test(code)) {

        errorBox.textContent =
            "Enter the 6-digit game code.";

        return;
    }

    if (!name) {

        errorBox.textContent =
            "Enter your name.";

        return;
    }

    if (name.length > 30) {

        errorBox.textContent =
            "Name must be 30 characters or less.";

        return;
    }

    if (!socket.connected) {

        errorBox.textContent =
            "Quiz server is not connected.";

        return;
    }

    joinBtn.disabled = true;
    joinBtn.textContent = "JOINING...";

    socket.emit("join-game", {
        code: code,
        name: name
    });
}


// ============================================
// Successfully joined
// ============================================

socket.on("joined-game", (data) => {

    console.log("Joined:", data);

    sessionStorage.setItem(
        "quizCode",
        data.code
    );

    sessionStorage.setItem(
        "playerName",
        data.name
    );

    sessionStorage.setItem(
        "quizTitle",
        data.title
    );

    window.location.href =
        `lobby.html?code=${data.code}`;
});


// ============================================
// Join error
// ============================================

socket.on("join-error", (message) => {

    console.error("Join error:", message);

    errorBox.textContent = message;

    joinBtn.disabled = false;

    joinBtn.textContent = "JOIN GAME";
});
