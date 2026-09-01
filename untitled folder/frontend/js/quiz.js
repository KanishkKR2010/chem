// ============================================
// ChemBonding - Quiz Engine
// ============================================

console.log("quiz.js loaded");


const socket = io(API_URL, {
    transports: ["websocket", "polling"]
});


const params =
    new URLSearchParams(
        window.location.search
    );


const gameCode =
    params.get("code");

const isHost =
    params.get("host") === "true";


const questionElement =
    document.getElementById("question");

const questionNumberElement =
    document.getElementById(
        "questionNumber"
    );

const timerElement =
    document.getElementById("timer");

const answersElement =
    document.getElementById("answers");

const resultElement =
    document.getElementById("result");

const progressBar =
    document.getElementById("progressBar");

const leaderboardElement =
    document.getElementById(
        "leaderboard"
    );

const leaderboardListElement =
    document.getElementById(
        "leaderboardList"
    );

const nextButton =
    document.getElementById("nextBtn");


let currentQuestion = null;

let timerInterval = null;

let answered = false;


// ============================================
// Validate
// ============================================

if (!gameCode) {

    window.location.href =
        "index.html";
}


// ============================================
// CONNECT
// ============================================

socket.on("connect", () => {

    console.log(
        "Quiz connected:",
        socket.id
    );

    reconnectQuiz();

});


socket.on(
    "connect_error",
    (error) => {

        console.error(
            "Quiz connection error:",
            error
        );

    }
);


// ============================================
// RECONNECT
// ============================================

function reconnectQuiz() {

    if (isHost) {

        const hostToken =
            localStorage.getItem(
                "hostToken"
            );

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
// QUESTION
// ============================================

socket.on(
    "question",
    (data) => {

        console.log(
            "New question:",
            data
        );

        currentQuestion =
            data;

        answered = false;

        displayQuestion(data);

    }
);


function displayQuestion(data) {

    clearInterval(
        timerInterval
    );


    leaderboardElement.classList.add(
        "hidden"
    );


    resultElement.textContent =
        "";


    questionElement.textContent =
        data.question;


    questionNumberElement.textContent =
        `${data.index + 1}/${data.total}`;


    answersElement.innerHTML =
        "";


    const answerLetters =
        ["A", "B", "C", "D"];


    data.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer";


            button.innerHTML =
                `<strong>
                    ${answerLetters[index]}
                </strong>
                <span>
                    ${escapeHTML(option)}
                </span>`;


            button.addEventListener(
                "click",
                () => {

                    submitAnswer(
                        index
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    startTimer(data);

}


// ============================================
// SUBMIT ANSWER
// ============================================

function submitAnswer(index) {

    if (answered)
        return;

    answered = true;


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    socket.emit(
        "submit-answer",
        {
            answer: index
        }
    );


    resultElement.textContent =
        "Answer submitted";

}


// ============================================
// ANSWER RESULT
// ============================================

socket.on(
    "answer-result",
    (data) => {

        if (data.correct) {

            resultElement.textContent =
                `Correct! +${data.points} points`;

        } else {

            resultElement.textContent =
                "Incorrect answer";

        }

    }
);


// ============================================
// ANSWER LOCKED
// ============================================

socket.on(
    "answer-locked",
    () => {

        document
            .querySelectorAll(
                ".answer"
            )
            .forEach(
                button => {
                    button.disabled =
                        true;
                }
            );

    }
);


// ============================================
// TIMER
// ============================================

function startTimer(data) {

    clearInterval(
        timerInterval
    );


    const duration =
        data.duration * 1000;


    const start =
        data.startedAt;


    const end =
        start + duration;


    function updateTimer() {

        const now =
            Date.now();


        const remaining =
            Math.max(
                0,
                end - now
            );


        const seconds =
            Math.ceil(
                remaining / 1000
            );


        timerElement.textContent =
            seconds;


        const percentage =
            (
                remaining /
                duration
            ) * 100;


        progressBar.style.width =
            `${percentage}%`;


        if (seconds <= 0) {

            clearInterval(
                timerInterval
            );


            document
                .querySelectorAll(
                    ".answer"
                )
                .forEach(
                    button => {
                        button.disabled =
                            true;
                    }
                );

        }

    }


    updateTimer();


    timerInterval =
        setInterval(
            updateTimer,
            100
        );

}


// ============================================
// QUESTION ENDED
// ============================================

socket.on(
    "question-ended",
    (data) => {

        clearInterval(
            timerInterval
        );


        document
            .querySelectorAll(
                ".answer"
            )
            .forEach(
                button => {
                    button.disabled =
                        true;
                }
            );


        showLeaderboard(
            data.leaderboard
        );

    }
);


// ============================================
// LEADERBOARD
// ============================================

function showLeaderboard(players) {

    leaderboardElement.classList.remove(
        "hidden"
    );


    leaderboardListElement.innerHTML =
        "";


    if (
        !players ||
        players.length === 0
    ) {

        leaderboardListElement.innerHTML =
            "<p>No players.</p>";

        return;
    }


    players.forEach(
        (player, index) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "rank";


            let medal = "";


            if (index === 0)
                medal = "🥇";

            if (index === 1)
                medal = "🥈";

            if (index === 2)
                medal = "🥉";


            row.innerHTML =
                `<span>
                    ${medal}
                    #${index + 1}
                    ${escapeHTML(player.name)}
                </span>

                <strong>
                    ${player.score}
                </strong>`;


            leaderboardListElement.appendChild(
                row
            );

        }
    );


    if (isHost) {

        nextButton.style.display =
            "block";

        nextButton.disabled =
            false;

        nextButton.textContent =
            "NEXT QUESTION";

    } else {

        nextButton.style.display =
            "none";

    }

}


// ============================================
// NEXT QUESTION
// ============================================

nextButton.addEventListener(
    "click",
    () => {

        if (!isHost)
            return;


        nextButton.disabled =
            true;


        nextButton.textContent =
            "LOADING...";


        socket.emit(
            "next-question"
        );

    }
);


// ============================================
// FINAL GAME
// ============================================

socket.on(
    "game-finished",
    (data) => {

        clearInterval(
            timerInterval
        );


        sessionStorage.setItem(
            "finalLeaderboard",
            JSON.stringify(
                data.leaderboard
            )
        );


        window.location.href =
            `results.html?code=${gameCode}`;

    }
);


// ============================================
// GAME CLOSED
// ============================================

socket.on(
    "game-closed",
    () => {

        alert(
            "The teacher ended the quiz."
        );

        window.location.href =
            "index.html";

    }
);


// ============================================
// HTML SECURITY
// ============================================

function escapeHTML(text) {

    return String(text)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );
}
