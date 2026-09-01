

const elements = [
    ["H","Hydrogen",1,1.008,53,2.20],
    ["He","Helium",2,4.003,31,null],

    ["Li","Lithium",3,6.94,167,0.98],
    ["Be","Beryllium",4,9.012,112,1.57],
    ["B","Boron",5,10.81,87,2.04],
    ["C","Carbon",6,12.011,67,2.55],
    ["N","Nitrogen",7,14.007,56,3.04],
    ["O","Oxygen",8,15.999,48,3.44],
    ["F","Fluorine",9,18.998,42,3.98],
    ["Ne","Neon",10,20.180,38,null],

    ["Na","Sodium",11,22.990,190,0.93],
    ["Mg","Magnesium",12,24.305,145,1.31],
    ["Al","Aluminium",13,26.982,118,1.61],
    ["Si","Silicon",14,28.085,111,1.90],
    ["P","Phosphorus",15,30.974,98,2.19],
    ["S","Sulfur",16,32.06,88,2.58],
    ["Cl","Chlorine",17,35.45,79,3.16],
    ["Ar","Argon",18,39.948,71,null],

    ["K","Potassium",19,39.098,243,0.82],
    ["Ca","Calcium",20,40.078,194,1.00],
    ["Sc","Scandium",21,44.956,184,1.36],
    ["Ti","Titanium",22,47.867,176,1.54],
    ["V","Vanadium",23,50.942,171,1.63],
    ["Cr","Chromium",24,51.996,166,1.66],
    ["Mn","Manganese",25,54.938,161,1.55],
    ["Fe","Iron",26,55.845,156,1.83],
    ["Co","Cobalt",27,58.933,152,1.88],
    ["Ni","Nickel",28,58.693,149,1.91],
    ["Cu","Copper",29,63.546,145,1.90],
    ["Zn","Zinc",30,65.38,142,1.65],
    ["Ga","Gallium",31,69.723,136,1.81],
    ["Ge","Germanium",32,72.630,125,2.01],
    ["As","Arsenic",33,74.922,114,2.18],
    ["Se","Selenium",34,78.971,103,2.55],
    ["Br","Bromine",35,79.904,94,2.96],
    ["Kr","Krypton",36,83.798,88,3.00],

    ["Rb","Rubidium",37,85.468,265,0.82],
    ["Sr","Strontium",38,87.62,219,0.95],
    ["Y","Yttrium",39,88.906,212,1.22],
    ["Zr","Zirconium",40,91.224,206,1.33],
    ["Nb","Niobium",41,92.906,198,1.60],
    ["Mo","Molybdenum",42,95.95,190,2.16],
    ["Tc","Technetium",43,98,183,1.90],
    ["Ru","Ruthenium",44,101.07,178,2.20],
    ["Rh","Rhodium",45,102.91,173,2.28],
    ["Pd","Palladium",46,106.42,169,2.20],
    ["Ag","Silver",47,107.868,165,1.93],
    ["Cd","Cadmium",48,112.414,161,1.69],
    ["In","Indium",49,114.818,156,1.78],
    ["Sn","Tin",50,118.710,145,1.96],
    ["Sb","Antimony",51,121.760,133,2.05],
    ["Te","Tellurium",52,127.60,123,2.10],
    ["I","Iodine",53,126.904,115,2.66],
    ["Xe","Xenon",54,131.293,108,2.60],

    ["Cs","Cesium",55,132.905,298,0.79],
    ["Ba","Barium",56,137.327,253,0.89],

    ["La","Lanthanum",57,138.905,195,1.10],
    ["Ce","Cerium",58,140.116,185,1.12],
    ["Pr","Praseodymium",59,140.908,247,1.13],
    ["Nd","Neodymium",60,144.242,206,1.14],
    ["Pm","Promethium",61,145,205,1.13],
    ["Sm","Samarium",62,150.36,238,1.17],
    ["Eu","Europium",63,151.964,231,1.20],
    ["Gd","Gadolinium",64,157.25,233,1.20],
    ["Tb","Terbium",65,158.925,225,1.10],
    ["Dy","Dysprosium",66,162.500,228,1.22],
    ["Ho","Holmium",67,164.930,226,1.23],
    ["Er","Erbium",68,167.259,226,1.24],
    ["Tm","Thulium",69,168.934,222,1.25],
    ["Yb","Ytterbium",70,173.045,222,1.10],
    ["Lu","Lutetium",71,174.967,217,1.27],

    ["Hf","Hafnium",72,178.49,208,1.30],
    ["Ta","Tantalum",73,180.948,200,1.50],
    ["W","Tungsten",74,183.84,193,2.36],
    ["Re","Rhenium",75,186.207,188,1.90],
    ["Os","Osmium",76,190.23,185,2.20],
    ["Ir","Iridium",77,192.217,180,2.20],
    ["Pt","Platinum",78,195.084,177,2.28],
    ["Au","Gold",79,196.967,174,2.54],
    ["Hg","Mercury",80,200.592,171,2.00],
    ["Tl","Thallium",81,204.38,156,1.62],
    ["Pb","Lead",82,207.2,154,2.33],
    ["Bi","Bismuth",83,208.980,143,2.02],
    ["Po","Polonium",84,209,135,2.00],
    ["At","Astatine",85,210,127,2.20],
    ["Rn","Radon",86,222,120,null],

    ["Fr","Francium",87,223,348,0.70],
    ["Ra","Radium",88,226,283,0.90],

    ["Ac","Actinium",89,227,260,1.10],
    ["Th","Thorium",90,232.038,237,1.30],
    ["Pa","Protactinium",91,231.036,243,1.50],
    ["U","Uranium",92,238.029,240,1.38],
    ["Np","Neptunium",93,237,221,1.36],
    ["Pu","Plutonium",94,244,243,1.28],
    ["Am","Americium",95,243,244,1.30],
    ["Cm","Curium",96,247,245,1.30],
    ["Bk","Berkelium",97,247,244,1.30],
    ["Cf","Californium",98,251,245,1.30],
    ["Es","Einsteinium",99,252,245,1.30],
    ["Fm","Fermium",100,257,245,1.30],
    ["Md","Mendelevium",101,258,246,1.30],
    ["No","Nobelium",102,259,246,1.30],
    ["Lr","Lawrencium",103,266,246,1.30],

    ["Rf","Rutherfordium",104,267,157,null],
    ["Db","Dubnium",105,268,149,null],
    ["Sg","Seaborgium",106,269,143,null],
    ["Bh","Bohrium",107,270,141,null],
    ["Hs","Hassium",108,277,134,null],
    ["Mt","Meitnerium",109,278,129,null],
    ["Ds","Darmstadtium",110,281,128,null],
    ["Rg","Roentgenium",111,282,121,null],
    ["Cn","Copernicium",112,285,122,null],
    ["Nh","Nihonium",113,286,136,null],
    ["Fl","Flerovium",114,289,143,null],
    ["Mc","Moscovium",115,290,162,null],
    ["Lv","Livermorium",116,293,175,null],
    ["Ts","Tennessine",117,294,165,null],
    ["Og","Oganesson",118,294,152,null]
];


