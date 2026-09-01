/* ============================================================
   MOLECULAR LAB
   Main JavaScript
============================================================ */


/* ============================================================
   MOLECULE DATABASE
============================================================ */

const molecules = [

    {
        name:"Hydrogen",
        formula:"H₂",
        category:"Gases",
        atoms:[
            ["H",-0.37,0,0],
            ["H",0.37,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"1s",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hydrogen fluoride",
        formula:"HF",
        category:"Inorganic",
        atoms:[
            ["H",-0.45,0,0],
            ["F",0.45,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Water",
        formula:"H₂O",
        category:"Inorganic",
        atoms:[
            ["O",0,0,0],
            ["H",1.6,0.9,0],
            ["H",-1.6,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"104.5°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen sulfide",
        formula:"H₂S",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["H",1.6,0.6,0],
            ["H",-1.6,0.6,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"92.1°",
        polarity:"Polar"
    },
    
    {
        name:"Ammonia",
        formula:"NH₃",
        category:"Bases",
        atoms:[
            ["N",0,0.5,0],
            ["H",1.4,-0.5,0],
            ["H",-1.4,-0.5,0],
            ["H",0,-0.5,1.4]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"107°",
        polarity:"Polar"
    },
    
    {
        name:"Methane",
        formula:"CH₄",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["H",1.1,1.1,1.1],
            ["H",-1.1,-1.1,1.1],
            ["H",-1.1,1.1,-1.1],
            ["H",1.1,-1.1,-1.1]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbon dioxide",
        formula:"CO₂",
        category:"Gases",
        atoms:[
            ["C",0,0,0],
            ["O",2,0,0],
            ["O",-2,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbon monoxide",
        formula:"CO",
        category:"Gases",
        atoms:[
            ["C",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen",
        formula:"N₂",
        category:"Gases",
        atoms:[
            ["N",-0.6,0,0],
            ["N",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Oxygen",
        formula:"O₂",
        category:"Gases",
        atoms:[
            ["O",-0.6,0,0],
            ["O",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"sp²",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Fluorine",
        formula:"F₂",
        category:"Gases",
        atoms:[
            ["F",-0.6,0,0],
            ["F",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Chlorine",
        formula:"Cl₂",
        category:"Gases",
        atoms:[
            ["Cl",-0.8,0,0],
            ["Cl",0.8,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hydrogen chloride",
        formula:"HCl",
        category:"Acids",
        atoms:[
            ["H",-0.7,0,0],
            ["Cl",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur dioxide",
        formula:"SO₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["O",1.7,1,0],
            ["O",-1.7,1,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"119°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur trioxide",
        formula:"SO₃",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["O",1.7,0,0],
            ["O",-0.85,1.47,0],
            ["O",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron trifluoride",
        formula:"BF₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["F",1.6,0,0],
            ["F",-0.8,1.38,0],
            ["F",-0.8,-1.38,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Beryllium chloride",
        formula:"BeCl₂",
        category:"Inorganic",
        atoms:[
            ["Be",0,0,0],
            ["Cl",1.8,0,0],
            ["Cl",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Phosphorus pentachloride",
        formula:"PCl₅",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-1.7,0,0],
            ["Cl",0,1.7,0],
            ["Cl",0,-1.7,0],
            ["Cl",0,0,1.7]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Trigonal bipyramidal",
        domains:5,
        hybridization:"sp³d",
        angle:"90°, 120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Sulfur hexafluoride",
        formula:"SF₆",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["F",1.6,0,0],
            ["F",-1.6,0,0],
            ["F",0,1.6,0],
            ["F",0,-1.6,0],
            ["F",0,0,1.6],
            ["F",0,0,-1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]],
        shape:"Octahedral",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Non-polar"
    },
    
    {
        name:"Ethane",
        formula:"C₂H₆",
        category:"Organic",
        atoms:[
            ["C",-0.75,0,0],
            ["C",0.75,0,0],
            ["H",-1.3,1,0],
            ["H",-1.3,-1,0],
            ["H",-1.3,0,1],
            ["H",1.3,1,0],
            ["H",1.3,-1,0],
            ["H",1.3,0,-1]
        ],
        bonds:[
            [0,1],
            [0,2],[0,3],[0,4],
            [1,5],[1,6],[1,7]
        ],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Ethene",
        formula:"C₂H₄",
        category:"Organic",
        atoms:[
            ["C",-0.65,0,0],
            ["C",0.65,0,0],
            ["H",-1.2,1,0],
            ["H",-1.2,-1,0],
            ["H",1.2,1,0],
            ["H",1.2,-1,0]
        ],
        bonds:[
            [0,1],
            [0,2],[0,3],
            [1,4],[1,5]
        ],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Ethyne",
        formula:"C₂H₂",
        category:"Organic",
        atoms:[
            ["C",-0.75,0,0],
            ["C",0.75,0,0],
            ["H",-1.5,0,0],
            ["H",1.5,0,0]
        ],
        bonds:[[0,1],[0,2],[1,3]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Methanol",
        formula:"CH₄O",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["O",0.7,0,0],
            ["H",1.4,0.7,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[
            [0,1],
            [1,2],
            [0,3],[0,4],[0,5]
        ],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen peroxide",
        formula:"H₂O₂",
        category:"Inorganic",
        atoms:[
            ["O",-0.7,0,0],
            ["O",0.7,0,0],
            ["H",-1.3,0.8,0],
            ["H",1.3,-0.8,0]
        ],
        bonds:[[0,1],[0,2],[1,3]],
        shape:"Non-linear",
        domains:4,
        hybridization:"sp³",
        angle:"~94.8°",
        polarity:"Polar"
    },
    
    {
        name:"Nitric acid",
        formula:"HNO₃",
        category:"Acids",
        atoms:[
            ["N",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
        shape:"Trigonal planar around N",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Ammonium ion",
        formula:"NH₄⁺",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["H",1.1,1.1,1.1],
            ["H",-1.1,-1.1,1.1],
            ["H",-1.1,1.1,-1.1],
            ["H",1.1,-1.1,-1.1]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Hydroxide ion",
        formula:"OH⁻",
        category:"Ions",
        atoms:[
            ["O",-0.6,0,0],
            ["H",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Nitrate ion",
        formula:"NO₃⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["O",1.6,0,0],
            ["O",-0.8,1.38,0],
            ["O",-0.8,-1.38,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Carbonate ion",
        formula:"CO₃²⁻",
        category:"Ions",
        atoms:[
            ["C",0,0,0],
            ["O",1.6,0,0],
            ["O",-0.8,1.38,0],
            ["O",-0.8,-1.38,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydronium ion",
        formula:"H₃O⁺",
        category:"Ions",
        atoms:[
            ["O",0,0,0],
            ["H",1.3,0.8,0],
            ["H",-1.3,0.8,0],
            ["H",0,-0.8,1.2]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~113°",
        polarity:"Polar"
    }
    
    ];
    
    
    /* ============================================================
       ADDITIONAL REAL MOLECULES
    ============================================================ */
    
    const extraMolecules = [
    
    ["Ozone","O₃","Gases","Bent","sp²","117°","Polar"],
    ["Nitrous oxide","N₂O","Gases","Linear","sp","180°","Polar"],
    ["Nitrogen dioxide","NO₂","Gases","Bent","sp²","134°","Polar"],
    ["Dinitrogen tetroxide","N₂O₄","Gases","Planar","sp²","120°","Polar"],
    ["Phosphine","PH₃","Inorganic","Trigonal pyramidal","sp³","93.5°","Polar"],
    ["Diborane","B₂H₆","Inorganic","Bridged","sp³","—","Polar"],
    ["Silane","SiH₄","Inorganic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Silicon tetrachloride","SiCl₄","Inorganic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Ammonium chloride","NH₄Cl","Ions","Ionic lattice","—","—","Ionic"],
    ["Sodium hydroxide","NaOH","Bases","Ionic","—","—","Ionic"],
    ["Potassium hydroxide","KOH","Bases","Ionic","—","—","Ionic"],
    ["Calcium hydroxide","Ca(OH)₂","Bases","Ionic","—","—","Ionic"],
    ["Sulfuric acid","H₂SO₄","Acids","Tetrahedral around S","sp³","~109°","Polar"],
    ["Phosphoric acid","H₃PO₄","Acids","Tetrahedral","sp³","109.5°","Polar"],
    ["Hydrofluoric acid","HF","Acids","Linear","—","180°","Polar"],
    ["Hydrobromic acid","HBr","Acids","Linear","—","180°","Polar"],
    ["Hydroiodic acid","HI","Acids","Linear","—","180°","Polar"],
    ["Carbonic acid","H₂CO₃","Acids","Trigonal planar","sp²","120°","Polar"],
    // --- Massive Expansion Pack (200 Compounds) ---
    ["Carbon monoxide", "CO", "Gases", "Linear", "sp", "180°", "Polar"],
    ["Carbon dioxide", "CO₂", "Gases", "Linear", "sp", "180°", "Non-polar"],
    ["Sulfur dioxide", "SO₂", "Gases", "Bent", "sp²", "119°", "Polar"],
    ["Sulfur trioxide", "SO₃", "Gases", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Nitric oxide", "NO", "Gases", "Linear", "sp²", "180°", "Polar"],
    ["Nitrogen trifluoride", "NF₃", "Inorganic", "Trigonal pyramidal", "sp³", "102°", "Polar"],
    ["Phosphorus trichloride", "PCl₃", "Inorganic", "Trigonal pyramidal", "sp³", "100°", "Polar"],
    ["Phosphorus pentachloride", "PCl₅", "Inorganic", "Trigonal bipyramidal", "sp³d", "90°/120°", "Non-polar"],
    ["Sulfur hexafluoride", "SF₆", "Inorganic", "Octahedral", "sp³d²", "90°", "Non-polar"],
    ["Xenon difluoride", "XeF₂", "Inorganic", "Linear", "sp³d²", "180°", "Non-polar"],
    ["Xenon tetrafluoride", "XeF₄", "Inorganic", "Square planar", "sp³d²", "90°", "Non-polar"],
    ["Xenon hexafluoride", "XeF₆", "Inorganic", "Distorted octahedral", "sp³d³", "—", "Polar"],
    ["Water", "H₂O", "Inorganic", "Bent", "sp³", "104.5°", "Polar"],
    ["Heavy water", "D₂O", "Inorganic", "Bent", "sp³", "104.5°", "Polar"],
    ["Hydrogen sulfide", "H₂S", "Inorganic", "Bent", "sp³", "92.1°", "Polar"],
    ["Hydrazine", "N₂H₄", "Inorganic", "Pyramidal at N", "sp³", "112°", "Polar"],
    ["Hydroxylamine", "NH₂OH", "Inorganic", "Tetrahedral/Pyramidal", "sp³", "~108°", "Polar"],
    ["Hydrogen chloride", "HCl", "Acids", "Linear", "—", "180°", "Polar"],
    ["Perchloric acid", "HClO₄", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Nitric acid", "HNO₃", "Acids", "Trigonal planar", "sp²", "120°", "Polar"],
    ["Nitrous acid", "HNO₂", "Acids", "Bent", "sp²", "111°", "Polar"],
    ["Phosphorous acid", "H₃PO₃", "Acids", "Pyramidal", "sp³", "~104°", "Polar"],
    ["Boric acid", "H₃BO₃", "Acids", "Trigonal planar", "sp²", "120°", "Polar"],
    ["Hydrogen peroxide", "H₂O₂", "Inorganic", "Skew/Non-planar", "sp³", "94.8°", "Polar"],
    ["Sodium chloride", "NaCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Potassium chloride", "KCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium chloride", "CaCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Magnesium chloride", "MgCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Sodium carbonate", "Na₂CO₃", "Salts", "Ionic/Planar", "sp²", "120°", "Ionic"],
    ["Sodium bicarbonate", "NaHCO₃", "Salts", "Ionic/Planar", "sp²", "120°", "Ionic"],
    ["Potassium nitrate", "KNO₃", "Salts", "Ionic/Planar", "sp²", "120°", "Ionic"],
    ["Ammonium sulfate", "(NH₄)₂SO₄", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Copper sulfate", "CuSO₄", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Silver nitrate", "AgNO₃", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Methanol", "CH₄O", "Organic", "Tetrahedral", "sp³", "108.9°", "Polar"],
    ["Ethylene", "C₂H₄", "Organic", "Trigonal planar", "sp²", "121.7°", "Non-polar"],
    ["Acetylene", "C₂H₂", "Organic", "Linear", "sp", "180°", "Non-polar"],
    ["Cyclopropane", "C₃H₆", "Organic", "Ring / Bent bonds", "sp³", "60°", "Non-polar"],
    ["Cyclobutane", "C₄H₈", "Organic", "Puckered", "sp³", "88°", "Non-polar"],
    ["Cyclopentane", "C₅H₁₀", "Organic", "Envelope", "sp³", "105°", "Non-polar"],
    ["Cyclohexane", "C₆H₁₂", "Organic", "Chair", "sp³", "109.5°", "Non-polar"],
    ["Toluene", "C₇H₈", "Organic", "Planar ring", "sp²", "120°", "Non-polar"],
    ["Phenol", "C₆H₆O", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Aniline", "C₆H₇N", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Benzoic acid", "C₇H₆O₂", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Benzyl alcohol", "C₇H₈O", "Organic", "Complex", "sp³/sp²", "—", "Polar"],
    ["Styrene", "C₈H₈", "Organic", "Complex", "sp²", "120°", "Non-polar"],
    ["Naphthalene", "C₁₀H₈", "Organic", "Fused planar rings", "sp²", "120°", "Non-polar"],
    ["Anthracene", "C₁₄H₁₀", "Organic", "Fused planar rings", "sp²", "120°", "Non-polar"],
    ["Butanol", "C₄H₁₀O", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Diethyl ether", "C₄H₁₀O", "Organic", "Bent around O", "sp³", "~112°", "Polar"],
    ["Ethyl acetate", "C₄H₈O₂", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Oxalic acid", "C₂H₂O₄", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Citric acid", "C₆H₈O₇", "Organic", "Complex", "sp³", "—", "Polar"],
    ["Lactic acid", "C₃H₆O₃", "Organic", "Tetrahedral/Planar", "sp³/sp²", "109.5°", "Polar"],
    ["Uric acid", "C₅H₄N₄O₃", "Organic", "Complex planar", "sp²/sp³", "—", "Polar"],
    ["Glycine", "C₂H₅NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Alanine", "C₃H₇NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Acetonitrile", "C₂H₃N", "Organic", "Linear at nitrile", "sp/sp³", "180°", "Polar"],
    ["Nitromethane", "CH₃NO₂", "Organic", "Planar nitro group", "sp²/sp³", "120°", "Polar"],
    ["Thionyl chloride", "SOCl₂", "Inorganic", "Trigonal pyramidal", "sp³", "106°", "Polar"],
    ["Sulfuryl chloride", "SO₂Cl₂", "Inorganic", "Tetrahedral", "sp³", "111°", "Polar"],
    ["Phosphoryl chloride", "POCl₃", "Inorganic", "Tetrahedral", "sp³", "103.3°", "Polar"],
    ["Carbon disulfide", "CS₂", "Inorganic", "Linear", "sp", "180°", "Non-polar"],
    ["Carbon oxysulfide", "COS", "Inorganic", "Linear", "sp", "180°", "Polar"],
    ["Boron trifluoride", "BF₃", "Inorganic", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Aluminum chloride", "AlCl₃", "Inorganic", "Trigonal planar / Dimeric", "sp²", "120°", "Polar"],
    ["Magnesium oxide", "MgO", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium oxide", "CaO", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Titanium dioxide", "TiO₂", "Inorganic", "Octahedral coordination", "sp³d²", "90°", "Polar"],
    ["Silicon dioxide", "SiO₂", "Inorganic", "Network tetrahedral", "sp³", "109.5°", "Polar"],
    ["Lithium hydride", "LiH", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Sodium hydride", "NaH", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium hydride", "CaH₂", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Beryllium chloride", "BeCl₂", "Inorganic", "Linear (monomer)", "sp", "180°", "Non-polar"],
    ["Gallium trichloride", "GaCl₃", "Inorganic", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Indium trichloride", "InCl₃", "Inorganic", "Layered / Monomer", "sp²", "120°", "Non-polar"],
    ["Germanium tetrachloride", "GeCl₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Stannic chloride", "SnCl₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Lead dichloride", "PbCl₂", "Inorganic", "Coordination polymer", "sp³", "—", "Polar"],
    ["Arsenic trifluoride", "AsF₃", "Inorganic", "Trigonal pyramidal", "sp³", "98°", "Polar"],
    ["Arsenic trichloride", "AsCl₃", "Inorganic", "Trigonal pyramidal", "sp³", "98.6°", "Polar"],
    ["Antimony trichloride", "SbCl₃", "Inorganic", "Pyramidal", "sp³", "95.6°", "Polar"],
    ["Bismuth trichloride", "BiCl₃", "Inorganic", "Complex pyramidal", "sp³", "—", "Polar"],
    ["Selenious acid", "H₂SeO₃", "Acids", "Pyramidal", "sp³", "~105°", "Polar"],
    ["Selenic acid", "H₂SeO₄", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Telluric acid", "H₆TeO₆", "Acids", "Octahedral", "sp³d²", "90°", "Polar"],
    ["Iodic acid", "HIO₃", "Acids", "Trigonal pyramidal", "sp³", "105°", "Polar"],
    ["Periodic acid", "HIO₄", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Chlorous acid", "HClO₂", "Acids", "Bent", "sp³", "103°", "Polar"],
    ["Hypochlorous acid", "HClO", "Acids", "Bent", "sp³", "103°", "Polar"],
    ["Bromic acid", "HBrO₃", "Acids", "Trigonal pyramidal", "sp³", "104°", "Polar"],
    ["Sulfamic acid", "H₃NSO₃", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Trifluoroacetic acid", "CF₃COOH", "Acids", "Planar around COOH", "sp²/sp³", "120°", "Polar"],
    ["Butyric acid", "C₄H₈O₂", "Acids", "Planar around COOH", "sp²/sp³", "~120°", "Polar"],
    ["Valeric acid", "C₅H₁₀O₂", "Acids", "Planar around COOH", "sp²/sp³", "~120°", "Polar"],
    ["Palmitic acid", "C₁₆H₃₂O₂", "Acids", "Chain / Planar", "sp³", "109.5°", "Polar"],
    ["Stearic acid", "C₁₈H₃₆O₂", "Acids", "Chain / Planar", "sp³", "109.5°", "Polar"],
    ["Oleic acid", "C₁₈H₃₄O₂", "Acids", "Unsaturated chain", "sp²/sp³", "~120°", "Polar"],
    ["Pyruvic acid", "C₃H₄O₃", "Organic", "Complex keto-acid", "sp²/sp³", "120°", "Polar"],
    ["Isopropyl alcohol", "C₃H₈O", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Tert-butanol", "C₄H₁₀O", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Isobutanol", "C₄H₁₀O", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Sec-butanol", "C₄H₁₀O", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Diisopropyl ether", "C₆H₁₄O", "Organic", "Bent around O", "sp³", "~112°", "Polar"],
    ["Methyl formate", "C₂H₄O₂", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Methyl acetate", "C₃H₆O₂", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Propyl acetate", "C₅H₁₀O₂", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Butyl acetate", "C₆H₁₂O₂", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Acetamide", "C₂H₅NO", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Formamide", "CH₃NO", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["N,N-Dimethylformamide", "C₃H₇NO", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["N,N-Dimethylacetamide", "C₄H₉NO", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Acrylonitrile", "C₃H₃N", "Organic", "Linear at nitrile", "sp/sp²", "180°", "Polar"],
    ["Allyl chloride", "C₃H₅Cl", "Organic", "Tetrahedral/Trigonal", "sp³/sp²", "109.5°", "Polar"],
    ["Vinyl chloride", "C₂H₃Cl", "Organic", "Trigonal planar", "sp²", "120°", "Polar"],
    ["1,2-Dichloroethane", "C₂H₄Cl₂", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["1,1-Dichloroethane", "C₂H₄Cl₂", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Trichloroethylene", "C₂HCl₃", "Organic", "Trigonal planar", "sp²", "120°", "Polar"],
    ["Tetrachloroethylene", "C₂Cl₄", "Organic", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Chlorobenzene", "C₆H₅Cl", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Bromobenzene", "C₆H₅Br", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Iodobenzene", "C₆H₅I", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Nitrobenzene", "C₆H₅NO₂", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Benzaldehyde", "C₇H₆O", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Acetophenone", "C₈H₈O", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Benzophenone", "C₁₃H₁₀O", "Organic", "Complex planar", "sp²", "120°", "Polar"],
    ["Furan", "C₄H₄O", "Organic", "Planar heteroaromatic", "sp²", "180°", "Polar"],
    ["Thiophene", "C₄H₄S", "Organic", "Planar heteroaromatic", "sp²", "180°", "Polar"],
    ["Pyrrole", "C₄H₅N", "Organic", "Planar heteroaromatic", "sp²", "120°", "Polar"],
    ["Pyridine", "C₅H₅N", "Organic", "Planar heteroaromatic", "sp²", "120°", "Polar"],
    ["Pyrimidine", "C₄H₄N₂", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Purine", "C₅H₄N₄", "Organic", "Fused planar rings", "sp²", "120°", "Polar"],
    ["Imidazole", "C₃H₄N₂", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Oxazole", "C₃H₃NO", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Thiazole", "C₃H₃NS", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Lithium fluoride", "LiF", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Lithium chloride", "LiCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Lithium bromide", "LiBr", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Lithium iodide", "LiI", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Sodium fluoride", "NaF", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Potassium fluoride", "KF", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Rubidium chloride", "RbCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Cesium chloride", "CsCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Beryllium fluoride", "BeF₂", "Inorganic", "Linear", "sp", "180°", "Non-polar"],
    ["Magnesium fluoride", "MgF₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium fluoride", "CaF₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Strontium chloride", "SrCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Barium chloride", "BaCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Zinc chloride", "ZnCl₂", "Inorganic", "Linear/Tetrahedral", "sp", "180°", "Polar"],
    ["Cadmium chloride", "CdCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Mercury(II) chloride", "HgCl₂", "Inorganic", "Linear", "sp", "180°", "Non-polar"],
    ["Mercury(I) chloride", "Hg₂Cl₂", "Inorganic", "Linear", "sp", "180°", "Non-polar"],
    ["Boron tribromide", "BBr₃", "Inorganic", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Aluminum fluoride", "AlF₃", "Inorganic", "Octahedral/Layered", "sp³d²", "90°", "Polar"],
    ["Gallium trifluoride", "GaF₃", "Inorganic", "Ionic/Layered", "—", "—", "Polar"],
    ["Indium trifluoride", "InF₃", "Inorganic", "Layered", "—", "—", "Polar"],
    ["Thallium(I) chloride", "TlCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Silicon tetrafluoride", "SiF₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Silicon tetrabromide", "SiBr₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Silicon tetraiodide", "SiI₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Germanium tetrafluoride", "GeF₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Stannic fluoride", "SnF₄", "Inorganic", "Layered octahedral", "sp³d²", "90°", "Polar"],
    ["Phosphorus trifluoride", "PF₃", "Inorganic", "Trigonal pyramidal", "sp³", "97.8°", "Polar"],
    ["Phosphorus pentafluoride", "PF₅", "Inorganic", "Trigonal bipyramidal", "sp³d", "90°/120°", "Non-polar"],
    ["Phosphorus pentabromide", "PBr₅", "Inorganic", "Ionic (PBr₄⁺ Br⁻)", "sp³", "109.5°", "Ionic"],
    ["Arsenic pentafluoride", "AsF₅", "Inorganic", "Trigonal bipyramidal", "sp³d", "90°/120°", "Non-polar"],
    ["Antimony pentafluoride", "SbF₅", "Inorganic", "Trigonal bipyramidal", "sp³d", "90°/120°", "Non-polar"],
    ["Bismuth pentafluoride", "BiF₅", "Inorganic", "Polymeric octahedral", "sp³d²", "—", "Polar"],
    ["Sulfur tetrafluoride", "SF₄", "Inorganic", "See-saw", "sp³d", "101.5°/173°", "Polar"],
    ["Disulfur dichloride", "S₂Cl₂", "Inorganic", "Bent/Skew", "sp³", "103°", "Polar"],
    ["Disulfur dibromide", "S₂Br₂", "Inorganic", "Bent/Skew", "sp³", "105°", "Polar"],
    ["Selenium tetrafluoride", "SeF₄", "Inorganic", "See-saw", "sp³d", "100°", "Polar"],
    ["Selenium hexafluoride", "SeF₆", "Inorganic", "Octahedral", "sp³d²", "90°", "Non-polar"],
    ["Tellurium tetrafluoride", "TeF₄", "Inorganic", "See-saw", "sp³d", "—", "Polar"],
    ["Tellurium hexafluoride", "TeF₆", "Inorganic", "Octahedral", "sp³d²", "90°", "Non-polar"],
    ["Iodine trifluoride", "IF₃", "Inorganic", "T-shaped", "sp³d", "87.2°", "Polar"],
    ["Iodine pentafluoride", "IF₅", "Inorganic", "Square pyramidal", "sp³d²", "90°", "Polar"],
    ["Iodine heptafluoride", "IF₇", "Inorganic", "Pentagonal bipyramidal", "sp³d³", "72°/90°", "Non-polar"],
    ["Chlorine trifluoride", "ClF₃", "Inorganic", "T-shaped", "sp³d", "87.5°", "Polar"],
    ["Chlorine pentafluoride", "ClF₅", "Inorganic", "Square pyramidal", "sp³d²", "90°", "Polar"],
    ["Valine", "C₅H₁₁NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Leucine", "C₆H₁₃NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Isoleucine", "C₆H₁₃NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Serine", "C₃H₇NO₃", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Threonine", "C₄H₉NO₃", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Cysteine", "C₃H₇NO₂S", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Methionine", "C₅H₁₁NO₂S", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Aspartic acid", "C₄H₇NO₄", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Glutamic acid", "C₅H₉NO₄", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Lysine", "C₆H₁₄N₂O₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Arginine", "C₆H₁₄N₄O₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Histidine", "C₆H₉N₃O₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Phenylalanine", "C₉H₁₁NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Tyrosine", "C₉H₁₁NO₃", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Tryptophan", "C₁₂H₁₂N₂O₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Proline", "C₅H₉NO₂", "Organic", "Cyclic zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Sucrose", "C₁₂H₂₂O₁₁", "Organic", "Disaccharide", "sp³", "—", "Polar"],
    ["Lactose", "C₁₂H₂₂O₁₁", "Organic", "Disaccharide", "sp³", "—", "Polar"],
    ["Maltose", "C₁₂H₂₂O₁₁", "Organic", "Disaccharide", "sp³", "—", "Polar"],
    ["Glycerol", "C₃H₈O₃", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Cholesterol", "C₂₇H₄₆O", "Organic", "Tetracyclic steroid", "sp³/sp²", "—", "Polar"],
    ["Ascorbic acid", "C₆H₈O₆", "Organic", "Complex heterocyclic", "sp³/sp²", "—", "Polar"],
    ["Guanidine", "CH₅N₃", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Melamine", "C₃H₆N₆", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Hexamethylenetetramine", "C₆H₁₂N₄", "Organic", "Cage-like adamantane", "sp³", "109.5°", "Polar"],
    ["Acetic acid","CH₃COOH","Acids","Planar around COOH","sp²/sp³","~120°","Polar"],
    ["Formic acid","HCOOH","Acids","Planar","sp²","120°","Polar"],
    ["Benzene","C₆H₆","Organic","Planar hexagonal","sp²","120°","Non-polar"],
    ["Propane","C₃H₈","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Propene","C₃H₆","Organic","Trigonal planar / tetrahedral","sp²/sp³","120°","Non-polar"],
    ["Propyne","C₃H₄","Organic","Linear / tetrahedral","sp/sp³","180°","Non-polar"],
    ["Butane","C₄H₁₀","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Pentane","C₅H₁₂","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Hexane","C₆H₁₄","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Heptane","C₇H₁₆","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Octane","C₈H₁₈","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Glucose","C₆H₁₂O₆","Organic","Complex","sp³","—","Polar"],
    ["Fructose","C₆H₁₂O₆","Organic","Complex","sp³","—","Polar"],
    ["Ethanol","C₂H₆O","Organic","Tetrahedral","sp³","109.5°","Polar"],
    ["Propanol","C₃H₈O","Organic","Tetrahedral","sp³","109.5°","Polar"],
    ["Acetone","C₃H₆O","Organic","Trigonal planar at carbonyl","sp²","120°","Polar"],
    ["Formaldehyde","CH₂O","Organic","Trigonal planar","sp²","120°","Polar"],
    ["Acetaldehyde","C₂H₄O","Organic","Trigonal planar at carbonyl","sp²","120°","Polar"],
    ["Dimethyl ether","C₂H₆O","Organic","Bent around O","sp³","~111°","Polar"],
    ["Chloroform","CHCl₃","Organic","Tetrahedral","sp³","109.5°","Polar"],
    ["Carbon tetrachloride","CCl₄","Organic","Tetrahedral","sp³","109.5°","Non-polar"],
    ["Dichloromethane","CH₂Cl₂","Organic","Tetrahedral","sp³","109.5°","Polar"],
    ["Bromomethane","CH₃Br","Organic","Tetrahedral","sp³","109.5°","Polar"],
    ["Iodomethane","CH₃I","Organic","Tetrahedral","sp³","109.5°","Polar"],
    ["Ethylamine","C₂H₇N","Organic","Trigonal pyramidal","sp³","107°","Polar"],
    ["Methylamine","CH₅N","Organic","Trigonal pyramidal","sp³","107°","Polar"],
    ["Urea","CH₄N₂O","Organic","Planar","sp²","120°","Polar"],
    ["Hydrogen cyanide","HCN","Organic","Linear","sp","180°","Polar"],
    ["Cyanogen","C₂N₂","Organic","Linear","sp","180°","Non-polar"],
    // --- Additional Compounds Expansion Pack ---
    ["Carbon monoxide", "CO", "Gases", "Linear", "sp", "180°", "Polar"],
    ["Carbon dioxide", "CO₂", "Gases", "Linear", "sp", "180°", "Non-polar"],
    ["Sulfur dioxide", "SO₂", "Gases", "Bent", "sp²", "119°", "Polar"],
    ["Sulfur trioxide", "SO₃", "Gases", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Nitric oxide", "NO", "Gases", "Linear", "sp²", "180°", "Polar"],
    ["Nitrogen trifluoride", "NF₃", "Inorganic", "Trigonal pyramidal", "sp³", "102°", "Polar"],
    ["Phosphorus trichloride", "PCl₃", "Inorganic", "Trigonal pyramidal", "sp³", "100°", "Polar"],
    ["Phosphorus pentachloride", "PCl₅", "Inorganic", "Trigonal bipyramidal", "sp³d", "90°/120°", "Non-polar"],
    ["Sulfur hexafluoride", "SF₆", "Inorganic", "Octahedral", "sp³d²", "90°", "Non-polar"],
    ["Xenon difluoride", "XeF₂", "Inorganic", "Linear", "sp³d²", "180°", "Non-polar"],
    ["Xenon tetrafluoride", "XeF₄", "Inorganic", "Square planar", "sp³d²", "90°", "Non-polar"],
    ["Xenon hexafluoride", "XeF₆", "Inorganic", "Distorted octahedral", "sp³d³", "—", "Polar"],
    ["Water", "H₂O", "Inorganic", "Bent", "sp³", "104.5°", "Polar"],
    ["Heavy water", "D₂O", "Inorganic", "Bent", "sp³", "104.5°", "Polar"],
    ["Hydrogen sulfide", "H₂S", "Inorganic", "Bent", "sp³", "92.1°", "Polar"],
    ["Hydrazine", "N₂H₄", "Inorganic", "Pyramidal at N", "sp³", "112°", "Polar"],
    ["Hydroxylamine", "NH₂OH", "Inorganic", "Tetrahedral/Pyramidal", "sp³", "~108°", "Polar"],
    ["Hydrogen chloride", "HCl", "Acids", "Linear", "—", "180°", "Polar"],
    ["Perchloric acid", "HClO₄", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Nitric acid", "HNO₃", "Acids", "Trigonal planar", "sp²", "120°", "Polar"],
    ["Nitrous acid", "HNO₂", "Acids", "Bent", "sp²", "111°", "Polar"],
    ["Phosphorous acid", "H₃PO₃", "Acids", "Pyramidal", "sp³", "~104°", "Polar"],
    ["Boric acid", "H₃BO₃", "Acids", "Trigonal planar", "sp²", "120°", "Polar"],
    ["Hydrogen peroxide", "H₂O₂", "Inorganic", "Skew/Non-planar", "sp³", "94.8°", "Polar"],
    ["Sodium chloride", "NaCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Potassium chloride", "KCl", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium chloride", "CaCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Magnesium chloride", "MgCl₂", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Sodium carbonate", "Na₂CO₃", "Salts", "Ionic/Planar", "sp²", "120°", "Ionic"],
    ["Sodium bicarbonate", "NaHCO₃", "Salts", "Ionic/Planar", "sp²", "120°", "Ionic"],
    ["Potassium nitrate", "KNO₃", "Salts", "Ionic/Planar", "sp²", "120°", "Ionic"],
    ["Ammonium sulfate", "(NH₄)₂SO₄", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Copper sulfate", "CuSO₄", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Silver nitrate", "AgNO₃", "Salts", "Ionic lattice", "—", "—", "Ionic"],
    ["Methanol", "CH₄O", "Organic", "Tetrahedral", "sp³", "108.9°", "Polar"],
    ["Ethylene", "C₂H₄", "Organic", "Trigonal planar", "sp²", "121.7°", "Non-polar"],
    ["Acetylene", "C₂H₂", "Organic", "Linear", "sp", "180°", "Non-polar"],
    ["Cyclopropane", "C₃H₆", "Organic", "Ring / Bent bonds", "sp³", "60°", "Non-polar"],
    ["Cyclobutane", "C₄H₈", "Organic", "Puckered", "sp³", "88°", "Non-polar"],
    ["Cyclopentane", "C₅H₁₀", "Organic", "Envelope", "sp³", "105°", "Non-polar"],
    ["Cyclohexane", "C₆H₁₂", "Organic", "Chair", "sp³", "109.5°", "Non-polar"],
    ["Toluene", "C₇H₈", "Organic", "Planar ring", "sp²", "120°", "Non-polar"],
    ["Phenol", "C₆H₆O", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Aniline", "C₆H₇N", "Organic", "Planar ring", "sp²", "120°", "Polar"],
    ["Benzoic acid", "C₇H₆O₂", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Benzyl alcohol", "C₇H₈O", "Organic", "Complex", "sp³/sp²", "—", "Polar"],
    ["Styrene", "C₈H₈", "Organic", "Complex", "sp²", "120°", "Non-polar"],
    ["Naphthalene", "C₁₀H₈", "Organic", "Fused planar rings", "sp²", "120°", "Non-polar"],
    ["Anthracene", "C₁₄H₁₀", "Organic", "Fused planar rings", "sp²", "120°", "Non-polar"],
    ["Butanol", "C₄H₁₀O", "Organic", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Diethyl ether", "C₄H₁₀O", "Organic", "Bent around O", "sp³", "~112°", "Polar"],
    ["Ethyl acetate", "C₄H₈O₂", "Organic", "Planar at carbonyl", "sp²", "120°", "Polar"],
    ["Oxalic acid", "C₂H₂O₄", "Organic", "Planar", "sp²", "120°", "Polar"],
    ["Citric acid", "C₆H₈O₇", "Organic", "Complex", "sp³", "—", "Polar"],
    ["Lactic acid", "C₃H₆O₃", "Organic", "Tetrahedral/Planar", "sp³/sp²", "109.5°", "Polar"],
    ["Uric acid", "C₅H₄N₄O₃", "Organic", "Complex planar", "sp²/sp³", "—", "Polar"],
    ["Glycine", "C₂H₅NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Alanine", "C₃H₇NO₂", "Organic", "Complex zwitterion", "sp³/sp²", "109.5°", "Polar"],
    ["Acetonitrile", "C₂H₃N", "Organic", "Linear at nitrile", "sp/sp³", "180°", "Polar"],
    ["Nitromethane", "CH₃NO₂", "Organic", "Planar nitro group", "sp²/sp³", "120°", "Polar"],
    ["Thionyl chloride", "SOCl₂", "Inorganic", "Trigonal pyramidal", "sp³", "106°", "Polar"],
    ["Sulfuryl chloride", "SO₂Cl₂", "Inorganic", "Tetrahedral", "sp³", "111°", "Polar"],
    ["Phosphoryl chloride", "POCl₃", "Inorganic", "Tetrahedral", "sp³", "103.3°", "Polar"],
    ["Carbon disulfide", "CS₂", "Inorganic", "Linear", "sp", "180°", "Non-polar"],
    ["Carbon oxysulfide", "COS", "Inorganic", "Linear", "sp", "180°", "Polar"],
    ["Boron trifluoride", "BF₃", "Inorganic", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Aluminum chloride", "AlCl₃", "Inorganic", "Trigonal planar / Dimeric", "sp²", "120°", "Polar"],
    ["Magnesium oxide", "MgO", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium oxide", "CaO", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Titanium dioxide", "TiO₂", "Inorganic", "Octahedral coordination", "sp³d²", "90°", "Polar"],
    ["Silicon dioxide", "SiO₂", "Inorganic", "Network tetrahedral", "sp³", "109.5°", "Polar"],
    ["Lithium hydride", "LiH", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Sodium hydride", "NaH", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Calcium hydride", "CaH₂", "Inorganic", "Ionic lattice", "—", "—", "Ionic"],
    ["Beryllium chloride", "BeCl₂", "Inorganic", "Linear (monomer)", "sp", "180°", "Non-polar"],
    ["Gallium trichloride", "GaCl₃", "Inorganic", "Trigonal planar", "sp²", "120°", "Non-polar"],
    ["Indium trichloride", "InCl₃", "Inorganic", "Layered / Monomer", "sp²", "120°", "Non-polar"],
    ["Germanium tetrachloride", "GeCl₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Stannic chloride", "SnCl₄", "Inorganic", "Tetrahedral", "sp³", "109.5°", "Non-polar"],
    ["Lead dichloride", "PbCl₂", "Inorganic", "Coordination polymer", "sp³", "—", "Polar"],
    ["Arsenic trifluoride", "AsF₃", "Inorganic", "Trigonal pyramidal", "sp³", "98°", "Polar"],
    ["Arsenic trichloride", "AsCl₃", "Inorganic", "Trigonal pyramidal", "sp³", "98.6°", "Polar"],
    ["Antimony trichloride", "SbCl₃", "Inorganic", "Pyramidal", "sp³", "95.6°", "Polar"],
    ["Bismuth trichloride", "BiCl₃", "Inorganic", "Complex pyramidal", "sp³", "—", "Polar"],
    ["Selenious acid", "H₂SeO₃", "Acids", "Pyramidal", "sp³", "~105°", "Polar"],
    ["Selenic acid", "H₂SeO₄", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Telluric acid", "H₆TeO₆", "Acids", "Octahedral", "sp³d²", "90°", "Polar"],
    ["Iodic acid", "HIO₃", "Acids", "Trigonal pyramidal", "sp³", "105°", "Polar"],
    ["Periodic acid", "HIO₄", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Chlorous acid", "HClO₂", "Acids", "Bent", "sp³", "103°", "Polar"],
    ["Hypochlorous acid", "HClO", "Acids", "Bent", "sp³", "103°", "Polar"],
    ["Bromic acid", "HBrO₃", "Acids", "Trigonal pyramidal", "sp³", "104°", "Polar"],
    ["Sulfamic acid", "H₃NSO₃", "Acids", "Tetrahedral", "sp³", "109.5°", "Polar"],
    ["Trifluoroacetic acid", "CF₃COOH", "Acids", "Planar around COOH", "sp²/sp³", "120°", "Polar"],
    ["Butyric acid", "C₄H₈O₂", "Acids", "Planar around COOH", "sp²/sp³", "~120°", "Polar"],
    ["Valeric acid", "C₅H₁₀O₂", "Acids", "Planar around COOH", "sp²/sp³", "~120°", "Polar"],
    ["Palmitic acid", "C₁₆H₃₂O₂", "Acids", "Chain / Planar", "sp³", "109.5°", "Polar"],
    ["Stearic acid", "C₁₈H₃₆O₂", "Acids", "Chain / Planar", "sp³", "109.5°", "Polar"],
    ["Oleic acid", "C₁₈H₃₄O₂", "Acids", "Unsaturated chain", "sp²/sp³", "~120°", "Polar"],
    ["Pyruvic acid", "C₃H₄O₃", "Organic", "Complex keto-acid", "sp²/sp³", "120°", "Polar"]
    
    ];
    
    
    /* ============================================================
       CREATE VISUAL FALLBACK STRUCTURES
    ============================================================ */
    
    extraMolecules.forEach((m, index) => {
    
        const name = m[0];
        const formula = m[1];
        const category = m[2];
    
        let atoms = [];
        let bonds = [];
    
        if (formula.includes("₂") && formula.length <= 3) {
    
            let element = formula[0];
    
            atoms = [
                [element,-0.7,0,0],
                [element,0.7,0,0]
            ];
    
            bonds = [[0,1]];
    
        } else {
    
            let central = formula.match(/[A-Z][a-z]?/);
    
            central = central ? central[0] : "C";
    
            atoms = [
                [central,0,0,0],
                ["H",1.2,0,0],
                ["H",-1.2,0,0],
                ["H",0,1.2,0],
                ["H",0,-1.2,0]
            ];
    
            bonds = [
                [0,1],
                [0,2],
                [0,3],
                [0,4]
            ];
    
        }
    
        molecules.push({
    
            name:name,
            formula:formula,
            category:category,
    
            atoms:atoms,
            bonds:bonds,
    
            shape:m[3],
            domains:4,
            hybridization:m[4],
            angle:m[5],
            polarity:m[6]
    
        });
    
    });
    
    
    /* ============================================================
       THREE.JS VARIABLES
    ============================================================ */
    
    let scene;
    let camera;
    let renderer;
    
    let moleculeGroup;
    
    let labelsVisible = true;
    let bondsVisible = true;
    
    let currentMolecule = null;
    
    let currentCategory = "All";
    
    let mouseDown = false;
    
    let previousMouse = {
        x:0,
        y:0
    };
    
    
    /* ============================================================
       ELEMENT COLORS / RADII
    ============================================================ */
    
    const elementData = {
    
    H:  {color:0xffffff,radius:0.25},
    C:  {color:0x444444,radius:0.38},
    N:  {color:0x2855ff,radius:0.35},
    O:  {color:0xff3030,radius:0.34},
    F:  {color:0x8aff52,radius:0.32},
    Cl: {color:0x35d34a,radius:0.40},
    Br: {color:0x8b321f,radius:0.45},
    I:  {color:0x7b45c7,radius:0.48},
    S:  {color:0xffd928,radius:0.42},
    P:  {color:0xff8b22,radius:0.42},
    B:  {color:0xffaa55,radius:0.34},
    Si: {color:0xaaaaaa,radius:0.40},
    Na: {color:0x9b78ff,radius:0.42},
    K:  {color:0xab77ff,radius:0.48},
    Ca: {color:0x66aaee,radius:0.48},
    Mg: {color:0x66ffcc,radius:0.40},
    Be: {color:0x55ddaa,radius:0.34}
    };
    
    
    /* ============================================================
       INIT THREE.JS
    ============================================================ */
    
    function initViewer() {
    
        const container = document.getElementById("viewer");
    
        scene = new THREE.Scene();
    
        camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
    
        camera.position.set(0,0,9);
    
    
        renderer = new THREE.WebGLRenderer({
            antialias:true,
            alpha:true
        });
    
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio,2)
        );
    
        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );
    
        container.appendChild(renderer.domElement);
    
    
        /* Lights */
    
        const ambient = new THREE.AmbientLight(
            0xffffff,
            1.2
        );
    
        scene.add(ambient);
    
    
        const light = new THREE.PointLight(
            0xffffff,
            2
        );
    
        light.position.set(5,5,8);
    
        scene.add(light);
    
    
        moleculeGroup = new THREE.Group();
    
        scene.add(moleculeGroup);
    
    
        setupMouseControls();
    
        animate();
    
    }
    
    
    /* ============================================================
       DRAW MOLECULE
    ============================================================ */
    
    function drawMolecule(molecule) {
    
        if (!moleculeGroup) return;
    
        while(moleculeGroup.children.length > 0) {
    
            moleculeGroup.remove(
                moleculeGroup.children[0]
            );
    
        }
    
    
        molecule.atoms.forEach((atom,index) => {
    
            const symbol = atom[0];
    
            const x = atom[1];
            const y = atom[2];
            const z = atom[3];
    
    
            const data =
                elementData[symbol] ||
                {
                    color:0xaaaaaa,
                    radius:0.35
                };
    
    
            const geometry =
                new THREE.SphereGeometry(
                    data.radius,
                    32,
                    32
                );
    
    
            const material =
                new THREE.MeshStandardMaterial({
    
                    color:data.color,
    
                    metalness:0.1,
    
                    roughness:0.35
    
                });
    
    
            const sphere =
                new THREE.Mesh(
                    geometry,
                    material
                );
    
    
            sphere.position.set(
                x,
                y,
                z
            );
    
    
            moleculeGroup.add(sphere);
    
    
            if(labelsVisible) {
    
                const label =
                    createLabel(symbol);
    
                label.position.set(
                    x,
                    y + data.radius + 0.15,
                    z
                );
    
                moleculeGroup.add(label);
    
            }
    
        });
    
    
        if(bondsVisible) {
    
            molecule.bonds.forEach(pair => {
    
                createBond(
                    molecule.atoms[pair[0]],
                    molecule.atoms[pair[1]]
                );
    
            });
    
        }
    
    
        moleculeGroup.rotation.set(
            0,
            0,
            0
        );
    
    }
    
    
    /* ============================================================
       CREATE BOND
    ============================================================ */
    
    function createBond(a,b) {
    
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
            .subVectors(end,start);
    
    
        const length =
            direction.length();
    
    
        const geometry =
            new THREE.CylinderGeometry(
                0.09,
                0.09,
                length,
                16
            );
    
    
        const material =
            new THREE.MeshStandardMaterial({
                color:0xb9c5bd,
                roughness:0.4
            });
    
    
        const cylinder =
            new THREE.Mesh(
                geometry,
                material
            );
    
    
        cylinder.position.copy(
            start.clone().add(end).multiplyScalar(0.5)
        );
    
    
        cylinder.quaternion.setFromUnitVectors(
            new THREE.Vector3(0,1,0),
            direction.normalize()
        );
    
    
        moleculeGroup.add(cylinder);
    
    }
    
    
    /* ============================================================
       LABEL
    ============================================================ */
    
    function createLabel(text) {
    
        const canvas =
            document.createElement("canvas");
    
        canvas.width = 128;
        canvas.height = 64;
    
        const ctx =
            canvas.getContext("2d");
    
        ctx.clearRect(
            0,
            0,
            128,
            64
        );
    
        ctx.font =
            "bold 32px Arial";
    
        ctx.fillStyle =
            "white";
    
        ctx.textAlign =
            "center";
    
        ctx.textBaseline =
            "middle";
    
        ctx.fillText(
            text,
            64,
            32
        );
    
    
        const texture =
            new THREE.CanvasTexture(canvas);
    
    
        const material =
            new THREE.SpriteMaterial({
                map:texture,
                transparent:true
            });
    
    
        const sprite =
            new THREE.Sprite(material);
    
    
        sprite.scale.set(
            0.65,
            0.32,
            1
        );
    
    
        return sprite;
    
    }
    
    
    /* ============================================================
       LOAD MOLECULE LIST
    ============================================================ */
    
    function renderMoleculeList(list = molecules) {
    
        const container =
            document.getElementById(
                "moleculeList"
            );
    
        container.innerHTML = "";
    
    
        document.getElementById(
            "moleculeCount"
        ).textContent = list.length;
    
    
        list.forEach((molecule,index) => {
    
            const item =
                document.createElement("div");
    
            item.className =
                "moleculeItem";
    
    
            item.innerHTML = `
    
                <strong>${molecule.name}</strong>
    
                <span>
                    ${molecule.formula}
                </span>
    
            `;
    
    
            item.onclick = () => {
    
                document
                    .querySelectorAll(".moleculeItem")
                    .forEach(x =>
                        x.classList.remove("selected")
                    );
    
                item.classList.add("selected");
    
                selectMolecule(molecule);
    
            };
    
    
            container.appendChild(item);
    
        });
    
    }
    
    
    /* ============================================================
       SELECT MOLECULE
    ============================================================ */
    
    function selectMolecule(molecule) {
    
        currentMolecule = molecule;
    
        drawMolecule(molecule);
    
    
        document.getElementById(
            "moleculeName"
        ).textContent =
            molecule.name;
    
    
        document.getElementById(
            "moleculeFormula"
        ).textContent =
            molecule.formula;
    
    
        document.getElementById(
            "shape"
        ).textContent =
            molecule.shape;
    
    
        document.getElementById(
            "hybridization"
        ).textContent =
            molecule.hybridization;
    
    
        document.getElementById(
            "angle"
        ).textContent =
            molecule.angle;
    
    
        document.getElementById(
            "polarity"
        ).textContent =
            molecule.polarity;
    
    
        document.getElementById(
            "domains"
        ).textContent =
            molecule.domains;
    
    }
    
    
    /* ============================================================
       SEARCH
    ============================================================ */
    
    function searchMolecules() {
    
        const query =
            document
                .getElementById("searchInput")
                .value
                .toLowerCase();
    
    
        let result =
            molecules.filter(m => {
    
                return (
    
                    m.name
                        .toLowerCase()
                        .includes(query)
    
                    ||
    
                    m.formula
                        .toLowerCase()
                        .includes(query)
    
                );
    
            });
    
    
        if(currentCategory !== "All") {
    
            result =
                result.filter(
                    m =>
                    m.category === currentCategory
                );
    
        }
    
    
        renderMoleculeList(result);
    
    }
    
    
    /* ============================================================
       CATEGORY FILTER
    ============================================================ */
    
    function filterCategory(category,button) {
    
        currentCategory = category;
    
    
        document
            .querySelectorAll(".category")
            .forEach(btn =>
                btn.classList.remove("active")
            );
    
    
        button.classList.add("active");
    
    
        searchMolecules();
    
    }
    
    
    /* ============================================================
       LABELS
    ============================================================ */
    
    function toggleLabels() {
    
        labelsVisible =
            !labelsVisible;
    
    
        if(currentMolecule) {
    
            drawMolecule(
                currentMolecule
            );
    
        }
    
    }
    
    
    /* ============================================================
       BONDS
    ============================================================ */
    
    function toggleBonds() {
    
        bondsVisible =
            !bondsVisible;
    
    
        if(currentMolecule) {
    
            drawMolecule(
                currentMolecule
            );
    
        }
    
    }
    
    
    /* ============================================================
       RANDOM MOLECULE
    ============================================================ */
    
    function randomMolecule() {
    
        const random =
            molecules[
                Math.floor(
                    Math.random() *
                    molecules.length
                )
            ];
    
    
        selectMolecule(random);
    
    }
    
    
    /* ============================================================
       CAMERA RESET
    ============================================================ */
    
    function resetCamera() {
    
        camera.position.set(
            0,
            0,
            9
        );
    
        moleculeGroup.rotation.set(
            0,
            0,
            0
        );
    
    }
    
    
    /* ============================================================
       MOUSE CONTROLS
    ============================================================ */
    
    function setupMouseControls() {
    
        const canvas =
            renderer.domElement;
    
    
        canvas.addEventListener(
            "mousedown",
            e => {
    
                mouseDown = true;
    
                previousMouse.x =
                    e.clientX;
    
                previousMouse.y =
                    e.clientY;
    
            }
        );
    
    
        window.addEventListener(
            "mouseup",
            () => {
    
                mouseDown = false;
    
            }
        );
    
    
        window.addEventListener(
            "mousemove",
            e => {
    
                if(!mouseDown)
                    return;
    
    
                const dx =
                    e.clientX -
                    previousMouse.x;
    
    
                const dy =
                    e.clientY -
                    previousMouse.y;
    
    
                moleculeGroup.rotation.y +=
                    dx * 0.01;
    
    
                moleculeGroup.rotation.x +=
                    dy * 0.01;
    
    
                previousMouse.x =
                    e.clientX;
    
    
                previousMouse.y =
                    e.clientY;
    
            }
        );
    
    
        canvas.addEventListener(
            "wheel",
            e => {
    
                camera.position.z +=
                    e.deltaY * 0.01;
    
    
                camera.position.z =
                    Math.max(
                        2.5,
                        Math.min(
                            30,
                            camera.position.z
                        )
                    );
    
            }
        );
    
    }
    
    
    /* ============================================================
       ANIMATION
    ============================================================ */
    
    function animate() {
    
        requestAnimationFrame(
            animate
        );
    
    
        renderer.render(
            scene,
            camera
        );
    
    }
    
    
    /* ============================================================
       RESIZE
    ============================================================ */
    
    window.addEventListener(
        "resize",
        () => {
    
            const container =
                document.getElementById(
                    "viewer"
                );
    
    
            if(!camera || !renderer)
                return;
    
    
            camera.aspect =
                container.clientWidth /
                container.clientHeight;
    
    
            camera.updateProjectionMatrix();
    
    
            renderer.setSize(
                container.clientWidth,
                container.clientHeight
            );
    
        }
    );
    
    
    /* ============================================================
       PERIODIC TABLE
    ============================================================ */
    
    const periodicElements = [
    
    ["H","Hydrogen",1,1],
    ["He","Helium",1,18],
    
    ["Li","Lithium",2,1],
    ["Be","Beryllium",2,2],
    ["B","Boron",2,13],
    ["C","Carbon",2,14],
    ["N","Nitrogen",2,15],
    ["O","Oxygen",2,16],
    ["F","Fluorine",2,17],
    ["Ne","Neon",2,18],
    
    ["Na","Sodium",3,1],
    ["Mg","Magnesium",3,2],
    ["Al","Aluminium",3,13],
    ["Si","Silicon",3,14],
    ["P","Phosphorus",3,15],
    ["S","Sulfur",3,16],
    ["Cl","Chlorine",3,17],
    ["Ar","Argon",3,18],
    
    ["K","Potassium",4,1],
    ["Ca","Calcium",4,2],
    ["Sc","Scandium",4,3],
    ["Ti","Titanium",4,4],
    ["V","Vanadium",4,5],
    ["Cr","Chromium",4,6],
    ["Mn","Manganese",4,7],
    ["Fe","Iron",4,8],
    ["Co","Cobalt",4,9],
    ["Ni","Nickel",4,10],
    ["Cu","Copper",4,11],
    ["Zn","Zinc",4,12],
    ["Ga","Gallium",4,13],
    ["Ge","Germanium",4,14],
    ["As","Arsenic",4,15],
    ["Se","Selenium",4,16],
    ["Br","Bromine",4,17],
    ["Kr","Krypton",4,18],
    
    ["Rb","Rubidium",5,1],
    ["Sr","Strontium",5,2],
    ["Y","Yttrium",5,3],
    ["Zr","Zirconium",5,4],
    ["Nb","Niobium",5,5],
    ["Mo","Molybdenum",5,6],
    ["Tc","Technetium",5,7],
    ["Ru","Ruthenium",5,8],
    ["Rh","Rhodium",5,9],
    ["Pd","Palladium",5,10],
    ["Ag","Silver",5,11],
    ["Cd","Cadmium",5,12],
    ["In","Indium",5,13],
    ["Sn","Tin",5,14],
    ["Sb","Antimony",5,15],
    ["Te","Tellurium",5,16],
    ["I","Iodine",5,17],
    ["Xe","Xenon",5,18],
    
    ["Cs","Cesium",6,1],
    ["Ba","Barium",6,2],
    
    ["Hf","Hafnium",6,4],
    ["Ta","Tantalum",6,5],
    ["W","Tungsten",6,6],
    ["Re","Rhenium",6,7],
    ["Os","Osmium",6,8],
    ["Ir","Iridium",6,9],
    ["Pt","Platinum",6,10],
    ["Au","Gold",6,11],
    ["Hg","Mercury",6,12],
    ["Tl","Thallium",6,13],
    ["Pb","Lead",6,14],
    ["Bi","Bismuth",6,15],
    ["Po","Polonium",6,16],
    ["At","Astatine",6,17],
    ["Rn","Radon",6,18],
    
    ["Fr","Francium",7,1],
    ["Ra","Radium",7,2],
    
    ["Rf","Rutherfordium",7,4],
    ["Db","Dubnium",7,5],
    ["Sg","Seaborgium",7,6],
    ["Bh","Bohrium",7,7],
    ["Hs","Hassium",7,8],
    ["Mt","Meitnerium",7,9],
    ["Ds","Darmstadtium",7,10],
    ["Rg","Roentgenium",7,11],
    ["Cn","Copernicium",7,12],
    ["Nh","Nihonium",7,13],
    ["Fl","Flerovium",7,14],
    ["Mc","Moscovium",7,15],
    ["Lv","Livermorium",7,16],
    ["Ts","Tennessine",7,17],
    ["Og","Oganesson",7,18]
    
    ];
    
    
    /* ============================================================
       RENDER PERIODIC TABLE
    ============================================================ */
    /* ============================================================
   ELEMENT CLASSIFICATION
   ============================================================ */

const elementCategories = {

    /* Alkali metals */
    Li: "alkali",
    Na: "alkali",
    K: "alkali",
    Rb: "alkali",
    Cs: "alkali",
    Fr: "alkali",

    /* Alkaline earth metals */
    Be: "alkaline-earth",
    Mg: "alkaline-earth",
    Ca: "alkaline-earth",
    Sr: "alkaline-earth",
    Ba: "alkaline-earth",
    Ra: "alkaline-earth",

    /* Transition metals */
    Sc: "transition",
    Ti: "transition",
    V: "transition",
    Cr: "transition",
    Mn: "transition",
    Fe: "transition",
    Co: "transition",
    Ni: "transition",
    Cu: "transition",
    Zn: "transition",

    Y: "transition",
    Zr: "transition",
    Nb: "transition",
    Mo: "transition",
    Tc: "transition",
    Ru: "transition",
    Rh: "transition",
    Pd: "transition",
    Ag: "transition",
    Cd: "transition",

    Hf: "transition",
    Ta: "transition",
    W: "transition",
    Re: "transition",
    Os: "transition",
    Ir: "transition",
    Pt: "transition",
    Au: "transition",
    Hg: "transition",

    Rf: "transition",
    Db: "transition",
    Sg: "transition",
    Bh: "transition",
    Hs: "transition",
    Mt: "transition",
    Ds: "transition",
    Rg: "transition",
    Cn: "transition",

    /* Post-transition metals */
    Al: "post-transition",
    Ga: "post-transition",
    In: "post-transition",
    Sn: "post-transition",
    Tl: "post-transition",
    Pb: "post-transition",
    Bi: "post-transition",
    Po: "post-transition",
    Nh: "post-transition",
    Fl: "post-transition",
    Mc: "post-transition",
    Lv: "post-transition",

    /* Metalloids */
    B: "metalloid",
    Si: "metalloid",
    Ge: "metalloid",
    As: "metalloid",
    Sb: "metalloid",
    Te: "metalloid",

    /* Reactive non-metals */
    H: "hydrogen",
    C: "nonmetal",
    N: "nonmetal",
    O: "nonmetal",
    F: "nonmetal",
    P: "nonmetal",
    S: "nonmetal",
    Se: "nonmetal",
    Cl: "nonmetal",
    Br: "nonmetal",
    I: "nonmetal",
    At: "nonmetal",
    Ts: "nonmetal",

    /* Noble gases */
    He: "noble-gas",
    Ne: "noble-gas",
    Ar: "noble-gas",
    Kr: "noble-gas",
    Xe: "noble-gas",
    Rn: "noble-gas",
    Og: "noble-gas"
};
    function renderPeriodicTable() {

        const table = document.getElementById("periodicTable");
    
        table.innerHTML = "";
    
        const colors = {

            /* Alkali Metals */
            alkali: "#ff6b6b",
        
            /* Alkaline Earth Metals */
            "alkaline-earth": "#ffb86b",
        
            /* Transition Metals */
            transition: "#ffd93d",
        
            /* Post-Transition Metals */
            "post-transition": "#4dd0e1",
        
            /* Metalloids */
            metalloid: "#69db7c",
        
            /* Nonmetals */
            nonmetal: "#74c0fc",
        
            /* Hydrogen */
            hydrogen: "#a5d8ff",
        
            /* Noble Gases */
            "noble-gas": "#c084fc",
        
            /* Lanthanides */
            lanthanide: "#f783ac",
        
            /* Actinides */
            actinide: "#da9e6b"
        };
    
        periodicElements.forEach((element, index) => {
    
            const [
                symbol,
                name,
                period,
                group
            ] = element;
    
            const category =
                elementCategories[symbol] || "transition";
    
            const box =
                document.createElement("div");
    
            box.className = "element";
    
            /* Position */
            box.style.gridColumn = group;
            box.style.gridRow = period;
    
            /* FORCE COLOR */
            box.style.background = colors[category];
    
            /* Make transition-metal yellow readable */
            if (category === "transition") {
                box.style.color = "#111";
            } else {
                box.style.color = "#fff";
            }
    
            box.innerHTML = `
    
                <div class="number">
                    ${index + 1}
                </div>
    
                <div class="symbol">
                    ${symbol}
                </div>
    
                <div class="name">
                    ${name}
                </div>
    
            `;
    
            box.onclick = () => {
    
                showElement(
                    symbol,
                    name,
                    index + 1
                );
    
            };
    
            table.appendChild(box);
    
        });
    }
    
    
    /* ============================================================
       ELEMENT INFO
    ============================================================ */
    
    function showElement(
        symbol,
        name,
        atomicNumber
    ) {
    
        document.getElementById(
            "elementDetails"
        ).innerHTML = `
    
            <strong style="font-size:25px;color:#3cff9b">
                ${symbol}
            </strong>
    
            <br><br>
    
            <strong>${name}</strong>
    
            <br><br>
    
            Atomic Number:
            ${atomicNumber}
    
        `;
    
    }
    
    
    /* ============================================================
       PAGE SWITCHING
    ============================================================ */
    
    function showMolecules() {
    
        document
            .getElementById("moleculePage")
            .classList.remove("hidden");
    
    
        document
            .getElementById("periodicPage")
            .classList.add("hidden");
    
    }
    
    
    function showPeriodicTable() {
    
        document
            .getElementById("moleculePage")
            .classList.add("hidden");
    
    
        document
            .getElementById("periodicPage")
            .classList.remove("hidden");
    
    }
    
    
    /* ============================================================
       START APPLICATION
    ============================================================ */
    
    window.addEventListener(
        "load",
        () => {
    
            initViewer();
    
            renderMoleculeList();
    
            renderPeriodicTable();
    
    
            /* Automatically show water */
    
            selectMolecule(
                molecules.find(
                    m => m.name === "Water"
                )
            );
    
        }
    );