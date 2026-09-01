/* ============================================================
   PERIODIC TABLE
============================================================ */

const elements = [

["H","Hydrogen",1,1,"nonmetal"],
["He","Helium",2,18,"noble-gas"],

["Li","Lithium",3,1,"alkali"],
["Be","Beryllium",4,2,"alkaline-earth"],
["B","Boron",5,13,"metalloid"],
["C","Carbon",6,14,"nonmetal"],
["N","Nitrogen",7,15,"nonmetal"],
["O","Oxygen",8,16,"nonmetal"],
["F","Fluorine",9,17,"halogen"],
["Ne","Neon",10,18,"noble-gas"],

["Na","Sodium",11,1,"alkali"],
["Mg","Magnesium",12,2,"alkaline-earth"],
["Al","Aluminium",13,13,"post-transition"],
["Si","Silicon",14,14,"metalloid"],
["P","Phosphorus",15,15,"nonmetal"],
["S","Sulfur",16,16,"nonmetal"],
["Cl","Chlorine",17,17,"halogen"],
["Ar","Argon",18,18,"noble-gas"],

["K","Potassium",19,1,"alkali"],
["Ca","Calcium",20,2,"alkaline-earth"],
["Sc","Scandium",21,3,"transition"],
["Ti","Titanium",22,4,"transition"],
["V","Vanadium",23,5,"transition"],
["Cr","Chromium",24,6,"transition"],
["Mn","Manganese",25,7,"transition"],
["Fe","Iron",26,8,"transition"],
["Co","Cobalt",27,9,"transition"],
["Ni","Nickel",28,10,"transition"],
["Cu","Copper",29,11,"transition"],
["Zn","Zinc",30,12,"transition"],
["Ga","Gallium",31,13,"post-transition"],
["Ge","Germanium",32,14,"metalloid"],
["As","Arsenic",33,15,"metalloid"],
["Se","Selenium",34,16,"nonmetal"],
["Br","Bromine",35,17,"halogen"],
["Kr","Krypton",36,18,"noble-gas"],

["Rb","Rubidium",37,1,"alkali"],
["Sr","Strontium",38,2,"alkaline-earth"],
["Y","Yttrium",39,3,"transition"],
["Zr","Zirconium",40,4,"transition"],
["Nb","Niobium",41,5,"transition"],
["Mo","Molybdenum",42,6,"transition"],
["Tc","Technetium",43,7,"transition"],
["Ru","Ruthenium",44,8,"transition"],
["Rh","Rhodium",45,9,"transition"],
["Pd","Palladium",46,10,"transition"],
["Ag","Silver",47,11,"transition"],
["Cd","Cadmium",48,12,"transition"],
["In","Indium",49,13,"post-transition"],
["Sn","Tin",50,14,"post-transition"],
["Sb","Antimony",51,15,"metalloid"],
["Te","Tellurium",52,16,"metalloid"],
["I","Iodine",53,17,"halogen"],
["Xe","Xenon",54,18,"noble-gas"],

["Cs","Cesium",55,1,"alkali"],
["Ba","Barium",56,2,"alkaline-earth"],

["Hf","Hafnium",72,4,"transition"],
["Ta","Tantalum",73,5,"transition"],
["W","Tungsten",74,6,"transition"],
["Re","Rhenium",75,7,"transition"],
["Os","Osmium",76,8,"transition"],
["Ir","Iridium",77,9,"transition"],
["Pt","Platinum",78,10,"transition"],
["Au","Gold",79,11,"transition"],
["Hg","Mercury",80,12,"transition"],
["Tl","Thallium",81,13,"post-transition"],
["Pb","Lead",82,14,"post-transition"],
["Bi","Bismuth",83,15,"post-transition"],
["Po","Polonium",84,16,"post-transition"],
["At","Astatine",85,17,"halogen"],
["Rn","Radon",86,18,"noble-gas"],

["Fr","Francium",87,1,"alkali"],
["Ra","Radium",88,2,"alkaline-earth"],

["Rf","Rutherfordium",104,4,"transition"],
["Db","Dubnium",105,5,"transition"],
["Sg","Seaborgium",106,6,"transition"],
["Bh","Bohrium",107,7,"transition"],
["Hs","Hassium",108,8,"transition"],
["Mt","Meitnerium",109,9,"transition"],
["Ds","Darmstadtium",110,10,"transition"],
["Rg","Roentgenium",111,11,"transition"],
["Cn","Copernicium",112,12,"transition"],
["Nh","Nihonium",113,13,"post-transition"],
["Fl","Flerovium",114,14,"post-transition"],
["Mc","Moscovium",115,15,"post-transition"],
["Lv","Livermorium",116,16,"post-transition"],
["Ts","Tennessine",117,17,"halogen"],
["Og","Oganesson",118,18,"noble-gas"]

];


