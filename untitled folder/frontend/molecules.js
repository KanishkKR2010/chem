const molecules = [

{
    name: "Water",
    formula: "H₂O",

    atoms: [
        ["O", 0, 0, 0],
        ["H", 0.96, 0, 0],
        ["H", -0.24, 0.93, 0]
    ],

    shape: "Bent",
    angle: "104.5°",
    hyb: "sp³",
    lone: 2,

    polar: "Polar",

    symmetry: "C₂v",

    bonds: 2,
    bondType: "Single",

    composition: [
        {
            element: "O",
            name: "Oxygen",
            count: 1
        },
        {
            element: "H",
            name: "Hydrogen",
            count: 2
        }
    ],

    description:
        "A bent molecule with two O–H bonds and two lone pairs on oxygen."
},

{
    name: "Methane",
    formula: "CH₄",

    atoms: [
        ["C", 0, 0, 0],
        ["H", 1.09, 1.09, 1.09],
        ["H", -1.09, -1.09, 1.09],
        ["H", -1.09, 1.09, -1.09],
        ["H", 1.09, -1.09, -1.09]
    ],

    shape: "Tetrahedral",
    angle: "109.5°",
    hyb: "sp³",
    lone: 0,

    polar: "Nonpolar",

    symmetry: "Tᵈ",

    bonds: 4,
    bondType: "Single",

    composition: [
        {
            element: "C",
            name: "Carbon",
            count: 1
        },
        {
            element: "H",
            name: "Hydrogen",
            count: 4
        }
    ],

    description:
        "Methane has a tetrahedral geometry with four equivalent C–H bonds."
}

];