/* =========================================================
   MOLECULE DATABASE
========================================================= */

const molecules = [

    {
        name: "Water",
        formula: "H₂O",
        category: "inorganic",
        geometry: "Bent",
        hybridisation: "sp³",
        angle: "104.5°",
        domains: 4,
        lone: 2,
        polarity: "Polar",
        mass: "18.015 g/mol",
        lewis: "  ..\nH-O-H\n  ..",

        atoms: [
            ["O",0,0,0],
            ["H",1.55,0,0],
            ["H",-0.5,1.47,0]
        ],

        bonds: [
            [0,1],
            [0,2]
        ]
    },

    {
        name: "Carbon dioxide",
        formula: "CO₂",
        category: "inorganic",
        geometry: "Linear",
        hybridisation: "sp",
        angle: "180°",
        domains: 2,
        lone: 0,
        polarity: "Non-polar",
        mass: "44.01 g/mol",
        lewis: "O=C=O",

        atoms: [
            ["C",0,0,0],
            ["O",1.8,0,0],
            ["O",-1.8,0,0]
        ],

        bonds: [
            [0,1],
            [0,2]
        ]
    },

    {
        name: "Ammonia",
        formula: "NH₃",
        category: "inorganic",
        geometry: "Trigonal pyramidal",
        hybridisation: "sp³",
        angle: "107°",
        domains: 4,
        lone: 1,
        polarity: "Polar",
        mass: "17.031 g/mol",
        lewis: "  ..\nH-N-H\n  |\n  H",

        atoms: [
            ["N",0,0,0],
            ["H",1.5,0,0],
            ["H",-0.75,1.3,0],
            ["H",-0.75,-0.7,1.2]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3]
        ]
    },

    {
        name: "Methane",
        formula: "CH₄",
        category: "organic",
        geometry: "Tetrahedral",
        hybridisation: "sp³",
        angle: "109.5°",
        domains: 4,
        lone: 0,
        polarity: "Non-polar",
        mass: "16.043 g/mol",
        lewis: "    H\n    |\nH - C - H\n    |\n    H",

        atoms: [
            ["C",0,0,0],
            ["H",1.5,1.5,1.5],
            ["H",-1.5,-1.5,1.5],
            ["H",-1.5,1.5,-1.5],
            ["H",1.5,-1.5,-1.5]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3],
            [0,4]
        ]
    },

    {
        name: "Hydrogen sulfide",
        formula: "H₂S",
        category: "inorganic",
        geometry: "Bent",
        hybridisation: "sp³",
        angle: "92.1°",
        domains: 4,
        lone: 2,
        polarity: "Polar",
        mass: "34.08 g/mol",
        lewis: "  ..\nH-S-H\n  ..",

        atoms: [
            ["S",0,0,0],
            ["H",1.6,0,0],
            ["H",-1.6,0,0]
        ],

        bonds: [
            [0,1],
            [0,2]
        ]
    },

    {
        name: "Sulfur dioxide",
        formula: "SO₂",
        category: "inorganic",
        geometry: "Bent",
        hybridisation: "sp²",
        angle: "119°",
        domains: 3,
        lone: 1,
        polarity: "Polar",
        mass: "64.066 g/mol",
        lewis: "O=S=O",

        atoms: [
            ["S",0,0,0],
            ["O",1.55,1,0],
            ["O",-1.55,1,0]
        ],

        bonds: [
            [0,1],
            [0,2]
        ]
    },

    {
        name: "Hydrogen chloride",
        formula: "HCl",
        category: "acid",
        geometry: "Linear",
        hybridisation: "sp",
        angle: "180°",
        domains: 1,
        lone: 3,
        polarity: "Polar",
        mass: "36.46 g/mol",
        lewis: "H-Cl",

        atoms: [
            ["H",-1,0,0],
            ["Cl",1,0,0]
        ],

        bonds: [
            [0,1]
        ]
    },

    {
        name: "Oxygen",
        formula: "O₂",
        category: "inorganic",
        geometry: "Linear",
        hybridisation: "sp",
        angle: "180°",
        domains: 2,
        lone: 2,
        polarity: "Non-polar",
        mass: "31.998 g/mol",
        lewis: "O=O",

        atoms: [
            ["O",-1,0,0],
            ["O",1,0,0]
        ],

        bonds: [
            [0,1]
        ]
    },

    {
        name: "Nitrogen",
        formula: "N₂",
        category: "inorganic",
        geometry: "Linear",
        hybridisation: "sp",
        angle: "180°",
        domains: 2,
        lone: 1,
        polarity: "Non-polar",
        mass: "28.014 g/mol",
        lewis: "N≡N",

        atoms: [
            ["N",-1,0,0],
            ["N",1,0,0]
        ],

        bonds: [
            [0,1]
        ]
    },

    {
        name: "Fluorine",
        formula: "F₂",
        category: "inorganic",
        geometry: "Linear",
        hybridisation: "sp",
        angle: "180°",
        domains: 2,
        lone: 3,
        polarity: "Non-polar",
        mass: "37.996 g/mol",
        lewis: "F-F",

        atoms: [
            ["F",-1,0,0],
            ["F",1,0,0]
        ],

        bonds: [
            [0,1]
        ]
    },

    {
        name: "Hydrogen",
        formula: "H₂",
        category: "inorganic",
        geometry: "Linear",
        hybridisation: "sp",
        angle: "180°",
        domains: 1,
        lone: 0,
        polarity: "Non-polar",
        mass: "2.016 g/mol",
        lewis: "H-H",

        atoms: [
            ["H",-1,0,0],
            ["H",1,0,0]
        ],

        bonds: [
            [0,1]
        ]
    },

    {
        name: "Hydrogen peroxide",
        formula: "H₂O₂",
        category: "inorganic",
        geometry: "Bent",
        hybridisation: "sp³",
        angle: "94.8°",
        domains: 4,
        lone: 2,
        polarity: "Polar",
        mass: "34.014 g/mol",
        lewis: "H-O-O-H",

        atoms: [
            ["O",-0.7,0,0],
            ["O",0.7,0,0],
            ["H",-1.8,0.7,0],
            ["H",1.8,-0.7,0]
        ],

        bonds: [
            [0,1],
            [0,2],
            [1,3]
        ]
    },

    {
        name: "Methanol",
        formula: "CH₄O",
        category: "organic",
        geometry: "Tetrahedral",
        hybridisation: "sp³",
        angle: "109.5°",
        domains: 4,
        lone: 2,
        polarity: "Polar",
        mass: "32.042 g/mol",
        lewis: "CH₃-O-H",

        atoms: [
            ["C",-0.7,0,0],
            ["O",0.8,0,0],
            ["H",1.8,0.8,0],
            ["H",-1.5,0.9,0],
            ["H",-1.5,-0.9,0],
            ["H",-0.5,0,-1.3]
        ],

        bonds: [
            [0,1],
            [1,2],
            [0,3],
            [0,4],
            [0,5]
        ]
    },

    {
        name: "Ethene",
        formula: "C₂H₄",
        category: "organic",
        geometry: "Trigonal planar",
        hybridisation: "sp²",
        angle: "120°",
        domains: 3,
        lone: 0,
        polarity: "Non-polar",
        mass: "28.054 g/mol",
        lewis: "H₂C=CH₂",

        atoms: [
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["H",-1.4,1,0],
            ["H",-1.4,-1,0],
            ["H",1.4,1,0],
            ["H",1.4,-1,0]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3],
            [1,4],
            [1,5]
        ]
    },

    {
        name: "Ethane",
        formula: "C₂H₆",
        category: "organic",
        geometry: "Tetrahedral",
        hybridisation: "sp³",
        angle: "109.5°",
        domains: 4,
        lone: 0,
        polarity: "Non-polar",
        mass: "30.070 g/mol",
        lewis: "CH₃-CH₃",

        atoms: [
            ["C",-0.75,0,0],
            ["C",0.75,0,0],

            ["H",-1.5,1,0],
            ["H",-1.5,-1,0],
            ["H",-0.8,0,1.2],

            ["H",1.5,1,0],
            ["H",1.5,-1,0],
            ["H",0.8,0,-1.2]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3],
            [0,4],
            [1,5],
            [1,6],
            [1,7]
        ]
    },

    {
        name: "Boron trifluoride",
        formula: "BF₃",
        category: "inorganic",
        geometry: "Trigonal planar",
        hybridisation: "sp²",
        angle: "120°",
        domains: 3,
        lone: 0,
        polarity: "Non-polar",
        mass: "67.81 g/mol",
        lewis: "BF₃",

        atoms: [
            ["B",0,0,0],
            ["F",1.5,0,0],
            ["F",-0.75,1.3,0],
            ["F",-0.75,-1.3,0]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3]
        ]
    },

    {
        name: "Phosphorus pentachloride",
        formula: "PCl₅",
        category: "inorganic",
        geometry: "Trigonal bipyramidal",
        hybridisation: "sp³d",
        angle: "90° / 120°",
        domains: 5,
        lone: 0,
        polarity: "Non-polar",
        mass: "208.24 g/mol",
        lewis: "PCl₅",

        atoms: [
            ["P",0,0,0],
            ["Cl",1.8,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",0,1.8,0],
            ["Cl",0,-0.9,1.56],
            ["Cl",0,-0.9,-1.56]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3],
            [0,4],
            [0,5]
        ]
    },

    {
        name: "Sulfur hexafluoride",
        formula: "SF₆",
        category: "inorganic",
        geometry: "Octahedral",
        hybridisation: "sp³d²",
        angle: "90°",
        domains: 6,
        lone: 0,
        polarity: "Non-polar",
        mass: "146.06 g/mol",
        lewis: "SF₆",

        atoms: [
            ["S",0,0,0],
            ["F",1.7,0,0],
            ["F",-1.7,0,0],
            ["F",0,1.7,0],
            ["F",0,-1.7,0],
            ["F",0,0,1.7],
            ["F",0,0,-1.7]
        ],

        bonds: [
            [0,1],
            [0,2],
            [0,3],
            [0,4],
            [0,5],
            [0,6]
        ]
    }

];