/* ============================================================
   LANTHANIDES
============================================================ */

const lanth = [

["La","Lanthanum",57],
["Ce","Cerium",58],
["Pr","Praseodymium",59],
["Nd","Neodymium",60],
["Pm","Promethium",61],
["Sm","Samarium",62],
["Eu","Europium",63],
["Gd","Gadolinium",64],
["Tb","Terbium",65],
["Dy","Dysprosium",66],
["Ho","Holmium",67],
["Er","Erbium",68],
["Tm","Thulium",69],
["Yb","Ytterbium",70],
["Lu","Lutetium",71]

];


/* ============================================================
   ACTINIDES
============================================================ */

const actin = [

["Ac","Actinium",89],
["Th","Thorium",90],
["Pa","Protactinium",91],
["U","Uranium",92],
["Np","Neptunium",93],
["Pu","Plutonium",94],
["Am","Americium",95],
["Cm","Curium",96],
["Bk","Berkelium",97],
["Cf","Californium",98],
["Es","Einsteinium",99],
["Fm","Fermium",100],
["Md","Mendelevium",101],
["No","Nobelium",102],
["Lr","Lawrencium",103]

];


/* ============================================================
   PROPERTY DATA
   ============================================================

   mass
   electronegativity
   ionization
   affinity
   melting
   boiling
   radius
   density
============================================================ */

const data = {

H:[1.008,2.20,13.598,72.8,-259.2,-252.9,31,0.0899],
He:[4.003,null,24.587,0,-272.2,-268.9,28,0.1785],

Li:[6.94,0.98,5.392,59.6,180.5,1342,128,0.534],
Be:[9.012,1.57,9.323,0,1287,2469,96,1.848],

B:[10.81,2.04,8.298,26.99,2076,3927,84,2.34],
C:[12.011,2.55,11.260,121.8,3550,4027,76,2.267],

N:[14.007,3.04,14.534,-6.8,-210,-196,71,1.251],
O:[15.999,3.44,13.618,141,-219,-183,66,1.429],

F:[18.998,3.98,17.423,328,-220,-188,57,1.696],
Ne:[20.180,null,21.565,0,-249,-246,58,0.900],

Na:[22.990,0.93,5.139,52.9,97.8,883,166,0.971],
Mg:[24.305,1.31,7.646,0,650,1091,141,1.738],

Al:[26.982,1.61,5.986,42.5,660,2519,121,2.70],
Si:[28.085,1.90,8.152,134,1414,2900,111,2.329],

P:[30.974,2.19,10.487,72,44,280,107,1.823],
S:[32.06,2.58,10.360,200,115,445,105,2.07],

Cl:[35.45,3.16,12.968,349,-101,-34,102,3.214],
Ar:[39.948,null,15.760,0,-189,-186,106,1.784],

K:[39.098,0.82,4.341,48.4,63.5,759,203,0.862],
Ca:[40.078,1.00,6.113,2.4,842,1484,176,1.55],

Sc:[44.956,1.36,6.561,18.2,1541,2836,170,2.985],
Ti:[47.867,1.54,6.828,7.6,1668,3287,160,4.506],

V:[50.942,1.63,6.746,50.6,1910,3407,153,6.11],
Cr:[51.996,1.66,6.767,64.3,1907,2671,139,7.19],

Mn:[54.938,1.55,7.434,0,1246,2061,139,7.21],
Fe:[55.845,1.83,7.902,15.7,1538,2862,156,7.874],

Co:[58.933,1.88,7.881,63.7,1495,2927,152,8.90],
Ni:[58.693,1.91,7.640,112.0,1455,2913,149,8.908],

Cu:[63.546,1.90,7.726,118.4,1085,2562,145,8.96],
Zn:[65.38,1.65,9.394,0,419.5,907,142,7.134],

Ga:[69.723,1.81,5.999,28.9,29.8,2204,122,5.91],
Ge:[72.630,2.01,7.900,119,938,2820,120,5.323],

As:[74.922,2.18,9.789,78,817,614,119,5.727],
Se:[78.971,2.55,9.752,195,221,685,120,4.81],

Br:[79.904,2.96,11.814,324.6,-7.2,58.8,120,3.102],
Kr:[83.798,3.00,14.000,0,-157,-153,116,3.75],

Rb:[85.468,0.82,4.177,46.9,39.3,688,220,1.532],
Sr:[87.62,0.95,5.695,5.0,777,1382,195,2.64],

Ag:[107.868,1.93,7.576,125.6,961.8,2162,165,10.49],
I:[126.904,2.66,10.451,295.2,113.7,184.3,140,4.933],

Cs:[132.905,0.79,3.894,45.5,28.5,671,244,1.873],
Ba:[137.327,0.89,5.212,13.95,727,1897,222,3.594],

Pt:[195.084,2.28,8.959,205.3,1768,3825,139,21.45],
Au:[196.967,2.54,9.225,222.8,1064,2856,136,19.3],

Hg:[200.592,2.00,10.438,0,-38.8,356.7,151,13.534],
Pb:[207.2,2.33,7.417,35.1,327.5,1749,154,11.34],

U:[238.029,1.38,6.194,50.6,1135,4131,175,19.05]

};


