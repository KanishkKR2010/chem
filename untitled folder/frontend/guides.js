/* ============================================================
   CHEMICAL BONDING GUIDES
============================================================ */

const concepts = {

    octet: {
        level: "BEGINNER",
        title: "Octet Rule",
        intro:
            "The octet rule helps explain why atoms form chemical bonds. Atoms tend to achieve a stable valence-shell electron arrangement.",
        idea:
            "Many main-group atoms tend toward eight electrons in their valence shell by gaining, losing or sharing electrons.",
        steps: [
            "Find the number of valence electrons of the atom.",
            "Determine how many electrons are needed for a stable outer shell.",
            "The atom may gain, lose or share electrons.",
            "The resulting arrangement determines the type of bonding involved."
        ],
        example:
            "Sodium has one valence electron and chlorine has seven. Sodium can transfer its outer electron to chlorine, producing Na⁺ and Cl⁻."
    },

    ionic: {
        level: "BEGINNER",
        title: "Ionic Bonding",
        intro:
            "Ionic bonding involves electrostatic attraction between oppositely charged ions.",
        idea:
            "An atom loses electrons and another atom gains electrons. The resulting positive and negative ions attract each other.",
        steps: [
            "Identify the metal and non-metal.",
            "Determine the valence electrons.",
            "The metal loses electrons and becomes a cation.",
            "The non-metal gains electrons and becomes an anion.",
            "The oppositely charged ions attract each other."
        ],
        example:
            "In sodium chloride, sodium forms Na⁺ and chlorine forms Cl⁻. Their electrostatic attraction forms the ionic compound NaCl."
    },

    covalent: {
        level: "BEGINNER",
        title: "Covalent Bonding",
        intro:
            "A covalent bond forms when atoms share electron pairs.",
        idea:
            "Covalent bonding commonly occurs between non-metal atoms. The shared electrons help the atoms achieve more stable electron arrangements.",
        steps: [
            "Identify the atoms involved.",
            "Count their valence electrons.",
            "Determine how many electrons are required.",
            "Share electron pairs between atoms.",
            "Represent the shared pairs as covalent bonds."
        ],
        example:
            "In H₂, each hydrogen contributes one electron to a shared pair, producing a single covalent bond."
    },

    lewis: {
        level: "INTERMEDIATE",
        title: "Lewis Structures",
        intro:
            "Lewis structures show valence electrons, bonding pairs and lone pairs.",
        idea:
            "A Lewis structure provides a simple electron-dot representation of a molecule or ion.",
        steps: [
            "Count the total number of valence electrons.",
            "Choose a suitable central atom.",
            "Connect atoms using single bonds.",
            "Complete the outer atoms' octets.",
            "Place remaining electrons on the central atom.",
            "Use multiple bonds if required."
        ],
        example:
            "For H₂O, oxygen is the central atom. It forms two O–H bonds and has two lone pairs."
    },

    vsepr: {
        level: "INTERMEDIATE",
        title: "VSEPR Theory",
        intro:
            "VSEPR theory predicts molecular geometry from repulsions between electron domains around a central atom.",
        idea:
            "Electron domains arrange themselves as far apart as possible because they repel one another.",
        steps: [
            "Draw the Lewis structure.",
            "Count electron domains around the central atom.",
            "Include bonding pairs and lone pairs.",
            "Determine the electron-domain geometry.",
            "Determine the molecular shape."
        ],
        example:
            "CH₄ has four bonding electron domains and no lone pairs around carbon, giving it a tetrahedral molecular geometry."
    },

    hybridisation: {
        level: "INTERMEDIATE",
        title: "Hybridisation",
        intro:
            "Hybridisation describes the mixing of atomic orbitals to form hybrid orbitals used in bonding models.",
        idea:
            "Different numbers and types of hybrid orbitals correspond to different electron-domain geometries.",
        steps: [
            "Draw the Lewis structure.",
            "Count electron domains around the central atom.",
            "Relate the steric number to the hybridisation.",
            "Determine the electron-domain geometry.",
            "Use the geometry to understand the molecular shape."
        ],
        example:
            "A central carbon atom with four electron domains is commonly described using sp³ hybridisation."
    },

    polarity: {
        level: "ADVANCED",
        title: "Molecular Polarity",
        intro:
            "Molecular polarity depends on bond polarity and the overall arrangement of those bonds.",
        idea:
            "Electronegativity differences create bond dipoles. Molecular geometry determines whether those dipoles cancel or produce a net dipole.",
        steps: [
            "Compare the electronegativities of bonded atoms.",
            "Identify polar bonds.",
            "Determine the molecular geometry.",
            "Consider the direction of each bond dipole.",
            "Determine whether the dipoles cancel."
        ],
        example:
            "A molecule can contain polar bonds but still have no net dipole if its geometry causes the bond dipoles to cancel."
    },

    mot: {
        level: "ADVANCED",
        title: "Molecular Orbital Theory",
        intro:
            "Molecular Orbital Theory describes electrons as occupying molecular orbitals that extend over the molecule.",
        idea:
            "Atomic orbitals combine to produce bonding and antibonding molecular orbitals.",
        steps: [
            "Identify the atomic orbitals that interact.",
            "Combine suitable atomic orbitals.",
            "Form bonding and antibonding molecular orbitals.",
            "Fill electrons according to the appropriate rules.",
            "Use the electron arrangement to determine molecular properties."
        ],
        example:
            "Molecular orbital diagrams can be used to determine bond order and whether a species has unpaired electrons."
    }
};