/* =========================================================
   GENERATE PLACEHOLDER DATABASE ENTRIES
   =========================================================

   This makes the interface capable of handling 1000+
   entries without pretending that automatically generated
   entries are real chemical structures.

   Replace these with validated molecular records later.
========================================================= */

const extraNames = [
    "Sodium chloride",
    "Potassium chloride",
    "Calcium chloride",
    "Magnesium oxide",
    "Calcium oxide",
    "Sodium hydroxide",
    "Potassium hydroxide",
    "Calcium hydroxide",
    "Sulfuric acid",
    "Nitric acid",
    "Phosphoric acid",
    "Acetic acid",
    "Carbonic acid",
    "Sodium carbonate",
    "Sodium bicarbonate",
    "Potassium nitrate",
    "Ammonium chloride",
    "Ammonia",
    "Glucose",
    "Fructose",
    "Sucrose",
    "Ethanol",
    "Propanol",
    "Propanone",
    "Benzene",
    "Toluene",
    "Phenol",
    "Aniline",
    "Urea"
];

extraNames.forEach((name, i) => {

    if (!molecules.some(m => m.name === name)) {

        molecules.push({

            name,
            formula: "—",
            category: "organic",

            geometry: "See structure",
            hybridisation: "—",
            angle: "—",
            domains: "—",
            lone: "—",
            polarity: "—",
            mass: "—",

            lewis: "Structure data pending",

            atoms: [
                ["C",0,0,0],
                ["H",1.4,0,0]
            ],

            bonds: [
                [0,1]
            ]

        });

    }

});