/* ============================================================
   PROPERTY LIST
============================================================ */

const props = [

["classification","Classification","Element family"],

["radius",
 "Atomic Radius",
 "pm"],

["electronegativity",
 "Electronegativity",
 "Pauling scale"],

["ionization",
 "1st Ionization Energy",
 "kJ/mol"],

["affinity",
 "Electron Affinity",
 "kJ/mol"],

["melting",
 "Melting Point",
 "°C"],

["boiling",
 "Boiling Point",
 "°C"],

["density",
 "Density",
 "g/cm³"],

["mass",
 "Atomic Mass",
 "u"]

];


let current = "classification";


/* ============================================================
   CATEGORY COLORS
============================================================ */

const categoryColors = {

    alkali:
        "#ff8a8a",

    "alkaline-earth":
        "#ffc078",

    transition:
        "#ffe066",

    "post-transition":
        "#8ce6e6",

    metalloid:
        "#8ce99a",

    nonmetal:
        "#91c8ff",

    halogen:
        "#a9b9ff",

    "noble-gas":
        "#d0a2ff",

    lanthanide:
        "#ff9bd2",

    actinide:
        "#d8a66a"

};


const categoryNames = {

    alkali:
        "Alkali Metals",

    "alkaline-earth":
        "Alkaline Earth Metals",

    transition:
        "Transition Metals",

    "post-transition":
        "Post-Transition Metals",

    metalloid:
        "Metalloids",

    nonmetal:
        "Nonmetals",

    halogen:
        "Halogens",

    "noble-gas":
        "Noble Gases",

    lanthanide:
        "Lanthanides",

    actinide:
        "Actinides"

};


/* ============================================================
   GET PROPERTY VALUE
============================================================ */

function getValue(element, key) {

    const symbol = element[0];

    const d = data[symbol];

    if (key === "classification") {

        return categoryNames[element[4]];

    }

    if (!d) {

        return "—";

    }

    const map = {

        mass: d[0],

        electronegativity: d[1],

        ionization: d[2],

        affinity: d[3],

        melting: d[4],

        boiling: d[5],

        radius: d[6],

        density: d[7]

    };

    if (
        map[key] === undefined ||
        map[key] === null
    ) {

        return "—";

    }

    return map[key];

}


/* ============================================================
   FORMAT VALUE
============================================================ */