/* ============================================================
   OPEN GUIDE
============================================================ */

function openGuide(id) {

    const concept = concepts[id];

    document.getElementById("conceptLevel").textContent = concept.level;
    document.getElementById("conceptTitle").textContent = concept.title;
    document.getElementById("conceptIntro").textContent = concept.intro;
    document.getElementById("conceptIdea").textContent = concept.idea;
    document.getElementById("conceptExample").textContent = concept.example;

    const steps = document.getElementById("conceptSteps");

    steps.innerHTML = "";

    concept.steps.forEach((step, index) => {

        steps.innerHTML += `
            <div class="step">
                <div class="step-number">${index + 1}</div>
                <p>${step}</p>
            </div>
        `;

    });

    document.getElementById("conceptViewer")
        .classList.remove("hidden");

    document.getElementById("conceptViewer")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ============================================================
   CLOSE GUIDE
============================================================ */

function closeGuide() {

    document.getElementById("conceptViewer")
        .classList.add("hidden");

}


/* ============================================================
   PROGRESS
============================================================ */

let completedConcepts =
    JSON.parse(localStorage.getItem("chemBondingProgress")) || [];

function completeConcept() {

    const title =
        document.getElementById("conceptTitle").textContent;

    if (!completedConcepts.includes(title)) {

        completedConcepts.push(title);

        localStorage.setItem(
            "chemBondingProgress",
            JSON.stringify(completedConcepts)
        );

    }

    updateProgress();

    alert("Concept completed!");

}


function updateProgress() {

    const total = Object.keys(concepts).length;

    const percentage =
        Math.round((completedConcepts.length / total) * 100);

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").textContent =
        percentage + "% completed";

}

updateProgress();


/* ============================================================
   SCROLL
============================================================ */

function scrollToGuides() {

    document.getElementById("guides")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ============================================================
   QUIZ
============================================================ */

const quiz = [

    {
        q: "Which type of bond involves transfer of electrons?",
        options: [
            "Ionic bond",
            "Covalent bond",
            "Coordinate bond",
            "Hydrogen bond"
        ],
        answer: 0
    },

    {
        q: "How many valence electrons does carbon have?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        answer: 1
    },

    {
        q: "What is the molecular shape of CH₄?",
        options: [
            "Linear",
            "Bent",
            "Trigonal planar",
            "Tetrahedral"
        ],
        answer: 3
    },

    {
        q: "How many lone pairs are present on oxygen in H₂O?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: 2
    },

    {
        q: "Which theory is commonly used to predict molecular shape from electron-domain repulsion?",
        options: [
            "VSEPR theory",
            "Kinetic theory",
            "Collision theory",
            "Valence band theory"
        ],
        answer: 0
    },

    {
        q: "What is the hybridisation commonly assigned to carbon in CH₄?",
        options: [
            "sp",
            "sp²",
            "sp³",
            "dsp²"
        ],
        answer: 2
    },

    {
        q: "A covalent bond is formed by:",
        options: [
            "Sharing electron pairs",
            "Destroying electrons",
            "Only losing protons",
            "Only gaining neutrons"
        ],
        answer: 0
    },

    {
        q: "What determines whether bond dipoles produce an overall molecular dipole?",
        options: [
            "Only molecular mass",
            "Only number of atoms",
            "Bond arrangement and molecular geometry",
            "Only the number of neutrons"
        ],
        answer: 2
    },

    {
        q: "Which particles are directly involved in ordinary chemical bonding?",
        options: [
            "Valence electrons",
            "Neutrons only",
            "Protons only",
            "Atomic nuclei only"
        ],
        answer: 0
    },

    {
        q: "Which molecular orbital is generally lower in energy than the atomic orbitals from which it forms?",
        options: [
            "Bonding molecular orbital",
            "Antibonding molecular orbital",
            "Core nucleus",
            "Free neutron orbital"
        ],
        answer: 0
    }

];


let currentQuestion = 0;
let score = 0;
let selected = false;


function loadQuestion() {

    selected = false;

    const q = quiz[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} / ${quiz.length}`;

    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("question").textContent =
        q.q;

    document.getElementById("quizProgress").style.width =
        ((currentQuestion + 1) / quiz.length * 100) + "%";

    const options =
        document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach((option, index) => {

        const div = document.createElement("div");

        div.className = "option";
        div.textContent = option;

        div.onclick = () => selectAnswer(index, div);

        options.appendChild(div);

    });

    document.getElementById("nextBtn").disabled = true;
    document.getElementById("nextBtn").textContent =
        currentQuestion === quiz.length - 1
        ? "Finish Quiz"
        : "Next Question →";
}


function selectAnswer(index, element) {

    if (selected) return;

    selected = true;

    const correct =
        quiz[currentQuestion].answer;

    const allOptions =
        document.querySelectorAll(".option");

    allOptions.forEach((option, i) => {

        if (i === correct) {
            option.classList.add("correct");
        }

    });

    if (index === correct) {

        score++;

    } else {

        element.classList.add("wrong");

    }

    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("nextBtn").disabled = false;
}


function nextQuestion() {

    if (!selected) return;

    currentQuestion++;

    if (currentQuestion >= quiz.length) {

        finishQuiz();
        return;

    }

    loadQuestion();
}


function finishQuiz() {

    const percentage =
        Math.round((score / quiz.length) * 100);

    document.getElementById("question").innerHTML =
        `Quiz Complete!<br><br>
        You scored ${score}/${quiz.length}
        (${percentage}%).`;

    document.getElementById("options").innerHTML = `
        <div class="concept-box">
            <h3>Your Result</h3>
            <p>
                ${getResultMessage(percentage)}
            </p>
        </div>
    `;

    document.getElementById("nextBtn").style.display = "none";

}


function getResultMessage(percentage) {

    if (percentage >= 90)
        return "Excellent understanding of chemical bonding.";

    if (percentage >= 70)
        return "Strong understanding. Review a few concepts and try again.";

    if (percentage >= 50)
        return "Good start. Review the concept guides and retake the quiz.";

    return "Go through the guides carefully and try the quiz again.";

}


loadQuestion();