/* =========================================================
   THREE.JS VARIABLES
========================================================= */

let scene;
let camera;
let renderer;

let moleculeGroup;

let atomObjects = [];
let bondObjects = [];

let labelsVisible = false;
let bondsVisible = true;

let currentMode = "ball";


/* =========================================================
   ATOM COLORS / RADII
========================================================= */

const atomColors = {

    H: 0xffffff,
    C: 0x555555,
    N: 0x305cff,
    O: 0xff3333,
    F: 0x65ff66,
    Cl: 0x35d96b,
    Br: 0x8b4513,
    I: 0x7b3fc6,
    S: 0xffcc33,
    P: 0xff8b20,
    B: 0xffaa55,
    Na: 0x6b8cff,
    K: 0x9b65ff,
    Ca: 0x88aaff,
    Fe: 0xc77b30
};

const atomRadii = {

    H: .28,
    C: .38,
    N: .36,
    O: .35,
    F: .33,
    Cl: .40,
    Br: .45,
    I: .50,
    S: .42,
    P: .42,
    B: .35,
    Na: .45,
    K: .48,
    Ca: .46,
    Fe: .44

};


/* =========================================================
   INITIALIZE THREE.JS
========================================================= */

function initViewer() {

    const viewer = document.getElementById("viewer");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(

        45,

        viewer.clientWidth / viewer.clientHeight,

        .1,
        1000

    );

    camera.position.set(0, 0, 8);


    renderer = new THREE.WebGLRenderer({

        antialias: true,
        alpha: true

    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        viewer.clientWidth,
        viewer.clientHeight
    );

    viewer.appendChild(renderer.domElement);


    /* Lights */

    const ambient = new THREE.AmbientLight(
        0xffffff,
        .8
    );

    scene.add(ambient);


    const light = new THREE.PointLight(
        0xffffff,
        1.2
    );

    light.position.set(5,5,8);

    scene.add(light);


    moleculeGroup = new THREE.Group();

    scene.add(moleculeGroup);


    enableMouseControls(viewer);

    animate();

}


/* =========================================================
   MOUSE ROTATION / ZOOM
========================================================= */

function enableMouseControls(viewer) {

    let dragging = false;

    let previousX = 0;
    let previousY = 0;


    viewer.addEventListener(
        "pointerdown",
        e => {

            dragging = true;

            previousX = e.clientX;
            previousY = e.clientY;

        }
    );


    window.addEventListener(
        "pointerup",
        () => {

            dragging = false;

        }
    );


    window.addEventListener(
        "pointermove",
        e => {

            if (!dragging || !moleculeGroup)
                return;


            const dx =
                e.clientX - previousX;

            const dy =
                e.clientY - previousY;


            moleculeGroup.rotation.y +=
                dx * .008;

            moleculeGroup.rotation.x +=
                dy * .008;


            previousX = e.clientX;
            previousY = e.clientY;

        }
    );


    viewer.addEventListener(
        "wheel",
        e => {

            e.preventDefault();

            camera.position.z +=
                e.deltaY * .005;

            camera.position.z =
                Math.max(
                    3,
                    Math.min(
                        20,
                        camera.position.z
                    )
                );

        },
        { passive:false }
    );

}


/* =========================================================
   DRAW MOLECULE
========================================================= */

function drawMolecule(molecule) {

    clearMolecule();


    molecule.atoms.forEach(
        (atom, index) => {

            const symbol = atom[0];

            const geometry =
                new THREE.SphereGeometry(
                    getAtomRadius(symbol),
                    32,
                    32
                );


            const material =
                new THREE.MeshStandardMaterial({

                    color:
                        getAtomColor(symbol),

                    roughness: .35,

                    metalness: .05

                });


            const mesh =
                new THREE.Mesh(
                    geometry,
                    material
                );


            mesh.position.set(
                atom[1],
                atom[2],
                atom[3]
            );


            mesh.userData.symbol =
                symbol;


            moleculeGroup.add(mesh);

            atomObjects.push(mesh);


            if (labelsVisible) {

                createLabel(
                    symbol,
                    mesh.position
                );

            }

        }
    );


    if (bondsVisible) {

        molecule.bonds.forEach(
            bond => {

                createBond(

                    molecule.atoms[bond[0]],
                    molecule.atoms[bond[1]]

                );

            }
        );

    }


    centerMolecule(molecule);

}


/* =========================================================
   CREATE BOND
========================================================= */

function createBond(a, b) {

    const start =
        new THREE.Vector3(
            a[1],
            a[2],
            a[3]
        );

    const end =
        new THREE.Vector3(
            b[1],
            b[2],
            b[3]
        );


    const direction =
        new THREE.Vector3()
            .subVectors(end, start);


    const length =
        direction.length();


    const geometry =
        new THREE.CylinderGeometry(
            .09,
            .09,
            length,
            16
        );


    const material =
        new THREE.MeshStandardMaterial({

            color: 0xb5c4bd

        });


    const cylinder =
        new THREE.Mesh(
            geometry,
            material
        );


    cylinder.position
        .copy(start)
        .add(end)
        .multiplyScalar(.5);


    cylinder.quaternion.setFromUnitVectors(

        new THREE.Vector3(0,1,0),

        direction.normalize()

    );


    moleculeGroup.add(cylinder);

    bondObjects.push(cylinder);

}


/* =========================================================
   LABELS
========================================================= */

function createLabel(symbol, position) {

    const canvas =
        document.createElement("canvas");

    canvas.width = 128;
    canvas.height = 64;

    const ctx =
        canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";

    ctx.font = "bold 36px Arial";

    ctx.textAlign = "center";

    ctx.fillText(
        symbol,
        64,
        42
    );


    const texture =
        new THREE.CanvasTexture(canvas);


    const material =
        new THREE.SpriteMaterial({

            map: texture,

            transparent: true

        });


    const sprite =
        new THREE.Sprite(material);


    sprite.position.copy(position);

    sprite.position.y += .45;

    sprite.scale.set(
        .7,
        .35,
        1
    );


    moleculeGroup.add(sprite);

    atomObjects.push(sprite);

}


/* =========================================================
   CLEAR MOLECULE
========================================================= */

function clearMolecule() {

    while (
        moleculeGroup.children.length
    ) {

        const child =
            moleculeGroup.children[0];

        if (child.geometry)
            child.geometry.dispose();

        if (child.material) {

            if (child.material.map)
                child.material.map.dispose();

            child.material.dispose();

        }

        moleculeGroup.remove(child);

    }

    atomObjects = [];
    bondObjects = [];

}


/* =========================================================
   CENTER MOLECULE
========================================================= */

function centerMolecule(molecule) {

    let center =
        new THREE.Vector3();


    molecule.atoms.forEach(atom => {

        center.add(
            new THREE.Vector3(
                atom[1],
                atom[2],
                atom[3]
            )
        );

    });


    center.divideScalar(
        molecule.atoms.length
    );


    moleculeGroup.position.copy(
        center.multiplyScalar(-1)
    );


    moleculeGroup.rotation.set(
        0,
        0,
        0
    );


    camera.position.z = 6;

}


/* =========================================================
   CAMERA RESET
========================================================= */

function resetCamera() {

    camera.position.set(
        0,
        0,
        6
    );

    moleculeGroup.rotation.set(
        0,
        0,
        0
    );

}


/* =========================================================
   ATOM HELPERS
========================================================= */

function getAtomColor(symbol) {

    return atomColors[symbol] || 0xaaaaaa;

}


function getAtomRadius(symbol) {

    if (currentMode === "space") {

        return (
            atomRadii[symbol] || .4
        ) * 1.45;

    }

    return atomRadii[symbol] || .4;

}


/* =========================================================
   ANIMATION
========================================================= */

function animate() {

    requestAnimationFrame(animate);

    if (renderer) {

        renderer.render(
            scene,
            camera
        );

    }

}


/* =========================================================
   MOLECULE UI
========================================================= */

function renderMoleculeList(
    search = "",
    category = "all"
) {

    const list =
        document.getElementById(
            "moleculeList"
        );


    list.innerHTML = "";


    const filtered =
        molecules.filter(m => {

            const searchMatch =

                m.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )

                ||

                m.formula
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );


            const categoryMatch =

                category === "all"
                ||
                m.category === category;


            return (
                searchMatch &&
                categoryMatch
            );

        });


    filtered.forEach(
        (molecule, index) => {

            const item =
                document.createElement("div");


            item.className =
                "molecule-item";


            item.innerHTML = `

                <strong>
                    ${molecule.name}
                </strong>

                <span>
                    ${molecule.formula}
                </span>

            `;


            item.addEventListener(
                "click",
                () => {

                    selectMolecule(
                        molecule
                    );

                }
            );


            list.appendChild(item);

        }
    );

}