function formatValue(value, key) {

    if (value === "—") {

        return value;

    }


    if (key === "electronegativity") {

        return Number(value).toFixed(2);

    }


    if (
        key === "ionization" ||
        key === "affinity"
    ) {

        return Number(value).toLocaleString()
            + " kJ/mol";

    }


    if (key === "radius") {

        return value + " pm";

    }


    if (key === "density") {

        return value + " g/cm³";

    }


    if (key === "mass") {

        return value + " u";

    }


    if (
        key === "melting" ||
        key === "boiling"
    ) {

        return value + " °C";

    }


    return value;

}


/* ============================================================
   PROPERTY COLOR
============================================================ */

function colorFor(element, key) {

    if (key === "classification") {

        return (
            categoryColors[element[4]]
            || "#dce5f5"
        );

    }


    const values = elements

        .map(
            element =>
                getValue(element,key)
        )

        .filter(
            value =>
                value !== "—" &&
                typeof value === "number"
        );


    const value =
        getValue(element,key);


    if (
        typeof value !== "number"
    ) {

        return "#e8edf6";

    }


    const min =
        Math.min(...values);

    const max =
        Math.max(...values);


    const t =
        (value - min) /
        (max - min || 1);


    const hue =
        210 - (190 * t);


    const lightness =
        91 - (18 * t);


    return `
        hsl(
            ${hue}
            82%
            ${lightness}%
        )
    `;

}


/* ============================================================
   PROPERTY TABS
============================================================ */

function renderTabs() {

    const container =
        document.getElementById(
            "propertyTabs"
        );


    container.innerHTML =
        props.map(
            property => {

                const [
                    key,
                    title
                ] = property;


                return `

                    <button
                        class="${
                            key === current
                            ? "active"
                            : ""
                        }"
                        onclick="
                            setProperty('${key}')
                        "
                    >

                        ${title}

                    </button>

                `;

            }
        ).join("");

}


/* ============================================================
   LEGEND
============================================================ */

function renderLegend() {

    const legend =
        document.getElementById(
            "legend"
        );


    if (
        current === "classification"
    ) {

        legend.innerHTML =

            Object.entries(
                categoryNames
            )

            .map(
                ([key,name]) => `

                    <span
                        class="legend-item"
                    >

                        <i
                            class="legend-dot"
                            style="
                                background:
                                ${categoryColors[key]}
                            "
                        ></i>

                        ${name}

                    </span>

                `
            )

            .join("");

    }

    else {

        legend.innerHTML = `

            <span class="legend-item">
                Low
            </span>

            <i
                class="legend-dot"
                style="
                    background:
                    hsl(210 82% 91%)
                "
            ></i>

            <span class="legend-item">
                →
            </span>

            <i
                class="legend-dot"
                style="
                    background:
                    hsl(20 82% 73%)
                "
            ></i>

            <span class="legend-item">
                High
            </span>

        `;

    }

}


/* ============================================================
   CREATE ELEMENT
============================================================ */

function createElement(
    element,
    series = false
) {

    const [
        symbol,
        name,
        atomicNumber,
        group,
        category
    ] = element;


    const box =
        document.createElement("div");


    box.className =
        "element";


    if (!series) {

        box.style.gridColumn =
            group;


        let row;


        if (atomicNumber <= 2) {

            row = 1;

        }

        else if (atomicNumber <= 10) {

            row = 2;

        }

        else if (atomicNumber <= 18) {

            row = 3;

        }

        else if (atomicNumber <= 36) {

            row = 4;

        }

        else if (atomicNumber <= 54) {

            row = 5;

        }

        else if (atomicNumber <= 86) {

            row = 6;

        }

        else {

            row = 7;

        }


        box.style.gridRow = row;

    }


    box.style.background =
        colorFor(
            element,
            current
        );


    box.innerHTML = `

        <div class="num">
            ${atomicNumber}
        </div>

        <div class="sym">
            ${symbol}
        </div>

        <div class="name">
            ${name}
        </div>

        <div class="value">

            ${
                formatValue(
                    getValue(
                        element,
                        current
                    ),
                    current
                )
            }

        </div>

    `;


    box.onclick = () => {

        showDetails(
            element,
            category
        );

    };


    return box;

}


