const socket =
    io(https://chem-1-b9sa.onrender.com);

const params =
    new URLSearchParams(
        location.search
    );

const code =
    params.get("code");

const isHost =
    params.get("host") === "true";


const question =
    document.getElementById(
        "question"
    );

const questionNumber =
    document.getElementById(
        "questionNumber"
    );

const timer =
    document.getElementById(
        "timer"
    );

const answers =
    document.getElementById(
        "answers"
    );

const result =
    document.getElementById(
        "result"
    );

const progressBar =
    document.getElementById(
        "progressBar"
    );

const leaderboard =
    document.getElementById(
        "leaderboard"
    );

const leaderboardList =
    document.getElementById(
        "leaderboardList"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );


let currentQuestion = null;
let timerInterval = null;


/*
Reconnect.
*/

if (isHost) {

    socket.emit(
        "host-reconnect",
        {
            code,

            hostToken:
                localStorage.getItem(
                    "hostToken"
                )
        }
    );

} else {

    socket.emit(
        "join-game",
        {
            code,

            name:
                sessionStorage.getItem(
                    "playerName"
                )
        }
    );

}


/*
QUESTION
*/

socket.on(
    "question",
    data => {

        currentQuestion =
            data;

        leaderboard.classList.add(
            "hidden"
        );

        result.textContent = "";

        question.textContent =
            data.question;

        questionNumber.textContent =
            `${data.index + 1}/${data.total}`;

        answers.innerHTML = "";

        data.options.forEach(
            (option, index) => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.className =
                    "answer";

                button.textContent =
                    option;

                button.onclick = () => {

                    submitAnswer(index);

                };

                answers.appendChild(
                    button
                );

            }
        );

        startTimer(data);

    }
);


/*
ANSWER
*/

function submitAnswer(index) {

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

}


socket.on(
    "answer-result",
    data => {

        if (data.correct) {

            result.textContent =
                `Correct! +${data.points} points`;

        } else {

            result.textContent =
                "Incorrect";

        }

    }
);


/*
TIMER
*/

function startTimer(data) {

    clearInterval(
        timerInterval
    );

    const end =
        data.startedAt +
        data.duration * 1000;

    function update() {

        const remaining =
            Math.max(
                0,
                end - Date.now()
            );

        const seconds =
            Math.ceil(
                remaining / 1000
            );

        timer.textContent =
            seconds;

        progressBar.style.width =
            `${(
                remaining /
                (data.duration * 1000)
            ) * 100}%`;

        if (seconds <= 0) {

            clearInterval(
                timerInterval
            );

            document
                .querySelectorAll(
                    ".answer"
                )
                .forEach(
                    b =>
                        b.disabled = true
                );

        }

    }

    update();

    timerInterval =
        setInterval(
            update,
            100
        );
}


/*
QUESTION ENDED
*/

socket.on(
    "question-ended",
    data => {

        clearInterval(
            timerInterval
        );

        showLeaderboard(
            data.leaderboard
        );

    }
);


function showLeaderboard(list) {

    leaderboard.classList.remove(
        "hidden"
    );

    leaderboardList.innerHTML = "";

    list.forEach(
        (player, index) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "rank";

            row.innerHTML =
                `<span>
                    #${index + 1}
                    ${escapeHTML(player.name)}
                 </span>
                 <strong>
                    ${player.score}
                 </strong>`;

            leaderboardList.appendChild(
                row
            );

        }
    );

    /*
    Only teacher gets NEXT.
    */

    if (isHost) {

        nextBtn.style.display =
            "block";

    } else {

        nextBtn.style.display =
            "none";

    }

}


nextBtn.onclick = () => {

    socket.emit(
        "next-question"
    );

};


/*
FINAL RESULTS
*/

socket.on(
    "game-finished",
    data => {

        sessionStorage.setItem(
            "finalLeaderboard",
            JSON.stringify(
                data.leaderboard
            )
        );

        window.location.href =
            `results.html?code=${code}`;

    }
);


function escapeHTML(text) {

    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}