/* =========================================================
   SELECT MOLECULE
========================================================= */

function selectMolecule(molecule) {

    document.getElementById(
        "moleculeName"
    ).textContent = molecule.name;


    document.getElementById(
        "formula"
    ).textContent = molecule.formula;


    document.getElementById(
        "moleculeCategory"
    ).textContent = molecule.category;


    document.getElementById(
        "geometry"
    ).textContent = molecule.geometry;


    document.getElementById(
        "hybridisation"
    ).textContent =
        molecule.hybridisation;


    document.getElementById(
        "bondAngle"
    ).textContent =
        molecule.angle;


    document.getElementById(
        "domains"
    ).textContent =
        molecule.domains;


    document.getElementById(
        "lonePairs"
    ).textContent =
        molecule.lone;


    document.getElementById(
        "polarity"
    ).textContent =
        molecule.polarity;


    document.getElementById(
        "molarMass"
    ).textContent =
        molecule.mass;


    document.getElementById(
        "lewisStructure"
    ).textContent =
        molecule.lewis;


    const summary =
        document.getElementById(
            "atomSummary"
        );


    summary.innerHTML = "";


    const atomCounts = {};


    molecule.atoms.forEach(
        atom => {

            atomCounts[atom[0]] =
                (atomCounts[atom[0]] || 0) + 1;

        }
    );


    Object.entries(atomCounts)
        .forEach(
            ([symbol,count]) => {

                const chip =
                    document.createElement(
                        "span"
                    );

                chip.className =
                    "atom-chip";

                chip.textContent =
                    `${symbol} × ${count}`;

                summary.appendChild(
                    chip
                );

            }
        );


    drawMolecule(molecule);


    document.querySelectorAll(
        ".molecule-item"
    ).forEach(item => {

        item.classList.remove(
            "active"
        );

    });

}