/* ============================================================
   RENDER TABLE
============================================================ */

function renderTable() {

    const table =
        document.getElementById(
            "periodicTable"
        );


    table.innerHTML = "";


    elements.forEach(
        element => {

            table.appendChild(
                createElement(element)
            );

        }
    );


    const lanthanideContainer =
        document.getElementById(
            "lanthanides"
        );


    lanthanideContainer.innerHTML =
        "";


    lanth.forEach(
        item => {

            const element = [

                item[0],
                item[1],
                item[2],
                0,
                "lanthanide"

            ];


            lanthanideContainer.appendChild(
                createElement(
                    element,
                    true
                )
            );

        }
    );


    const actinideContainer =
        document.getElementById(
            "actinides"
        );


    actinideContainer.innerHTML =
        "";


    actin.forEach(
        item => {

            const element = [

                item[0],
                item[1],
                item[2],
                0,
                "actinide"

            ];


            actinideContainer.appendChild(
                createElement(
                    element,
                    true
                )
            );

        }
    );

}


/* ============================================================
   SHOW ELEMENT DETAILS
============================================================ */

function showDetails(
    element,
    category
) {

    const [
        symbol,
        name,
        atomicNumber,
        group
    ] = element;


    const details =
        document.getElementById(
            "elementDetails"
        );


    const period =
        atomicNumber <= 2
        ? 1
        : atomicNumber <= 10
        ? 2
        : atomicNumber <= 18
        ? 3
        : atomicNumber <= 36
        ? 4
        : atomicNumber <= 54
        ? 5
        : atomicNumber <= 86
        ? 6
        : 7;


    details.innerHTML = `

        <div class="detail-head">

            <div
                class="detail-symbol"

                style="
                    background:
                    ${
                        categoryColors[
                            category
                        ]
                    };
                "
            >

                ${symbol}

            </div>


            <div>

                <span class="badge">

                    ${
                        categoryNames[
                            category
                        ]
                    }

                </span>


                <h2>
                    ${name}
                </h2>


                <p>

                    Atomic Number:
                    ${atomicNumber}

                    •

                    Group:
                    ${group || "f-block"}

                    •

                    Period:
                    ${period}

                </p>

            </div>

        </div>


        <div class="property-cards">

            ${

                props.slice(0,9)

                .map(
                    property => {

                        const [
                            key,
                            title
                        ] = property;


                        return `

                            <div
                                class="prop-card"
                            >

                                <span>
                                    ${title}
                                </span>

                                <b>

                                    ${
                                        formatValue(
                                            getValue(
                                                element,
                                                key
                                            ),
                                            key
                                        )
                                    }

                                </b>

                            </div>

                        `;

                    }
                )

                .join("")

            }

        </div>

    `;

}


/* ============================================================
   CHANGE PROPERTY
============================================================ */

function setProperty(key) {

    current = key;


    const property =
        props.find(
            item =>
                item[0] === key
        );


    document.getElementById(
        "propertyTitle"
    ).textContent =
        property[1];


    document.getElementById(
        "propertyDescription"
    ).textContent =
        property[2];


    renderTabs();

    renderLegend();

    renderTable();

}


/* ============================================================
   SEARCH
============================================================ */

document
    .getElementById("search")
    .addEventListener(
        "input",
        function() {

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            document
                .querySelectorAll(
                    ".element"
                )
                .forEach(
                    element => {

                        const text =
                            element
                                .textContent
                                .toLowerCase();


                        if (
                            !query ||
                            text.includes(query)
                        ) {

                            element.style.opacity =
                                "1";

                        }

                        else {

                            element.style.opacity =
                                "0.18";

                        }

                    }
                );

        }
    );


/* ============================================================
   RESET
============================================================ */

function resetTable() {

    document.getElementById(
        "search"
    ).value = "";


    setProperty(
        "classification"
    );

}


/* ============================================================
   BACK TO INDEX.HTML
============================================================ */

function goBack() {

    window.location.href =
        "index.html";

}


/* ============================================================
   START
============================================================ */

renderTabs();

renderLegend();

renderTable();