/* =========================================================
   PERIODIC TABLE
========================================================= */

function buildPeriodicTable() {

    const table =
        document.getElementById(
            "periodicTable"
        );


    table.innerHTML = "";


    elements.forEach(
        (element,index) => {

            const [
                symbol,
                name,
                number,
                mass,
                radius,
                electronegativity
            ] = element;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "element";


            const position =
                getPeriodicPosition(
                    number
                );


            div.style.gridColumn =
                position.column;

            div.style.gridRow =
                position.row;


            div.innerHTML = `

                <div class="number">
                    ${number}
                </div>

                <div class="symbol">
                    ${symbol}
                </div>

                <div class="name">
                    ${name}
                </div>

            `;


            div.addEventListener(
                "click",
                () => {

                    showElement(
                        element
                    );

                }
            );


            table.appendChild(div);

        }
    );

}


/* =========================================================
   PERIODIC POSITIONS
========================================================= */

function getPeriodicPosition(number) {

    if (number === 1)
        return {row:1,column:1};

    if (number === 2)
        return {row:1,column:18};


    const rows = {

        3:2,4:2,
        5:2,6:2,7:2,8:2,9:2,10:2,

        11:3,12:3,
        13:3,14:3,15:3,16:3,17:3,18:3,

        19:4,20:4,

        21:4,22:4,23:4,24:4,25:4,
        26:4,27:4,28:4,29:4,30:4,
        31:4,32:4,33:4,34:4,35:4,36:4,

        37:5,38:5,

        39:5,40:5,41:5,42:5,43:5,
        44:5,45:5,46:5,47:5,48:5,
        49:5,50:5,51:5,52:5,53:5,54:5,

        55:6,56:6,

        57:8,

        58:8,59:8,60:8,61:8,62:8,
        63:8,64:8,65:8,66:8,67:8,
        68:8,69:8,70:8,71:8,

        72:6,73:6,74:6,75:6,76:6,
        77:6,78:6,79:6,80:6,81:6,
        82:6,83:6,84:6,85:6,86:6,

        87:7,88:7,

        89:9,

        90:9,91:9,92:9,93:9,94:9,
        95:9,96:9,97:9,98:9,99:9,
        100:9,101:9,102:9,103:9,

        104:7,105:7,106:7,107:7,108:7,
        109:7,110:7,111:7,112:7,113:7,
        114:7,115:7,116:7,117:7,118:7

    };


    let row =
        rows[number];


    let column;


    if (number === 1)
        column = 1;

    else if (number === 2)
        column = 18;

    else if (
        number === 3 ||
        number === 11 ||
        number === 19 ||
        number === 37 ||
        number === 55 ||
        number === 87
    )
        column = 1;

    else if (
        number === 4 ||
        number === 12 ||
        number === 20 ||
        number === 38 ||
        number === 56 ||
        number === 88
    )
        column = 2;

    else if (
        number >= 57 &&
        number <= 71
    )
        column =
            number - 57 + 3;

    else if (
        number >= 89 &&
        number <= 103
    )
        column =
            number - 89 + 3;

    else if (number >= 72)
        column =
            number - 72 + 4;

    else
        column =
            18 - (86 - number) % 18;


    return {
        row,
        column
    };

}


/* =========================================================
   ELEMENT INFORMATION
========================================================= */

function showElement(element) {

    const [
        symbol,
        name,
        number,
        mass,
        radius,
        electronegativity
    ] = element;


    document.querySelector(
        ".element-symbol"
    ).textContent = symbol;


    const heading =
        document.querySelector(
            "#elementInfo h2"
        );


    heading.textContent = name;


    const description =
        document.querySelector(
            "#elementInfo p"
        );


    description.textContent =
        `Atomic number: ${number}`;


    const properties =
        document.querySelector(
            ".element-properties"
        );


    properties.innerHTML = `

        <div>
            <span>Atomic mass</span>
            <b>${mass}</b>
        </div>

        <div>
            <span>Electronegativity</span>
            <b>
                ${
                    electronegativity ??
                    "N/A"
                }
            </b>
        </div>

        <div>
            <span>Atomic radius</span>
            <b>${radius} pm</b>
        </div>

        <div>
            <span>Atomic number</span>
            <b>${number}</b>
        </div>

    `;

}


/* =========================================================
   MOLAR MASS CALCULATOR
========================================================= */

const atomicMasses = {};

elements.forEach(
    element => {

        atomicMasses[element[0]] =
            element[3];

    }
);


function calculateMolarMass(formula) {

    const regex =
        /([A-Z][a-z]?)(\d*)/g;


    let match;

    let total = 0;

    let found = false;


    while (
        (match = regex.exec(formula))
        !== null
    ) {

        found = true;

        const symbol =
            match[1];

        const count =
            match[2]
                ? parseInt(match[2])
                : 1;


        if (
            atomicMasses[symbol]
            === undefined
        ) {

            return null;

        }


        total +=
            atomicMasses[symbol] *
            count;

    }


    return found ? total : null;

}


/* =========================================================
   NAVIGATION
========================================================= */

document.querySelectorAll(
    ".nav-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const page =
                button.dataset.page;


            document.querySelectorAll(
                ".nav-btn"
            ).forEach(btn =>
                btn.classList.remove(
                    "active"
                )
            );


            button.classList.add(
                "active"
            );


            document.querySelectorAll(
                ".page"
            ).forEach(p =>
                p.classList.remove(
                    "active"
                )
            );


            document.getElementById(
                `${page}Page`
            ).classList.add(
                "active"
            );

        }
    );

});


/* =========================================================
   SEARCH
========================================================= */

document.getElementById(
    "moleculeSearch"
).addEventListener(
    "input",
    e => {

        renderMoleculeList(

            e.target.value,

            document.getElementById(
                "categoryFilter"
            ).value

        );

    }
);


document.getElementById(
    "categoryFilter"
).addEventListener(
    "change",
    e => {

        renderMoleculeList(

            document.getElementById(
                "moleculeSearch"
            ).value,

            e.target.value

        );

    }
);


/* =========================================================
   VIEWER BUTTONS
========================================================= */

document.getElementById(
    "resetCamera"
).addEventListener(
    "click",
    resetCamera
);


document.getElementById(
    "toggleLabels"
).addEventListener(
    "click",
    () => {

        labelsVisible =
            !labelsVisible;


        const molecule =
            molecules.find(
                m =>
                    m.name ===
                    document.getElementById(
                        "moleculeName"
                    ).textContent
            );


        if (molecule)
            drawMolecule(molecule);

    }
);


document.getElementById(
    "toggleBonds"
).addEventListener(
    "click",
    () => {

        bondsVisible =
            !bondsVisible;


        const molecule =
            molecules.find(
                m =>
                    m.name ===
                    document.getElementById(
                        "moleculeName"
                    ).textContent
            );


        if (molecule)
            drawMolecule(molecule);

    }
);


/* =========================================================
   VIEW MODES
========================================================= */

document.querySelectorAll(
    ".mode-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document.querySelectorAll(
                ".mode-btn"
            ).forEach(btn =>
                btn.classList.remove(
                    "active"
                )
            );


            button.classList.add(
                "active"
            );


            currentMode =
                button.dataset.mode;


            const molecule =
                molecules.find(
                    m =>
                        m.name ===
                        document.getElementById(
                            "moleculeName"
                        ).textContent
                );


            if (molecule)
                drawMolecule(molecule);

        }
    );

});


/* =========================================================
   MASS CALCULATOR
========================================================= */

document.getElementById(
    "calculateMass"
).addEventListener(
    "click",
    () => {

        const formula =
            document.getElementById(
                "formulaInput"
            ).value.trim();


        const result =
            calculateMolarMass(
                formula
            );


        const output =
            document.getElementById(
                "massResult"
            );


        if (result === null) {

            output.textContent =
                "Invalid or unsupported formula.";

            return;

        }


        output.textContent =
            `${result.toFixed(3)} g/mol`;

    }
);


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        const viewer =
            document.getElementById(
                "viewer"
            );


        if (!camera || !renderer)
            return;


        camera.aspect =
            viewer.clientWidth /
            viewer.clientHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            viewer.clientWidth,
            viewer.clientHeight
        );

    }
);


/* =========================================================
   START APPLICATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.getElementById(
            "moleculeCount"
        ).textContent =
            `${molecules.length} molecules`;


        renderMoleculeList();


        buildPeriodicTable();


        initViewer();


        selectMolecule(
            molecules[0]
        );

    }
);
```
