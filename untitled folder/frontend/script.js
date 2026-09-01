/* ============================================================
   MOLECULAR LAB
   Main JavaScript
============================================================ */


/* ============================================================
   MOLECULE DATABASE
============================================================ */

const molecules = [
    {
        name:"Hydrogen bromide",
        formula:"HBr",
        category:"Acids",
        atoms:[
            ["H",-0.75,0,0],
            ["Br",0.75,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen iodide",
        formula:"HI",
        category:"Acids",
        atoms:[
            ["H",-0.8,0,0],
            ["I",0.8,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphine",
        formula:"PH₃",
        category:"Inorganic",
        atoms:[
            ["P",0,0.5,0],
            ["H",1.4,-0.5,0],
            ["H",-1.4,-0.5,0],
            ["H",0,-0.5,1.4]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"93.5°",
        polarity:"Polar"
    },
    
    {
        name:"Diborane",
        formula:"B₂H₆",
        category:"Inorganic",
        atoms:[
            ["B",-0.9,0,0],
            ["B",0.9,0,0],
            ["H",-1.6,1,0],
            ["H",-1.6,-1,0],
            ["H",1.6,1,0],
            ["H",1.6,-1,0],
            ["H",0,0,1.2],
            ["H",0,0,-1.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5],[0,6],[1,6],[0,7],[1,7]],
        shape:"Bridged",
        domains:4,
        hybridization:"sp³",
        angle:"~120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Nitrogen dioxide",
        formula:"NO₂",
        category:"Gases",
        atoms:[
            ["N",0,0,0],
            ["O",1.5,0.9,0],
            ["O",-1.5,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~134°",
        polarity:"Polar"
    },
    
    {
        name:"Dinitrogen monoxide",
        formula:"N₂O",
        category:"Gases",
        atoms:[
            ["N",-1.1,0,0],
            ["N",0,0,0],
            ["O",1.2,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrous oxide",
        formula:"N₂O₃",
        category:"Inorganic",
        atoms:[
            ["N",-1.2,0.5,0],
            ["N",0,0,0],
            ["O",1.3,0.8,0],
            ["O",-2.1,1.1,0],
            ["O",-1.5,-0.9,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Dinitrogen tetroxide",
        formula:"N₂O₄",
        category:"Inorganic",
        atoms:[
            ["N",-0.8,0,0],
            ["N",0.8,0,0],
            ["O",-1.5,1,0],
            ["O",-1.5,-1,0],
            ["O",1.5,1,0],
            ["O",1.5,-1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Phosphorus trichloride",
        formula:"PCl₃",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["Cl",1.7,0.8,0],
            ["Cl",-1.7,0.8,0],
            ["Cl",0,-1.5,1.2]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"100°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphorus trioxide",
        formula:"P₄O₆",
        category:"Inorganic",
        atoms:[
            ["P",1,1,1],
            ["P",-1,-1,1],
            ["P",-1,1,-1],
            ["P",1,-1,-1],
            ["O",0.5,0.5,1],
            ["O",-0.5,-0.5,1],
            ["O",-0.5,0.5,-1],
            ["O",0.5,-0.5,-1],
            ["O",1,0,-0.2],
            ["O",-1,0,0.2]
        ],
        bonds:[[0,4],[0,8],[0,1],[1,5],[1,9],[1,2],[2,6],[2,8],[2,3],[3,7],[3,9],[3,0]],
        shape:"Cage",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Phosphorus pentoxide",
        formula:"P₄O₁₀",
        category:"Inorganic",
        atoms:[
            ["P",1,1,1],
            ["P",-1,-1,1],
            ["P",-1,1,-1],
            ["P",1,-1,-1],
            ["O",1.9,1.9,1.9],
            ["O",-1.9,-1.9,1.9],
            ["O",-1.9,1.9,-1.9],
            ["O",1.9,-1.9,-1.9],
            ["O",0,1.2,1.2],
            ["O",0,-1.2,1.2],
            ["O",0,1.2,-1.2],
            ["O",0,-1.2,-1.2],
            ["O",1.2,0,1.2],
            ["O",-1.2,0,1.2]
        ],
        bonds:[[0,4],[1,5],[2,6],[3,7],[0,8],[0,12],[1,9],[1,13],[2,10],[2,13],[3,11],[3,12]],
        shape:"Network",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur dichloride",
        formula:"SCl₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["Cl",1.7,0.9,0],
            ["Cl",-1.7,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"103°",
        polarity:"Polar"
    },
    
    {
        name:"Carbon disulfide",
        formula:"CS₂",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["S",1.8,0,0],
            ["S",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Silane",
        formula:"SiH₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
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
        name:"Silicon tetrachloride",
        formula:"SiCl₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["Cl",1.5,1.5,1.5],
            ["Cl",-1.5,-1.5,1.5],
            ["Cl",-1.5,1.5,-1.5],
            ["Cl",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Silicon dioxide",
        formula:"SiO₂",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["O",1.6,0,0],
            ["O",-1.6,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbonyl sulfide",
        formula:"COS",
        category:"Inorganic",
        atoms:[
            ["O",-1.2,0,0],
            ["C",0,0,0],
            ["S",1.6,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Formaldehyde",
        formula:"CH₂O",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["H",1.1,-0.8,0],
            ["H",-1.1,-0.8,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Formic acid",
        formula:"CH₂O₂",
        category:"Acids",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["O",1.3,-0.5,0],
            ["H",-1.1,-0.7,0],
            ["H",1.8,-1.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4]],
        shape:"Trigonal planar around C",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acetic acid",
        formula:"C₂H₄O₂",
        category:"Acids",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.8,0,0],
            ["O",1.5,1.1,0],
            ["O",1.5,-1.1,0],
            ["H",2.3,-1.5,0],
            ["H",-1.4,0.9,0],
            ["H",-1.4,-0.9,0],
            ["H",-0.7,0,1]
        ],
        bonds:[[0,1],[1,2],[1,3],[3,4],[0,5],[0,6],[0,7]],
        shape:"Planar around carboxyl group",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Propane",
        formula:"C₃H₈",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.8,0,1],
            ["H",0,1,1],
            ["H",0,-1,-1],
            ["H",1.8,1,0],
            ["H",1.8,-1,0],
            ["H",1.8,0,-1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5],[1,6],[1,7],[2,8],[2,9],[2,10]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Propene",
        formula:"C₃H₆",
        category:"Organic",
        atoms:[
            ["C",-1.2,0,0],
            ["C",0,0,0],
            ["C",1.4,0,0],
            ["H",-1.7,1,0],
            ["H",-1.7,-1,0],
            ["H",0,1.1,0],
            ["H",0,-1.1,0],
            ["H",2,0.9,0],
            ["H",2,-0.9,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[1,5],[1,6],[2,7],[2,8]],
        shape:"Trigonal planar around double bond",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Propyne",
        formula:"C₃H₄",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["H",-2,0,0],
            ["H",1.9,0.9,0],
            ["H",1.9,-0.9,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[2,4],[2,5]],
        shape:"Linear around triple bond",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Butane",
        formula:"C₄H₁₀",
        category:"Organic",
        atoms:[
            ["C",-2,0,0],
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["C",2,0,0],
            ["H",-2.5,1,0],
            ["H",-2.5,-1,0],
            ["H",-2,0,1],
            ["H",-0.7,1,1],
            ["H",-0.7,-1,-1],
            ["H",0.7,1,1],
            ["H",0.7,-1,-1],
            ["H",2.5,1,0],
            ["H",2.5,-1,0],
            ["H",2,0,-1]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8],[2,9],[2,10],[3,11],[3,12],[3,13]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Benzene",
        formula:"C₆H₆",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["H",2.4,0,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[1,7],[2,8],[3,9],[4,10],[5,11]
        ],
        shape:"Hexagonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Methanal",
        formula:"CH₂O",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["H",1.1,-0.7,0],
            ["H",-1.1,-0.7,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acetone",
        formula:"C₃H₆O",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["O",0,1.3,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.3,0,1],
            ["H",1.8,1,0],
            ["H",1.8,-1,0],
            ["H",1.3,0,-1]
        ],
        bonds:[[0,1],[1,2],[1,3],[0,4],[0,5],[0,6],[2,7],[2,8],[2,9]],
        shape:"Trigonal planar around carbonyl carbon",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethyl ether",
        formula:"C₂H₆O",
        category:"Organic",
        atoms:[
            ["C",-1,0,0],
            ["O",0,0,0],
            ["C",1,0,0],
            ["H",-1.5,1,0],
            ["H",-1.5,-1,0],
            ["H",-1,0,1],
            ["H",1.5,1,0],
            ["H",1.5,-1,0],
            ["H",1,0,-1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5],[2,6],[2,7],[2,8]],
        shape:"Bent around oxygen",
        domains:4,
        hybridization:"sp³",
        angle:"~111.7°",
        polarity:"Polar"
    },
    
    {
        name:"Ethanol",
        formula:"C₂H₆O",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.7,0,0],
            ["O",1.5,0.8,0],
            ["H",2.2,0.8,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1],
            ["H",0.7,-0.9,0],
            ["H",0.7,0,-1]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Ethylene glycol",
        formula:"C₂H₆O₂",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.8,0,0],
            ["O",-1.5,0.9,0],
            ["O",1.5,0.9,0],
            ["H",-2.1,1.2,0],
            ["H",2.1,1.2,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.3,-0.9,0],
            ["H",0.3,-0.9,0],
            ["H",1.3,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[2,4],[1,3],[3,5],[0,6],[0,7],[1,8],[1,9]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Chloromethane",
        formula:"CH₃Cl",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.5,0,0],
            ["H",-1,1,1],
            ["H",-1,-1,1],
            ["H",-1,0,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Dichloromethane",
        formula:"CH₂Cl₂",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.4,0,0],
            ["Cl",-1.4,0,0],
            ["H",0,1.1,1],
            ["H",0,-1.1,-1]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Chloroform",
        formula:"CHCl₃",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.4,1.4,1.4],
            ["Cl",-1.4,-1.4,1.4],
            ["Cl",-1.4,1.4,-1.4],
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
        name:"Carbon tetrachloride",
        formula:"CCl₄",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.5,1.5,1.5],
            ["Cl",-1.5,-1.5,1.5],
            ["Cl",-1.5,1.5,-1.5],
            ["Cl",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Methylamine",
        formula:"CH₅N",
        category:"Bases",
        atoms:[
            ["C",-0.8,0,0],
            ["N",0.7,0,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1],
            ["H",1.3,0.8,0],
            ["H",1.3,-0.8,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,5],[1,6]],
        shape:"Trigonal pyramidal around N",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethylamine",
        formula:"C₂H₇N",
        category:"Bases",
        atoms:[
            ["N",0,0,0],
            ["C",-1.2,0,0],
            ["C",1.2,0,0],
            ["H",0,1.1,0],
            ["H",-1.7,0.9,0],
            ["H",-1.7,-0.9,0],
            ["H",-1.2,0,-1],
            ["H",1.7,0.9,0],
            ["H",1.7,-0.9,0],
            ["H",1.2,0,1]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5],[1,6],[2,7],[2,8],[2,9]],
        shape:"Trigonal pyramidal around N",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrazine",
        formula:"N₂H₄",
        category:"Inorganic",
        atoms:[
            ["N",-0.7,0,0],
            ["N",0.7,0,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",1.3,0.9,0],
            ["H",1.3,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Non-linear",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Hydroxylamine",
        formula:"NH₃O",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["O",1.3,0,0],
            ["H",-0.8,0.9,0],
            ["H",-0.8,-0.9,0],
            ["H",0,0,1],
            ["H",2,0.7,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,5]],
        shape:"Non-linear",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Nitric oxide",
        formula:"NO",
        category:"Gases",
        atoms:[
            ["N",-0.6,0,0],
            ["O",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur monoxide",
        formula:"SO",
        category:"Gases",
        atoms:[
            ["S",-0.7,0,0],
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
        name:"Chlorine monoxide",
        formula:"Cl₂O",
        category:"Inorganic",
        atoms:[
            ["O",0,0,0],
            ["Cl",1.5,0.8,0],
            ["Cl",-1.5,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"110°",
        polarity:"Polar"
    },
    
    {
        name:"Dichlorine monoxide",
        formula:"Cl₂O",
        category:"Inorganic",
        atoms:[
            ["Cl",-1.4,0,0],
            ["O",0,0,0],
            ["Cl",1.4,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"110°",
        polarity:"Polar"
    },
    
    {
        name:"Carbon tetrafluoride",
        formula:"CF₄",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["F",1.5,1.5,1.5],
            ["F",-1.5,-1.5,1.5],
            ["F",-1.5,1.5,-1.5],
            ["F",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbon tetrabromide",
        formula:"CBr₄",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["Br",1.6,1.6,1.6],
            ["Br",-1.6,-1.6,1.6],
            ["Br",-1.6,1.6,-1.6],
            ["Br",1.6,-1.6,-1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron trichloride",
        formula:"BCl₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
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
            ["F",1.5,0,0],
            ["F",-0.75,1.3,0],
            ["F",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Aluminium chloride",
        formula:"AlCl₃",
        category:"Inorganic",
        atoms:[
            ["Al",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Beryllium hydride",
        formula:"BeH₂",
        category:"Inorganic",
        atoms:[
            ["Be",0,0,0],
            ["H",1.3,0,0],
            ["H",-1.3,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Magnesium chloride",
        formula:"MgCl₂",
        category:"Ions",
        atoms:[
            ["Mg",0,0,0],
            ["Cl",1.9,0,0],
            ["Cl",-1.9,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium chloride",
        formula:"CaCl₂",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0],
            ["Cl",2,0,0],
            ["Cl",-2,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium hydroxide",
        formula:"NaOH",
        category:"Ions",
        atoms:[
            ["Na",0,0,0],
            ["O",1.4,0,0],
            ["H",2.1,0.8,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Ionic + bent hydroxide",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen carbonate ion",
        formula:"HCO₃⁻",
        category:"Ions",
        atoms:[
            ["C",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Sulfate ion",
        formula:"SO₄²⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Sulfite ion",
        formula:"SO₃²⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Ionic"
    },
    
    {
        name:"Phosphate ion",
        formula:"PO₄³⁻",
        category:"Ions",
        atoms:[
            ["P",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Phosphite ion",
        formula:"HPO₃²⁻",
        category:"Ions",
        atoms:[
            ["P",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Chlorate ion",
        formula:"ClO₃⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Perchlorate ion",
        formula:"ClO₄⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Chlorite ion",
        formula:"ClO₂⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Hypochlorite ion",
        formula:"ClO⁻",
        category:"Ions",
        atoms:[
            ["Cl",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Bromate ion",
        formula:"BrO₃⁻",
        category:"Ions",
        atoms:[
            ["Br",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Iodate ion",
        formula:"IO₃⁻",
        category:"Ions",
        atoms:[
            ["I",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Amide ion",
        formula:"NH₂⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["H",1,0.8,0],
            ["H",-1,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~104°",
        polarity:"Ionic"
    },
    
    {
        name:"Cyanide ion",
        formula:"CN⁻",
        category:"Ions",
        atoms:[
            ["C",-0.6,0,0],
            ["N",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Cyanic acid",
        formula:"HOCN",
        category:"Acids",
        atoms:[
            ["H",-1.7,0,0],
            ["O",-0.7,0,0],
            ["C",0.5,0,0],
            ["N",1.6,0,0]
        ],
        bonds:[[0,1],[1,2],[2,3]],
        shape:"Linear around C–N",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen cyanide",
        formula:"HCN",
        category:"Acids",
        atoms:[
            ["H",-1.5,0,0],
            ["C",0,0,0],
            ["N",1.3,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Acetonitrile",
        formula:"C₂H₃N",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.5,0,0],
            ["N",1.7,0,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5]],
        shape:"Linear around nitrile group",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Urea",
        formula:"CH₄N₂O",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["N",1.3,-0.7,0],
            ["N",-1.3,-0.7,0],
            ["H",1.8,-1.4,0],
            ["H",1.8,0,0],
            ["H",-1.8,-1.4,0],
            ["H",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[3,7]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen trifluoride",
        formula:"NF₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["F",1.5,0.8,0],
            ["F",-1.5,0.8,0],
            ["F",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"102.5°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen trichloride",
        formula:"NCl₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["Cl",1.7,0.8,0],
            ["Cl",-1.7,0.8,0],
            ["Cl",0,-1.6,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen tribromide",
        formula:"NBr₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["Br",1.8,0.8,0],
            ["Br",-1.8,0.8,0],
            ["Br",0,-1.7,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur tetrafluoride",
        formula:"SF₄",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Seesaw",
        domains:5,
        hybridization:"sp³d",
        angle:"90°, 120°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur pentafluoride",
        formula:"SF₅",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Square pyramidal",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Chlorine trifluoride",
        formula:"ClF₃",
        category:"Inorganic",
        atoms:[
            ["Cl",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"T-shaped",
        domains:5,
        hybridization:"sp³d",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Xenon tetrafluoride",
        formula:"XeF₄",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Square planar",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Non-polar"
    },
    
    {
        name:"Xenon difluoride",
        formula:"XeF₂",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["F",1.8,0,0],
            ["F",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:5,
        hybridization:"sp³d",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Xenon tetraoxide",
        formula:"XeO₄",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Ozone",
        formula:"O₃",
        category:"Gases",
        atoms:[
            ["O",0,0,0],
            ["O",1.3,0.9,0],
            ["O",-1.3,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"117°",
        polarity:"Polar"
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
        name:"Phosphorus pentafluoride",
        formula:"PF₅",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["F",1.6,0,0],
            ["F",-1.6,0,0],
            ["F",0,1.6,0],
            ["F",0,-0.8,1.4],
            ["F",0,-0.8,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Trigonal bipyramidal",
        domains:5,
        hybridization:"sp³d",
        angle:"90°, 120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Chlorine pentafluoride",
        formula:"ClF₅",
        category:"Inorganic",
        atoms:[
            ["Cl",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Square pyramidal",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Iodine pentafluoride",
        formula:"IF₅",
        category:"Inorganic",
        atoms:[
            ["I",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Square pyramidal",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Iodine heptafluoride",
        formula:"IF₇",
        category:"Inorganic",
        atoms:[
            ["I",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5],
            ["F",0,0,-1.5],
            ["F",1.1,1.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]],
        shape:"Pentagonal bipyramidal",
        domains:7,
        hybridization:"sp³d³",
        angle:"72°, 90°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hydrogen sulfite ion",
        formula:"HSO₃⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen sulfate ion",
        formula:"HSO₄⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5],
            ["H",2.2,-2.2,-2.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[4,5]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Ammonium chloride",
        formula:"NH₄Cl",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["H",1.1,1.1,1.1],
            ["H",-1.1,-1.1,1.1],
            ["H",-1.1,1.1,-1.1],
            ["H",1.1,-1.1,-1.1],
            ["Cl",3,0,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Nitronium ion",
        formula:"NO₂⁺",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["O",1.5,0,0],
            ["O",-1.5,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Nitrite ion",
        formula:"NO₂⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["O",1.4,0.9,0],
            ["O",-1.4,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~115°",
        polarity:"Ionic"
    },
    
    {
        name:"Acetate ion",
        formula:"C₂H₃O₂⁻",
        category:"Ions",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.7,0,0],
            ["O",1.5,1,0],
            ["O",1.5,-1,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[[0,1],[1,2],[1,3],[0,4],[0,5],[0,6]],
        shape:"Trigonal planar around carboxyl carbon",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Oxalate ion",
        formula:"C₂O₄²⁻",
        category:"Ions",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",-1.6,0.9,0],
            ["O",-1.6,-0.9,0],
            ["O",1.6,0.9,0],
            ["O",1.6,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Permanganate ion",
        formula:"MnO₄⁻",
        category:"Ions",
        atoms:[
            ["Mn",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Chromate ion",
        formula:"CrO₄²⁻",
        category:"Ions",
        atoms:[
            ["Cr",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Dichromate ion",
        formula:"Cr₂O₇²⁻",
        category:"Ions",
        atoms:[
            ["Cr",-0.8,0,0],
            ["Cr",0.8,0,0],
            ["O",0,1.2,0],
            ["O",-1.6,1.2,0],
            ["O",-1.6,-1.2,0],
            ["O",1.6,1.2,0],
            ["O",1.6,-1.2,0],
            ["O",0,0,1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,2],[1,5],[1,6],[0,7]],
        shape:"Tetrahedral around Cr",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Oxonium ion",
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
    },
    
    {
        name:"Peroxide ion",
        formula:"O₂²⁻",
        category:"Ions",
        atoms:[
            ["O",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Superoxide ion",
        formula:"O₂⁻",
        category:"Ions",
        atoms:[
            ["O",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:3,
        hybridization:"sp²",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Fluoride ion",
        formula:"F⁻",
        category:"Ions",
        atoms:[
            ["F",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Chloride ion",
        formula:"Cl⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Bromide ion",
        formula:"Br⁻",
        category:"Ions",
        atoms:[
            ["Br",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Iodide ion",
        formula:"I⁻",
        category:"Ions",
        atoms:[
            ["I",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Lithium ion",
        formula:"Li⁺",
        category:"Ions",
        atoms:[
            ["Li",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium ion",
        formula:"Na⁺",
        category:"Ions",
        atoms:[
            ["Na",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium ion",
        formula:"K⁺",
        category:"Ions",
        atoms:[
            ["K",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Magnesium ion",
        formula:"Mg²⁺",
        category:"Ions",
        atoms:[
            ["Mg",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium ion",
        formula:"Ca²⁺",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Aluminium ion",
        formula:"Al³⁺",
        category:"Ions",
        atoms:[
            ["Al",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
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
        name:"Hydrogen sulfide",
        formula:"H₂S",
        category:"Acids",
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
        name:"Methanethiol",
        formula:"CH₄S",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["S",0.7,0,0],
            ["H",1.4,0.8,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethyl sulfide",
        formula:"C₂H₆S",
        category:"Organic",
        atoms:[
            ["C",-1,0,0],
            ["S",0,0,0],
            ["C",1,0,0],
            ["H",-1.5,1,0],
            ["H",-1.5,-1,0],
            ["H",-1,0,1],
            ["H",1.5,1,0],
            ["H",1.5,-1,0],
            ["H",1,0,-1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5],[2,6],[2,7],[2,8]],
        shape:"Bent around sulfur",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Carbon diselenide",
        formula:"CSe₂",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["Se",1.8,0,0],
            ["Se",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hydrogen selenide",
        formula:"H₂Se",
        category:"Inorganic",
        atoms:[
            ["Se",0,0,0],
            ["H",1.6,0.6,0],
            ["H",-1.6,0.6,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~91°",
        polarity:"Polar"
    },
    
    {
        name:"Selenium dioxide",
        formula:"SeO₂",
        category:"Inorganic",
        atoms:[
            ["Se",0,0,0],
            ["O",1.5,0.9,0],
            ["O",-1.5,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Silicon tetrafluoride",
        formula:"SiF₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["F",1.4,1.4,1.4],
            ["F",-1.4,-1.4,1.4],
            ["F",-1.4,1.4,-1.4],
            ["F",1.4,-1.4,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Silicon tetrahydride",
        formula:"SiH₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
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
        name:"Ethylamine",
        formula:"C₂H₇N",
        category:"Bases",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.7,0,0],
            ["N",1.6,0.8,0],
            ["H",2.3,0.8,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1],
            ["H",0.7,-0.9,0],
            ["H",0.7,0,-1],
            ["H",1.5,1.6,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[2,9],[0,4],[0,5],[0,6],[1,7],[1,8]],
        shape:"Trigonal pyramidal around N",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Methyl formate",
        formula:"C₂H₄O₂",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["O",1.3,-0.6,0],
            ["C",2.3,-0.6,0],
            ["H",-1.1,-0.7,0],
            ["H",2.8,0.3,0],
            ["H",2.8,-1.5,0],
            ["H",2.3,-0.6,1]
        ],
        bonds:[[0,1],[0,2],[2,3],[0,4],[3,5],[3,6],[3,7]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Ethyl acetate",
        formula:"C₄H₈O₂",
        category:"Organic",
        atoms:[
            ["C",-1.2,0,0],
            ["C",0.1,0,0],
            ["O",0.8,1.1,0],
            ["O",1.3,-1,0],
            ["C",2.4,-1,0],
            ["C",3.5,-1,0],
            ["H",-1.7,1,0],
            ["H",-1.7,-1,0],
            ["H",-1.2,0,1],
            ["H",0.1,0,-1],
            ["H",2.4,-2,0],
            ["H",2.4,0,0],
            ["H",3.9,-1,1],
            ["H",3.9,-1,-1]
        ],
        bonds:[[0,1],[1,2],[1,3],[3,4],[4,5],[0,6],[0,7],[0,8],[1,9],[4,10],[4,11],[5,12],[5,13]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Phenol",
        formula:"C₆H₆O",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["O",2.4,0,0],
            ["H",3.1,0.7,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[1,8],[2,9],[3,10],[4,11],[5,12]
        ],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Aniline",
        formula:"C₆H₇N",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["N",2.4,0,0],
            ["H",3.1,0.8,0],
            ["H",3.1,-0.8,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[6,8],[1,9],[2,10],[3,11],[4,12],[5,13]
        ],
        shape:"Trigonal planar aromatic system",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Pyridine",
        formula:"C₅H₅N",
        category:"Organic",
        atoms:[
            ["N",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [1,6],[2,7],[3,8],[4,9],[5,10]
        ],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Carbonic acid",
        formula:"H₂CO₃",
        category:"Acids",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["O",1.3,-0.6,0],
            ["O",-1.3,-0.6,0],
            ["H",1.8,-1.2,0],
            ["H",-1.8,-1.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[3,5]],
        shape:"Trigonal planar around C",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfuric acid",
        formula:"H₂SO₄",
        category:"Acids",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,1.5,1.2],
            ["O",-1.5,-1.5,1.2],
            ["O",-1.5,1.5,-1.2],
            ["O",1.5,-1.5,-1.2],
            ["H",-2.2,2.2,-1.8],
            ["H",2.2,-2.2,-1.8]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[3,5],[4,6]],
        shape:"Tetrahedral around S",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfurous acid",
        formula:"H₂SO₃",
        category:"Acids",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0],
            ["H",-2.1,1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4],[2,5]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
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
        name:"Water",
        formula:"H₂O",
        category:"Inorganic",
        atoms:[
            ["O",0,0,0],
            ["H",0.95,0.75,0],
            ["H",-0.95,0.75,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"104.5°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen fluoride",
        formula:"HF",
        category:"Acids",
        atoms:[
            ["H",-0.7,0,0],
            ["F",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen chloride",
        formula:"HCl",
        category:"Acids",
        atoms:[
            ["H",-0.75,0,0],
            ["Cl",0.75,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Ammonium",
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
        name:"Hydrogen fluoride ion",
        formula:"HF₂⁻",
        category:"Ions",
        atoms:[
            ["F",-1.2,0,0],
            ["H",0,0,0],
            ["F",1.2,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen peroxide",
        formula:"H₂O₂",
        category:"Acids",
        atoms:[
            ["O",-0.7,0,0],
            ["O",0.7,0,0],
            ["H",-1.25,0.8,0],
            ["H",1.25,-0.8,0]
        ],
        bonds:[[0,1],[0,2],[1,3]],
        shape:"Non-linear",
        domains:4,
        hybridization:"sp³",
        angle:"~94.8°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur trioxide",
        formula:"SO₃",
        category:"Gases",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Sulfur dioxide",
        formula:"SO₂",
        category:"Gases",
        atoms:[
            ["S",0,0,0],
            ["O",1.4,0.9,0],
            ["O",-1.4,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"119°",
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
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Oxygen",
        formula:"O₂",
        category:"Gases",
        atoms:[
            ["O",-0.65,0,0],
            ["O",0.65,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:2,
        hybridization:"sp²",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hydrogen",
        formula:"H₂",
        category:"Gases",
        atoms:[
            ["H",-0.5,0,0],
            ["H",0.5,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Fluorine",
        formula:"F₂",
        category:"Gases",
        atoms:[
            ["F",-0.7,0,0],
            ["F",0.7,0,0]
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
            ["Cl",-1,0,0],
            ["Cl",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Bromine",
        formula:"Br₂",
        category:"Gases",
        atoms:[
            ["Br",-1,0,0],
            ["Br",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Iodine",
        formula:"I₂",
        category:"Inorganic",
        atoms:[
            ["I",-1,0,0],
            ["I",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hydrogen cyanide",
        formula:"HCN",
        category:"Acids",
        atoms:[
            ["H",-1.5,0,0],
            ["C",0,0,0],
            ["N",1.3,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Carbon disulfide",
        formula:"CS₂",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["S",1.8,0,0],
            ["S",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron hydride",
        formula:"BH₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["H",1.2,0,0],
            ["H",-0.6,1.04,0],
            ["H",-0.6,-1.04,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron trihydride",
        formula:"BH₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["H",1.2,0,0],
            ["H",-0.6,1.04,0],
            ["H",-0.6,-1.04,0]
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
            ["Cl",-1.7,0,0],
            ["Cl",1.7,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Beryllium fluoride",
        formula:"BeF₂",
        category:"Inorganic",
        atoms:[
            ["Be",0,0,0],
            ["F",-1.4,0,0],
            ["F",1.4,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Beryllium oxide",
        formula:"BeO",
        category:"Inorganic",
        atoms:[
            ["Be",-0.8,0,0],
            ["O",0.8,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Magnesium oxide",
        formula:"MgO",
        category:"Ions",
        atoms:[
            ["Mg",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium oxide",
        formula:"CaO",
        category:"Ions",
        atoms:[
            ["Ca",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium fluoride",
        formula:"NaF",
        category:"Ions",
        atoms:[
            ["Na",-1,0,0],
            ["F",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium fluoride",
        formula:"KF",
        category:"Ions",
        atoms:[
            ["K",-1.1,0,0],
            ["F",1.1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Lithium fluoride",
        formula:"LiF",
        category:"Ions",
        atoms:[
            ["Li",-1,0,0],
            ["F",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium chloride",
        formula:"NaCl",
        category:"Ions",
        atoms:[
            ["Na",-1,0,0],
            ["Cl",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium chloride",
        formula:"KCl",
        category:"Ions",
        atoms:[
            ["K",-1,0,0],
            ["Cl",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium fluoride",
        formula:"CaF₂",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0],
            ["F",-1.7,0,0],
            ["F",1.7,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Aluminium fluoride",
        formula:"AlF₃",
        category:"Inorganic",
        atoms:[
            ["Al",0,0,0],
            ["F",1.5,0,0],
            ["F",-0.75,1.3,0],
            ["F",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Aluminium oxide",
        formula:"Al₂O₃",
        category:"Ions",
        atoms:[
            ["Al",-0.9,0.6,0],
            ["Al",0.9,0.6,0],
            ["O",-1.5,-0.8,0],
            ["O",0,-0.8,0],
            ["O",1.5,-0.8,0]
        ],
        bonds:[[0,2],[0,3],[1,3],[1,4]],
        shape:"Network",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Silicon tetrafluoride",
        formula:"SiF₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["F",1.4,1.4,1.4],
            ["F",-1.4,-1.4,1.4],
            ["F",-1.4,1.4,-1.4],
            ["F",1.4,-1.4,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Silicon tetrachloride",
        formula:"SiCl₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["Cl",1.5,1.5,1.5],
            ["Cl",-1.5,-1.5,1.5],
            ["Cl",-1.5,1.5,-1.5],
            ["Cl",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Silicon tetrabromide",
        formula:"SiBr₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["Br",1.6,1.6,1.6],
            ["Br",-1.6,-1.6,1.6],
            ["Br",-1.6,1.6,-1.6],
            ["Br",1.6,-1.6,-1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Silicon tetraiodide",
        formula:"SiI₄",
        category:"Inorganic",
        atoms:[
            ["Si",0,0,0],
            ["I",1.7,1.7,1.7],
            ["I",-1.7,-1.7,1.7],
            ["I",-1.7,1.7,-1.7],
            ["I",1.7,-1.7,-1.7]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Germanium tetrafluoride",
        formula:"GeF₄",
        category:"Inorganic",
        atoms:[
            ["Ge",0,0,0],
            ["F",1.4,1.4,1.4],
            ["F",-1.4,-1.4,1.4],
            ["F",-1.4,1.4,-1.4],
            ["F",1.4,-1.4,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Tin tetrachloride",
        formula:"SnCl₄",
        category:"Inorganic",
        atoms:[
            ["Sn",0,0,0],
            ["Cl",1.5,1.5,1.5],
            ["Cl",-1.5,-1.5,1.5],
            ["Cl",-1.5,1.5,-1.5],
            ["Cl",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Lead tetrachloride",
        formula:"PbCl₄",
        category:"Inorganic",
        atoms:[
            ["Pb",0,0,0],
            ["Cl",1.5,1.5,1.5],
            ["Cl",-1.5,-1.5,1.5],
            ["Cl",-1.5,1.5,-1.5],
            ["Cl",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbon tetrachloride",
        formula:"CCl₄",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.5,1.5,1.5],
            ["Cl",-1.5,-1.5,1.5],
            ["Cl",-1.5,1.5,-1.5],
            ["Cl",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbon tetrafluoride",
        formula:"CF₄",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["F",1.5,1.5,1.5],
            ["F",-1.5,-1.5,1.5],
            ["F",-1.5,1.5,-1.5],
            ["F",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Carbon tetrabromide",
        formula:"CBr₄",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["Br",1.6,1.6,1.6],
            ["Br",-1.6,-1.6,1.6],
            ["Br",-1.6,1.6,-1.6],
            ["Br",1.6,-1.6,-1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
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
        name:"Fluoromethane",
        formula:"CH₃F",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["F",1.5,0,0],
            ["H",-1,1,1],
            ["H",-1,-1,1],
            ["H",-1,0,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Dichlorodifluoromethane",
        formula:"CCl₂F₂",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.4,1.4,1.4],
            ["Cl",-1.4,-1.4,1.4],
            ["F",-1.4,1.4,-1.4],
            ["F",1.4,-1.4,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Trichlorofluoromethane",
        formula:"CCl₃F",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["Cl",1.4,1.4,1.4],
            ["Cl",-1.4,-1.4,1.4],
            ["Cl",-1.4,1.4,-1.4],
            ["F",1.4,-1.4,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Tetrafluoroethylene",
        formula:"C₂F₄",
        category:"Organic",
        atoms:[
            ["C",-0.65,0,0],
            ["C",0.65,0,0],
            ["F",-1.3,1,0],
            ["F",-1.3,-1,0],
            ["F",1.3,1,0],
            ["F",1.3,-1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Propane",
        formula:"C₃H₈",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.8,0,1],
            ["H",0,1,1],
            ["H",0,-1,-1],
            ["H",1.8,1,0],
            ["H",1.8,-1,0],
            ["H",1.8,0,-1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5],[1,6],[1,7],[2,8],[2,9],[2,10]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Pentane",
        formula:"C₅H₁₂",
        category:"Organic",
        atoms:[
            ["C",-2.6,0,0],
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["C",2.6,0,0],
            ["H",-3.1,1,0],
            ["H",-3.1,-1,0],
            ["H",-2.6,0,1],
            ["H",-1.3,1,1],
            ["H",-1.3,-1,-1],
            ["H",0,1,1],
            ["H",0,-1,-1],
            ["H",1.3,1,1],
            ["H",1.3,-1,-1],
            ["H",2.6,1,0],
            ["H",2.6,-1,0],
            ["H",2.6,0,-1]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],
            [0,5],[0,6],[0,7],
            [1,8],[1,9],
            [2,10],[2,11],
            [3,12],[3,13],
            [4,14],[4,15],[4,16]
        ],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Hexane",
        formula:"C₆H₁₄",
        category:"Organic",
        atoms:[
            ["C",-3.25,0,0],
            ["C",-1.95,0,0],
            ["C",-0.65,0,0],
            ["C",0.65,0,0],
            ["C",1.95,0,0],
            ["C",3.25,0,0],
            ["H",-3.75,1,0],
            ["H",-3.75,-1,0],
            ["H",-3.25,0,1],
            ["H",-1.95,1,1],
            ["H",-1.95,-1,-1],
            ["H",-0.65,1,1],
            ["H",-0.65,-1,-1],
            ["H",0.65,1,1],
            ["H",0.65,-1,-1],
            ["H",1.95,1,1],
            ["H",1.95,-1,-1],
            ["H",3.25,1,0],
            ["H",3.25,-1,0],
            ["H",3.25,0,-1]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],
            [0,6],[0,7],[0,8],
            [1,9],[1,10],
            [2,11],[2,12],
            [3,13],[3,14],
            [4,15],[4,16],
            [5,17],[5,18],[5,19]
        ],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Cyclopropane",
        formula:"C₃H₆",
        category:"Organic",
        atoms:[
            ["C",1.1,0,0],
            ["C",-0.55,0.95,0],
            ["C",-0.55,-0.95,0],
            ["H",1.8,0.7,0],
            ["H",1.8,-0.7,0],
            ["H",-0.9,1.7,0],
            ["H",-0.1,0.9,1],
            ["H",-0.9,-1.7,0],
            ["H",-0.1,-0.9,-1]
        ],
        bonds:[[0,1],[1,2],[2,0],[0,3],[0,4],[1,5],[1,6],[2,7],[2,8]],
        shape:"Triangular ring",
        domains:3,
        hybridization:"sp³",
        angle:"~60°",
        polarity:"Non-polar"
    },
    
    {
        name:"Cyclobutane",
        formula:"C₄H₈",
        category:"Organic",
        atoms:[
            ["C",1,1,0],
            ["C",-1,1,0],
            ["C",-1,-1,0],
            ["C",1,-1,0],
            ["H",1.7,1.5,0],
            ["H",1.7,0.5,0],
            ["H",-1.7,1.5,0],
            ["H",-1.7,0.5,0],
            ["H",-1.7,-1.5,0],
            ["H",-1.7,-0.5,0],
            ["H",1.7,-1.5,0],
            ["H",1.7,-0.5,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,0],[0,4],[0,5],[1,6],[1,7],[2,8],[2,9],[3,10],[3,11]],
        shape:"Square ring",
        domains:4,
        hybridization:"sp³",
        angle:"~90°",
        polarity:"Non-polar"
    },
    
    {
        name:"Cyclohexane",
        formula:"C₆H₁₂",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["H",2.1,0.8,0],
            ["H",2.1,-0.8,0],
            ["H",1.1,2,0],
            ["H",0.2,2,0],
            ["H",-1.1,2,0],
            ["H",-2.1,0.8,0],
            ["H",-2.1,-0.8,0],
            ["H",-1.1,-2,0],
            ["H",-0.2,-2,0],
            ["H",1.1,-2,0],
            ["H",0,0,1.2],
            ["H",0,0,-1.2]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[0,7],[1,8],[1,9],[2,10],
            [3,11],[3,12],[4,13],[4,14],[5,15],
            [2,16],[5,17]
        ],
        shape:"Chair ring",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Toluene",
        formula:"C₇H₈",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["C",2.6,0,0],
            ["H",3.2,0.9,0],
            ["H",3.2,-0.9,0],
            ["H",2.6,0,1],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[6,8],[6,9],
            [1,10],[2,11],[3,12],[4,13],[5,14]
        ],
        shape:"Aromatic planar ring",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Styrene",
        formula:"C₈H₈",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["C",2.5,0,0],
            ["C",3.7,0,0],
            ["H",4.2,0.9,0],
            ["H",4.2,-0.9,0],
            ["H",3.7,0,1],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[7,8],[7,9],[7,10],
            [1,11],[2,12],[3,13],[4,14],[5,15]
        ],
        shape:"Aromatic conjugated",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Ethylbenzene",
        formula:"C₈H₁₀",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["C",2.5,0,0],
            ["C",3.7,0,0],
            ["H",4.2,0.9,0],
            ["H",4.2,-0.9,0],
            ["H",3.7,0,1],
            ["H",2.5,1,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[7,8],[7,9],[7,10],[6,11],
            [1,12],[2,13],[3,14],[4,15],[5,16]
        ],
        shape:"Aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Acetaldehyde",
        formula:"C₂H₄O",
        category:"Organic",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",1.3,1.1,0],
            ["H",-1.2,0.9,0],
            ["H",-1.2,-0.9,0],
            ["H",-0.7,0,1],
            ["H",1.4,-1,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5],[1,6]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Propanal",
        formula:"C₃H₆O",
        category:"Organic",
        atoms:[
            ["C",-1.4,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["O",1.9,1.1,0],
            ["H",-1.9,0.9,0],
            ["H",-1.9,-0.9,0],
            ["H",-1.4,0,1],
            ["H",0,-1,0],
            ["H",0,1,0],
            ["H",1.9,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8],[2,9]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Butanal",
        formula:"C₄H₈O",
        category:"Organic",
        atoms:[
            ["C",-2,0,0],
            ["C",-0.7,0,0],
            ["C",0.6,0,0],
            ["C",1.9,0,0],
            ["O",2.5,1.1,0],
            ["H",-2.5,0.9,0],
            ["H",-2.5,-0.9,0],
            ["H",-2,0,1],
            ["H",-0.7,1,1],
            ["H",-0.7,-1,-1],
            ["H",0.6,1,1],
            ["H",0.6,-1,-1],
            ["H",1.9,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[0,5],[0,6],[0,7],[1,8],[1,9],[2,10],[2,11],[3,12]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acetophenone",
        formula:"C₈H₈O",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["C",2.5,0,0],
            ["O",3.2,1.1,0],
            ["C",3.7,-1,0],
            ["H",4.3,-1.8,0],
            ["H",4.3,-0.2,0],
            ["H",3.7,-1,1],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[6,8],
            [8,9],[8,10],[8,11],
            [1,12],[2,13],[3,14],[4,15],[5,16]
        ],
        shape:"Aromatic carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acetamide",
        formula:"C₂H₅NO",
        category:"Organic",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",1.3,1.1,0],
            ["N",1.3,-1,0],
            ["H",-1.2,0.9,0],
            ["H",-1.2,-0.9,0],
            ["H",-0.7,0,1],
            ["H",1.9,-1.5,0],
            ["H",1.9,-0.5,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[0,4],[0,5],[0,6],[3,7],[3,8]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Formamide",
        formula:"CH₃NO",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["N",1.3,-0.5,0],
            ["H",-1.1,-0.7,0],
            ["H",1.8,-1,0],
            ["H",1.8,0,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[2,5]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acetic anhydride",
        formula:"C₄H₆O₃",
        category:"Organic",
        atoms:[
            ["C",-1.4,0,0],
            ["O",-1.4,1.2,0],
            ["O",0,0,0],
            ["C",1.4,0,0],
            ["O",1.4,1.2,0],
            ["C",-2.5,-0.8,0],
            ["H",-3.1,-1.5,0],
            ["H",-2.5,-0.1,1],
            ["H",-2.5,-1.5,0],
            ["C",2.5,-0.8,0],
            ["H",3.1,-1.5,0],
            ["H",2.5,-0.1,1],
            ["H",2.5,-1.5,0]
        ],
        bonds:[
            [0,1],[0,2],[0,5],
            [2,3],[3,4],[3,9],
            [5,6],[5,7],[5,8],
            [9,10],[9,11],[9,12]
        ],
        shape:"Trigonal planar carbonyl groups",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Methyl acetate",
        formula:"C₃H₆O₂",
        category:"Organic",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",1.3,1.1,0],
            ["O",1.3,-1,0],
            ["C",2.4,-1,0],
            ["H",-1.2,0.9,0],
            ["H",-1.2,-0.9,0],
            ["H",-0.7,0,1],
            ["H",2.9,-1.8,0],
            ["H",2.9,-0.2,0],
            ["H",2.4,-1,1]
        ],
        bonds:[[0,1],[1,2],[1,3],[3,4],[0,5],[0,6],[0,7],[4,8],[4,9],[4,10]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethyl carbonate",
        formula:"C₃H₆O₃",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["O",-1.3,-0.6,0],
            ["O",1.3,-0.6,0],
            ["C",-2.3,-0.6,0],
            ["C",2.3,-0.6,0],
            ["H",-2.8,-1.4,0],
            ["H",-2.8,0.2,0],
            ["H",-2.3,-0.6,1],
            ["H",2.8,-1.4,0],
            ["H",2.8,0.2,0],
            ["H",2.3,-0.6,1]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[3,5],[4,6],[4,7],[4,8],[5,9],[5,10],[5,11]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Ethyl formate",
        formula:"C₃H₆O₂",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["O",1.3,-0.6,0],
            ["C",2.4,-0.6,0],
            ["C",3.6,-0.6,0],
            ["H",-1.1,-0.7,0],
            ["H",2.9,0.3,0],
            ["H",2.9,-1.5,0],
            ["H",3.6,-0.6,1],
            ["H",4.1,0.3,0],
            ["H",4.1,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,5],[2,3],[3,4],[3,6],[3,7],[3,8],[4,9],[4,10]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethylamine oxide",
        formula:"C₂H₇NO",
        category:"Bases",
        atoms:[
            ["N",0,0,0],
            ["O",0,1.2,0],
            ["C",-1.2,0,0],
            ["C",1.2,0,0],
            ["H",-1.7,0.9,0],
            ["H",-1.7,-0.9,0],
            ["H",-1.2,0,1],
            ["H",1.7,0.9,0],
            ["H",1.7,-0.9,0],
            ["H",1.2,0,-1]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[2,5],[2,6],[3,7],[3,8],[3,9]],
        shape:"Pyramidal around nitrogen",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrazine",
        formula:"N₂H₄",
        category:"Bases",
        atoms:[
            ["N",-0.7,0,0],
            ["N",0.7,0,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",1.3,0.9,0],
            ["H",1.3,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Non-linear",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Azomethane",
        formula:"C₂H₆N₂",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["N",-0.3,0,0],
            ["N",0.3,0,0],
            ["C",1.3,0,0],
            ["H",-1.8,0.9,0],
            ["H",-1.8,-0.9,0],
            ["H",-1.3,0,1],
            ["H",1.8,0.9,0],
            ["H",1.8,-0.9,0],
            ["H",1.3,0,1]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[3,7],[3,8],[3,9]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen dioxide ion",
        formula:"NO₂⁺",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["O",-1.4,0,0],
            ["O",1.4,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydroxide ion",
        formula:"OH⁻",
        category:"Ions",
        atoms:[
            ["O",0,0,0],
            ["H",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydronium ion",
        formula:"H₃O⁺",
        category:"Ions",
        atoms:[
            ["O",0,0,0],
            ["H",1.2,0.8,0],
            ["H",-1.2,0.8,0],
            ["H",0,-0.8,1.2]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~113°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen carbonate",
        formula:"HCO₃⁻",
        category:"Ions",
        atoms:[
            ["C",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0],
            ["O",0,-1.4,0],
            ["H",0,-2.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
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
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Nitride ion",
        formula:"N³⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Oxide ion",
        formula:"O²⁻",
        category:"Ions",
        atoms:[
            ["O",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Sulfide ion",
        formula:"S²⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Phosphide ion",
        formula:"P³⁻",
        category:"Ions",
        atoms:[
            ["P",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Hydride ion",
        formula:"H⁻",
        category:"Ions",
        atoms:[
            ["H",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:4,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen phosphate",
        formula:"HPO₄²⁻",
        category:"Ions",
        atoms:[
            ["P",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5],
            ["H",2.2,-2.2,-2.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[4,5]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Dihydrogen phosphate",
        formula:"H₂PO₄⁻",
        category:"Ions",
        atoms:[
            ["P",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5],
            ["H",2.2,-2.2,-2.2],
            ["H",-2.2,2.2,-2.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[4,5],[3,6]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Thiocyanate ion",
        formula:"SCN⁻",
        category:"Ions",
        atoms:[
            ["S",-1.3,0,0],
            ["C",0,0,0],
            ["N",1.3,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Cyanate ion",
        formula:"OCN⁻",
        category:"Ions",
        atoms:[
            ["O",-1.3,0,0],
            ["C",0,0,0],
            ["N",1.3,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Azide ion",
        formula:"N₃⁻",
        category:"Ions",
        atoms:[
            ["N",-1.3,0,0],
            ["N",0,0,0],
            ["N",1.3,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Acetylide ion",
        formula:"C₂²⁻",
        category:"Ions",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Oxalate",
        formula:"C₂O₄²⁻",
        category:"Ions",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",-1.6,0.9,0],
            ["O",-1.6,-0.9,0],
            ["O",1.6,0.9,0],
            ["O",1.6,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Peroxide ion",
        formula:"O₂²⁻",
        category:"Ions",
        atoms:[
            ["O",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Superoxide ion",
        formula:"O₂⁻",
        category:"Ions",
        atoms:[
            ["O",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:3,
        hybridization:"sp²",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen sulfide",
        formula:"H₂S",
        category:"Acids",
        atoms:[
            ["S",0,0,0],
            ["H",1.5,0.6,0],
            ["H",-1.5,0.6,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"92.1°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen selenide",
        formula:"H₂Se",
        category:"Acids",
        atoms:[
            ["Se",0,0,0],
            ["H",1.5,0.5,0],
            ["H",-1.5,0.5,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~91°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen telluride",
        formula:"H₂Te",
        category:"Acids",
        atoms:[
            ["Te",0,0,0],
            ["H",1.5,0.4,0],
            ["H",-1.5,0.4,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~90°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfuryl fluoride",
        formula:"SO₂F₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["O",1.4,1,0],
            ["O",-1.4,1,0],
            ["F",1.4,-1,0],
            ["F",-1.4,-1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Thionyl chloride",
        formula:"SOCl₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["O",0,1.4,0],
            ["Cl",1.5,-0.5,0],
            ["Cl",-1.5,-0.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfuryl chloride",
        formula:"SO₂Cl₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["O",1.4,1,0],
            ["O",-1.4,1,0],
            ["Cl",1.4,-1,0],
            ["Cl",-1.4,-1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphoryl chloride",
        formula:"POCl₃",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["O",0,1.4,0],
            ["Cl",1.4,-0.7,0],
            ["Cl",-1.4,-0.7,0],
            ["Cl",0,-0.7,1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphorus pentachloride",
        formula:"PCl₅",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["Cl",1.6,0,0],
            ["Cl",-1.6,0,0],
            ["Cl",0,1.6,0],
            ["Cl",0,-0.8,1.4],
            ["Cl",0,-0.8,-1.4]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Trigonal bipyramidal",
        domains:5,
        hybridization:"sp³d",
        angle:"90°, 120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Phosphorus trifluoride",
        formula:"PF₃",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["F",1.4,0.8,0],
            ["F",-1.4,0.8,0],
            ["F",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~97°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphorus tribromide",
        formula:"PBr₃",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["Br",1.7,0.8,0],
            ["Br",-1.7,0.8,0],
            ["Br",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~101°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphorus triiodide",
        formula:"PI₃",
        category:"Inorganic",
        atoms:[
            ["P",0,0,0],
            ["I",1.8,0.8,0],
            ["I",-1.8,0.8,0],
            ["I",0,-1.6,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~102°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur tetrafluoride",
        formula:"SF₄",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Seesaw",
        domains:5,
        hybridization:"sp³d",
        angle:"90°, 120°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur dichloride",
        formula:"SCl₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["Cl",1.6,0.9,0],
            ["Cl",-1.6,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"103°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur dibromide",
        formula:"SBr₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["Br",1.7,0.8,0],
            ["Br",-1.7,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~100°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur difluoride",
        formula:"SF₂",
        category:"Inorganic",
        atoms:[
            ["S",0,0,0],
            ["F",1.3,0.8,0],
            ["F",-1.3,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~98°",
        polarity:"Polar"
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
        name:"Selenium hexafluoride",
        formula:"SeF₆",
        category:"Inorganic",
        atoms:[
            ["Se",0,0,0],
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
        name:"Tellurium hexafluoride",
        formula:"TeF₆",
        category:"Inorganic",
        atoms:[
            ["Te",0,0,0],
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
        name:"Chlorine pentafluoride",
        formula:"ClF₅",
        category:"Inorganic",
        atoms:[
            ["Cl",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Square pyramidal",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Bromine pentafluoride",
        formula:"BrF₅",
        category:"Inorganic",
        atoms:[
            ["Br",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Square pyramidal",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Bromine trifluoride",
        formula:"BrF₃",
        category:"Inorganic",
        atoms:[
            ["Br",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"T-shaped",
        domains:5,
        hybridization:"sp³d",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Iodine trifluoride",
        formula:"IF₃",
        category:"Inorganic",
        atoms:[
            ["I",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"T-shaped",
        domains:5,
        hybridization:"sp³d",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Iodine heptafluoride",
        formula:"IF₇",
        category:"Inorganic",
        atoms:[
            ["I",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5],
            ["F",0,0,-1.5],
            ["F",1.1,1.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]],
        shape:"Pentagonal bipyramidal",
        domains:7,
        hybridization:"sp³d³",
        angle:"72°, 90°",
        polarity:"Non-polar"
    },
    
    {
        name:"Xenon difluoride",
        formula:"XeF₂",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["F",-1.8,0,0],
            ["F",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:5,
        hybridization:"sp³d",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Xenon tetrafluoride",
        formula:"XeF₄",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Square planar",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Non-polar"
    },
    
    {
        name:"Xenon hexafluoride",
        formula:"XeF₆",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5],
            ["F",0,0,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]],
        shape:"Distorted octahedral",
        domains:7,
        hybridization:"sp³d³",
        angle:"~90°",
        polarity:"Polar"
    },
    
    {
        name:"Xenon oxytetrafluoride",
        formula:"XeOF₄",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["O",0,1.5,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,-1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[0,5]],
        shape:"Square pyramidal",
        domains:6,
        hybridization:"sp³d²",
        angle:"90°",
        polarity:"Polar"
    },
    
    {
        name:"Xenon trioxide",
        formula:"XeO₃",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0],
            ["O",0,-1.4,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~103°",
        polarity:"Polar"
    },
    
    {
        name:"Xenon dioxide",
        formula:"XeO₂",
        category:"Inorganic",
        atoms:[
            ["Xe",0,0,0],
            ["O",1.3,0.8,0],
            ["O",-1.3,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~100°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen trifluoride",
        formula:"NF₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["F",1.5,0.8,0],
            ["F",-1.5,0.8,0],
            ["F",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"102.5°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen trichloride",
        formula:"NCl₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["Cl",1.7,0.8,0],
            ["Cl",-1.7,0.8,0],
            ["Cl",0,-1.6,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen tribromide",
        formula:"NBr₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["Br",1.8,0.8,0],
            ["Br",-1.8,0.8,0],
            ["Br",0,-1.7,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen triiodide",
        formula:"NI₃",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["I",1.9,0.8,0],
            ["I",-1.9,0.8,0],
            ["I",0,-1.7,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrosyl chloride",
        formula:"NOCl",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["O",1.3,0.8,0],
            ["Cl",-1.4,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~113°",
        polarity:"Polar"
    },
    
    {
        name:"Nitryl fluoride",
        formula:"NO₂F",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["O",1.4,0.9,0],
            ["O",-1.4,0.9,0],
            ["F",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Nitryl chloride",
        formula:"NO₂Cl",
        category:"Inorganic",
        atoms:[
            ["N",0,0,0],
            ["O",1.4,0.9,0],
            ["O",-1.4,0.9,0],
            ["Cl",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrous acid",
        formula:"HNO₂",
        category:"Acids",
        atoms:[
            ["H",-1.8,0,0],
            ["O",-0.8,0,0],
            ["N",0.3,0,0],
            ["O",1.5,0.8,0]
        ],
        bonds:[[0,1],[1,2],[2,3]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~115°",
        polarity:"Polar"
    },
    
    {
        name:"Nitric acid",
        formula:"HNO₃",
        category:"Acids",
        atoms:[
            ["H",-1.8,0,0],
            ["O",-0.8,0,0],
            ["N",0.3,0,0],
            ["O",1.4,0.9,0],
            ["O",0.9,-1.1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[2,4]],
        shape:"Trigonal planar around N",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrofluoric acid",
        formula:"HF",
        category:"Acids",
        atoms:[
            ["H",-0.7,0,0],
            ["F",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrobromic acid",
        formula:"HBr",
        category:"Acids",
        atoms:[
            ["H",-0.75,0,0],
            ["Br",0.75,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydroiodic acid",
        formula:"HI",
        category:"Acids",
        atoms:[
            ["H",-0.8,0,0],
            ["I",0.8,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrochloric acid",
        formula:"HCl",
        category:"Acids",
        atoms:[
            ["H",-0.75,0,0],
            ["Cl",0.75,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Perchloric acid",
        formula:"HClO₄",
        category:"Acids",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5],
            ["H",2.2,-2.2,-2.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[4,5]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Chlorous acid",
        formula:"HClO₂",
        category:"Acids",
        atoms:[
            ["H",-1.8,0,0],
            ["O",-0.8,0,0],
            ["Cl",0.3,0,0],
            ["O",1.5,0.8,0]
        ],
        bonds:[[0,1],[1,2],[2,3]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Hypochlorous acid",
        formula:"HClO",
        category:"Acids",
        atoms:[
            ["H",-1.4,0,0],
            ["O",-0.4,0,0],
            ["Cl",0.8,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~103°",
        polarity:"Polar"
    },
    
    {
        name:"Bromic acid",
        formula:"HBrO₃",
        category:"Acids",
        atoms:[
            ["Br",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0],
            ["O",0,-1.4,0],
            ["H",0,-2.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Iodic acid",
        formula:"HIO₃",
        category:"Acids",
        atoms:[
            ["I",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0],
            ["O",0,-1.4,0],
            ["H",0,-2.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Boric acid",
        formula:"H₃BO₃",
        category:"Acids",
        atoms:[
            ["B",0,0,0],
            ["O",1.3,0,0],
            ["O",-0.65,1.13,0],
            ["O",-0.65,-1.13,0],
            ["H",2,0.6,0],
            ["H",-1.3,1.7,0],
            ["H",-1.3,-1.7,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[2,5],[3,6]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Carbonic acid",
        formula:"H₂CO₃",
        category:"Acids",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["O",1.3,-0.6,0],
            ["O",-1.3,-0.6,0],
            ["H",1.8,-1.2,0],
            ["H",-1.8,-1.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[3,5]],
        shape:"Trigonal planar around C",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen azide",
        formula:"HN₃",
        category:"Acids",
        atoms:[
            ["H",-1.5,0,0],
            ["N",-0.5,0,0],
            ["N",0.5,0,0],
            ["N",1.5,0,0]
        ],
        bonds:[[0,1],[1,2],[2,3]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Methyl alcohol",
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
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Propanol",
        formula:"C₃H₈O",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["O",2.1,0.8,0],
            ["H",2.8,0.8,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.3,0,1],
            ["H",0,1,1],
            ["H",0,-1,-1],
            ["H",1.3,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[0,5],[0,6],[0,7],[1,8],[1,9],[2,10]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Butanol",
        formula:"C₄H₁₀O",
        category:"Organic",
        atoms:[
            ["C",-1.9,0,0],
            ["C",-0.6,0,0],
            ["C",0.7,0,0],
            ["C",2,0,0],
            ["O",2.8,0.8,0],
            ["H",3.5,0.8,0],
            ["H",-2.4,1,0],
            ["H",-2.4,-1,0],
            ["H",-1.9,0,1],
            ["H",-0.6,1,1],
            ["H",-0.6,-1,-1],
            ["H",0.7,1,1],
            ["H",0.7,-1,-1],
            ["H",2,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[0,7],[0,8],[1,9],[1,10],[2,11],[2,12],[3,13]],
        shape:"Tetrahedral around carbon",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Diethyl ether",
        formula:"C₄H₁₀O",
        category:"Organic",
        atoms:[
            ["C",-2,0,0],
            ["C",-0.8,0,0],
            ["O",0.4,0,0],
            ["C",1.6,0,0],
            ["C",2.8,0,0],
            ["H",-2.5,1,0],
            ["H",-2.5,-1,0],
            ["H",-2,0,1],
            ["H",-0.8,1,1],
            ["H",-0.8,-1,-1],
            ["H",1.6,1,1],
            ["H",1.6,-1,-1],
            ["H",2.8,1,0],
            ["H",2.8,-1,0],
            ["H",2.8,0,1]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[0,5],[0,6],[0,7],[1,8],[1,9],[3,10],[3,11],[4,12],[4,13],[4,14]],
        shape:"Bent around oxygen",
        domains:4,
        hybridization:"sp³",
        angle:"~112°",
        polarity:"Polar"
    },
    
    {
        name:"Ethylamine",
        formula:"C₂H₇N",
        category:"Bases",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.7,0,0],
            ["N",1.6,0,0],
            ["H",2.3,0.8,0],
            ["H",2.3,-0.8,0],
            ["H",1.6,0,1],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1],
            ["H",0.7,-0.9,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[2,4],[2,5],[0,6],[0,7],[0,8],[1,9]],
        shape:"Trigonal pyramidal around N",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Propylamine",
        formula:"C₃H₉N",
        category:"Bases",
        atoms:[
            ["C",-1.4,0,0],
            ["C",-0.1,0,0],
            ["C",1.2,0,0],
            ["N",2.1,0,0],
            ["H",2.8,0.8,0],
            ["H",2.8,-0.8,0],
            ["H",2.1,0,1],
            ["H",-1.9,1,0],
            ["H",-1.9,-1,0],
            ["H",-1.4,0,1],
            ["H",-0.1,1,1],
            ["H",-0.1,-1,-1],
            ["H",1.2,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[3,5],[3,6],[0,7],[0,8],[0,9],[1,10],[1,11],[2,12]],
        shape:"Trigonal pyramidal around N",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Polar"
    },
    
    {
        name:"Pyrrole",
        formula:"C₄H₅N",
        category:"Organic",
        atoms:[
            ["N",0,1,0],
            ["C",1.1,0.5,0],
            ["C",0.7,-0.8,0],
            ["C",-0.7,-0.8,0],
            ["C",-1.1,0.5,0],
            ["H",0,2,0],
            ["H",2,0.8,0],
            ["H",1.2,-1.7,0],
            ["H",-1.2,-1.7,0],
            ["H",-2,0.8,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[1,6],[2,7],[3,8],[4,9]],
        shape:"Planar aromatic five-membered ring",
        domains:3,
        hybridization:"sp²",
        angle:"108°",
        polarity:"Polar"
    },
    
    {
        name:"Furan",
        formula:"C₄H₄O",
        category:"Organic",
        atoms:[
            ["O",0,1,0],
            ["C",1.1,0.5,0],
            ["C",0.7,-0.8,0],
            ["C",-0.7,-0.8,0],
            ["C",-1.1,0.5,0],
            ["H",2,0.8,0],
            ["H",1.2,-1.7,0],
            ["H",-1.2,-1.7,0],
            ["H",-2,0.8,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,0],[1,5],[2,6],[3,7],[4,8]],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"108°",
        polarity:"Polar"
    },
    
    {
        name:"Thiophene",
        formula:"C₄H₄S",
        category:"Organic",
        atoms:[
            ["S",0,1,0],
            ["C",1.1,0.5,0],
            ["C",0.7,-0.8,0],
            ["C",-0.7,-0.8,0],
            ["C",-1.1,0.5,0],
            ["H",2,0.8,0],
            ["H",1.2,-1.7,0],
            ["H",-1.2,-1.7,0],
            ["H",-2,0.8,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,0],[1,5],[2,6],[3,7],[4,8]],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"108°",
        polarity:"Polar"
    },
    
    {
        name:"Pyridine",
        formula:"C₅H₅N",
        category:"Organic",
        atoms:[
            ["N",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [1,6],[2,7],[3,8],[4,9],[5,10]
        ],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Pyrimidine",
        formula:"C₄H₄N₂",
        category:"Organic",
        atoms:[
            ["N",1.4,0,0],
            ["C",0.7,1.21,0],
            ["N",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [1,6],[3,7],[4,8],[5,9]
        ],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Imidazole",
        formula:"C₃H₄N₂",
        category:"Organic",
        atoms:[
            ["N",0,1,0],
            ["C",1.1,0.5,0],
            ["N",0.7,-0.8,0],
            ["C",-0.7,-0.8,0],
            ["C",-1.1,0.5,0],
            ["H",2,0.8,0],
            ["H",1.2,-1.7,0],
            ["H",-1.2,-1.7,0],
            ["H",-2,0.8,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,0],[1,5],[2,6],[3,7],[4,8]],
        shape:"Planar aromatic ring",
        domains:3,
        hybridization:"sp²",
        angle:"108°",
        polarity:"Polar"
    },
    
    {
        name:"Naphthalene",
        formula:"C₁₀H₈",
        category:"Organic",
        atoms:[
            ["C",-2.1,0.7,0],
            ["C",-1.4,1.9,0],
            ["C",0,1.9,0],
            ["C",0.7,0.7,0],
            ["C",0,-0.7,0],
            ["C",-1.4,-0.7,0],
            ["C",-2.1,-1.9,0],
            ["C",-0.7,-2.5,0],
            ["C",0.7,-1.9,0],
            ["C",1.4,-0.7,0],
            ["H",-2.7,0.7,0],
            ["H",-1.9,2.7,0],
            ["H",0.2,2.7,0],
            ["H",1.5,0.7,0],
            ["H",-2.7,-2.3,0],
            ["H",-0.8,-3.3,0],
            ["H",1.3,-2.5,0],
            ["H",2.2,-0.7,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [5,6],[6,7],[7,8],[8,9],[9,4],
            [0,10],[1,11],[2,12],[3,13],[6,14],[7,15],[8,16],[9,17]
        ],
        shape:"Fused planar aromatic rings",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Acetylene",
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
        name:"Allene",
        formula:"C₃H₄",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",1.8,0,1],
            ["H",1.8,0,-1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[2,5],[2,6]],
        shape:"Linear central carbon",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"1-Butene",
        formula:"C₄H₈",
        category:"Organic",
        atoms:[
            ["C",-1.8,0,0],
            ["C",-0.5,0,0],
            ["C",0.8,0,0],
            ["C",2.1,0,0],
            ["H",-2.3,1,0],
            ["H",-2.3,-1,0],
            ["H",-1.8,0,1],
            ["H",-0.5,1,0],
            ["H",-0.5,-1,0],
            ["H",0.8,1,1],
            ["H",0.8,-1,-1],
            ["H",2.1,1,0],
            ["H",2.1,-1,0],
            ["H",2.1,0,1]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8],[2,9],[2,10],[3,11],[3,12],[3,13]],
        shape:"Trigonal planar around double bond",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"1-Butyne",
        formula:"C₄H₆",
        category:"Organic",
        atoms:[
            ["C",-1.8,0,0],
            ["C",-0.5,0,0],
            ["C",0.8,0,0],
            ["C",2.1,0,0],
            ["H",-2.5,0,0],
            ["H",2.6,1,0],
            ["H",2.6,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[3,5],[3,6]],
        shape:"Linear around triple bond",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"2-Butyne",
        formula:"C₄H₆",
        category:"Organic",
        atoms:[
            ["C",-1.5,0,0],
            ["C",-0.5,0,0],
            ["C",0.5,0,0],
            ["C",1.5,0,0],
            ["H",-2.1,0,0],
            ["H",2.1,0,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[3,5]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Isobutane",
        formula:"C₄H₁₀",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["C",-1.3,0.8,0],
            ["C",-1.3,-0.8,0],
            ["C",1.3,0,0],
            ["H",0,0,1.2],
            ["H",-1.8,1.5,0],
            ["H",-1.8,0.2,0],
            ["H",-1.3,0.8,1],
            ["H",-1.8,-1.5,0],
            ["H",-1.8,-0.2,0],
            ["H",-1.3,-0.8,-1],
            ["H",1.8,0.9,0],
            ["H",1.8,-0.9,0],
            ["H",1.3,0,1]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[1,7],[2,8],[2,9],[2,10],[3,11],[3,12],[3,13]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Isopentane",
        formula:"C₅H₁₂",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["C",-1.3,0.8,0],
            ["C",-1.3,-0.8,0],
            ["C",1.3,0,0],
            ["C",2.6,0,0],
            ["H",0,0,1.2],
            ["H",-1.8,1.5,0],
            ["H",-1.8,0.2,0],
            ["H",-1.3,0.8,1],
            ["H",-1.8,-1.5,0],
            ["H",-1.8,-0.2,0],
            ["H",-1.3,-0.8,-1],
            ["H",1.8,0.9,0],
            ["H",1.8,-0.9,0],
            ["H",2.6,0,1],
            ["H",3.2,0.9,0],
            ["H",3.2,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,6],[1,7],[1,8],[2,9],[2,10],[2,11],[3,4],[0,5],[3,12],[3,13],[4,14],[4,15],[4,16]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Non-polar"
    },
    
    {
        name:"Acrolein",
        formula:"C₃H₄O",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["O",1.9,1.1,0],
            ["H",-1.8,0.9,0],
            ["H",-1.8,-0.9,0],
            ["H",-1.3,0,1],
            ["H",0,1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7]],
        shape:"Planar conjugated",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acrylic acid",
        formula:"C₃H₄O₂",
        category:"Acids",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["O",1.9,1.1,0],
            ["O",1.9,-1.1,0],
            ["H",2.7,-1.5,0],
            ["H",-1.8,0.9,0],
            ["H",-1.8,-0.9,0],
            ["H",-1.3,0,1]
        ],
        bonds:[[0,1],[1,2],[2,3],[2,4],[4,5],[0,6],[0,7],[0,8]],
        shape:"Planar around carboxyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Propionic acid",
        formula:"C₃H₆O₂",
        category:"Acids",
        atoms:[
            ["C",-1.4,0,0],
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["O",1.9,1.1,0],
            ["O",1.9,-1.1,0],
            ["H",2.7,-1.5,0],
            ["H",-1.9,0.9,0],
            ["H",-1.9,-0.9,0],
            ["H",-1.4,0,1],
            ["H",0,1,0],
            ["H",0,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[2,4],[4,5],[0,6],[0,7],[0,8],[1,9],[1,10]],
        shape:"Planar around carboxyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Oxalic acid",
        formula:"H₂C₂O₄",
        category:"Acids",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",-1.4,1.1,0],
            ["O",-1.4,-1.1,0],
            ["O",1.4,1.1,0],
            ["O",1.4,-1.1,0],
            ["H",-2.1,-1.6,0],
            ["H",2.1,-1.6,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5],[3,6],[5,7]],
        shape:"Planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Benzoic acid",
        formula:"C₇H₆O₂",
        category:"Acids",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["C",2.5,0,0],
            ["O",3.2,1.1,0],
            ["O",3.2,-1,0],
            ["H",4,-1.5,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[6,8],[8,9],
            [1,10],[2,11],[3,12],[4,13],[5,14]
        ],
        shape:"Aromatic carboxylic acid",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Salicylic acid",
        formula:"C₇H₆O₃",
        category:"Acids",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["O",2.4,0,0],
            ["H",3.1,0.7,0],
            ["C",2.5,1.2,0],
            ["O",3.2,2.3,0],
            ["O",3.2,0.2,0],
            ["H",4,0,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[1,8],[8,9],[8,10],[10,11],
            [2,12],[3,13],[4,14],[5,15]
        ],
        shape:"Aromatic carboxylic acid",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Glucose",
        formula:"C₆H₁₂O₆",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["C",2.6,0,0],
            ["C",3.9,0,0],
            ["C",5.2,0,0],
            ["C",6.5,0,0],
            ["O",7.3,0.8,0],
            ["O",1.3,1.1,0],
            ["O",2.6,1.1,0],
            ["O",3.9,1.1,0],
            ["O",5.2,1.1,0],
            ["O",6.5,-1.1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[1,7],[2,8],[3,9],[4,10],[5,11]],
        shape:"Polyhydroxy chain",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Fructose",
        formula:"C₆H₁₂O₆",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["C",1.3,0,0],
            ["C",2.6,0,0],
            ["C",3.9,0,0],
            ["C",5.2,0,0],
            ["C",6.5,0,0],
            ["O",1.3,1.1,0],
            ["O",2.6,1.1,0],
            ["O",3.9,1.1,0],
            ["O",5.2,1.1,0],
            ["O",6.5,1.1,0],
            ["O",-0.8,0,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[0,11],[1,6],[2,7],[3,8],[4,9],[5,10]],
        shape:"Polyhydroxy chain",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Urea",
        formula:"CH₄N₂O",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["N",1.3,-0.7,0],
            ["N",-1.3,-0.7,0],
            ["H",1.8,-1.4,0],
            ["H",1.8,0,0],
            ["H",-1.8,-1.4,0],
            ["H",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[3,7]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Nitromethane",
        formula:"CH₃NO₂",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["N",0.6,0,0],
            ["O",1.5,0.9,0],
            ["O",1.5,-0.9,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[[0,1],[1,2],[1,3],[0,4],[0,5],[0,6]],
        shape:"Trigonal planar around N",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Ethyl nitrite",
        formula:"C₂H₅NO₂",
        category:"Organic",
        atoms:[
            ["C",-1.3,0,0],
            ["C",0,0,0],
            ["O",1,0,0],
            ["N",1.8,0,0],
            ["O",2.6,0.8,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.3,0,1],
            ["H",0,1,0],
            ["H",0,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[3,4],[0,5],[0,6],[0,7],[1,8],[1,9]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethylformamide",
        formula:"C₃H₇NO",
        category:"Organic",
        atoms:[
            ["C",0,0,0],
            ["O",0,1.3,0],
            ["N",1.3,-0.5,0],
            ["C",2.4,-0.5,0],
            ["C",1.3,-1.8,0],
            ["H",-1.1,-0.7,0],
            ["H",2.9,0.3,0],
            ["H",2.9,-1.3,0],
            ["H",2.4,-0.5,1],
            ["H",1.3,-2.8,0],
            ["H",0.5,-1.8,0],
            ["H",1.3,-1.8,1]
        ],
        bonds:[[0,1],[0,2],[0,5],[2,3],[2,4],[3,6],[3,7],[3,8],[4,9],[4,10],[4,11]],
        shape:"Trigonal planar around carbonyl",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Acetonitrile",
        formula:"C₂H₃N",
        category:"Organic",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.5,0,0],
            ["N",1.7,0,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5]],
        shape:"Linear around nitrile group",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Propionitrile",
        formula:"C₃H₅N",
        category:"Organic",
        atoms:[
            ["C",-1.4,0,0],
            ["C",-0.1,0,0],
            ["C",1.2,0,0],
            ["N",2.4,0,0],
            ["H",-1.9,0.9,0],
            ["H",-1.9,-0.9,0],
            ["H",-1.4,0,1],
            ["H",-0.1,1,0],
            ["H",-0.1,-1,0]
        ],
        bonds:[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[1,8]],
        shape:"Linear around nitrile",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Benzonitrile",
        formula:"C₇H₅N",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["C",2.5,0,0],
            ["N",3.7,0,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[1,8],[2,9],[3,10],[4,11],[5,12]
        ],
        shape:"Aromatic nitrile",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Aniline",
        formula:"C₆H₇N",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["N",2.4,0,0],
            ["H",3.1,0.8,0],
            ["H",3.1,-0.8,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[6,8],[1,9],[2,10],[3,11],[4,12],[5,13]
        ],
        shape:"Trigonal planar aromatic system",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Phenylamine",
        formula:"C₆H₇N",
        category:"Organic",
        atoms:[
            ["C",1.4,0,0],
            ["C",0.7,1.21,0],
            ["C",-0.7,1.21,0],
            ["C",-1.4,0,0],
            ["C",-0.7,-1.21,0],
            ["C",0.7,-1.21,0],
            ["N",2.4,0,0],
            ["H",3.1,0.8,0],
            ["H",3.1,-0.8,0],
            ["H",1.2,2.08,0],
            ["H",-1.2,2.08,0],
            ["H",-2.4,0,0],
            ["H",-1.2,-2.08,0],
            ["H",1.2,-2.08,0]
        ],
        bonds:[
            [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
            [0,6],[6,7],[6,8],[1,9],[2,10],[3,11],[4,12],[5,13]
        ],
        shape:"Trigonal planar aromatic system",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethyl sulfide",
        formula:"C₂H₆S",
        category:"Organic",
        atoms:[
            ["C",-1,0,0],
            ["S",0,0,0],
            ["C",1,0,0],
            ["H",-1.5,1,0],
            ["H",-1.5,-1,0],
            ["H",-1,0,1],
            ["H",1.5,1,0],
            ["H",1.5,-1,0],
            ["H",1,0,-1]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4],[0,5],[2,6],[2,7],[2,8]],
        shape:"Bent around sulfur",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethyl sulfoxide",
        formula:"C₂H₆OS",
        category:"Organic",
        atoms:[
            ["S",0,0,0],
            ["O",0,1.4,0],
            ["C",-1.3,0,0],
            ["C",1.3,0,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.3,0,1],
            ["H",1.8,1,0],
            ["H",1.8,-1,0],
            ["H",1.3,0,-1]
        ],
        bonds:[[0,1],[0,2],[0,3],[2,4],[2,5],[2,6],[3,7],[3,8],[3,9]],
        shape:"Pyramidal around sulfur",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Dimethyl sulfone",
        formula:"C₂H₆O₂S",
        category:"Organic",
        atoms:[
            ["S",0,0,0],
            ["O",0,1.4,0],
            ["O",0,-1.4,0],
            ["C",-1.3,0,0],
            ["C",1.3,0,0],
            ["H",-1.8,1,0],
            ["H",-1.8,-1,0],
            ["H",-1.3,0,1],
            ["H",1.8,1,0],
            ["H",1.8,-1,0],
            ["H",1.3,0,-1]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[3,5],[3,6],[3,7],[4,8],[4,9],[4,10]],
        shape:"Tetrahedral around sulfur",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Carbonyl sulfide",
        formula:"COS",
        category:"Inorganic",
        atoms:[
            ["O",-1.2,0,0],
            ["C",0,0,0],
            ["S",1.6,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Carbon diselenide",
        formula:"CSe₂",
        category:"Inorganic",
        atoms:[
            ["C",0,0,0],
            ["Se",1.8,0,0],
            ["Se",-1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Non-polar"
    },
    
    {
        name:"Selenium dioxide",
        formula:"SeO₂",
        category:"Inorganic",
        atoms:[
            ["Se",0,0,0],
            ["O",1.5,0.9,0],
            ["O",-1.5,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Selenium trioxide",
        formula:"SeO₃",
        category:"Inorganic",
        atoms:[
            ["Se",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Selenium tetrafluoride",
        formula:"SeF₄",
        category:"Inorganic",
        atoms:[
            ["Se",0,0,0],
            ["F",1.5,0,0],
            ["F",-1.5,0,0],
            ["F",0,1.5,0],
            ["F",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Seesaw",
        domains:5,
        hybridization:"sp³d",
        angle:"90°, 120°",
        polarity:"Polar"
    },
    
    {
        name:"Tellurium dioxide",
        formula:"TeO₂",
        category:"Inorganic",
        atoms:[
            ["Te",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~105°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen peroxide ion",
        formula:"HO₂⁻",
        category:"Ions",
        atoms:[
            ["H",-1.3,0,0],
            ["O",-0.3,0,0],
            ["O",0.9,0.5,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~104°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen sulfide ion",
        formula:"HS⁻",
        category:"Ions",
        atoms:[
            ["H",-0.7,0,0],
            ["S",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Bisulfide ion",
        formula:"HS⁻",
        category:"Ions",
        atoms:[
            ["H",-0.7,0,0],
            ["S",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Hydrogen telluride ion",
        formula:"HTe⁻",
        category:"Ions",
        atoms:[
            ["H",-0.7,0,0],
            ["Te",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:4,
        hybridization:"sp³",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Sulfate ion",
        formula:"SO₄²⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Sulfite ion",
        formula:"SO₃²⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Ionic"
    },
    
    {
        name:"Thiosulfate ion",
        formula:"S₂O₃²⁻",
        category:"Ions",
        atoms:[
            ["S",0,0,0],
            ["S",1.6,0,0],
            ["O",-1.2,1.1,0],
            ["O",-1.2,-1.1,0],
            ["O",0,0,1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral around central sulfur",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Thiocyanate",
        formula:"SCN⁻",
        category:"Ions",
        atoms:[
            ["S",-1.3,0,0],
            ["C",0,0,0],
            ["N",1.3,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Chromate ion",
        formula:"CrO₄²⁻",
        category:"Ions",
        atoms:[
            ["Cr",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Dichromate ion",
        formula:"Cr₂O₇²⁻",
        category:"Ions",
        atoms:[
            ["Cr",-0.8,0,0],
            ["Cr",0.8,0,0],
            ["O",0,1.2,0],
            ["O",-1.6,1.2,0],
            ["O",-1.6,-1.2,0],
            ["O",1.6,1.2,0],
            ["O",1.6,-1.2,0],
            ["O",0,0,1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,2],[1,5],[1,6],[0,7]],
        shape:"Tetrahedral around Cr",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Permanganate ion",
        formula:"MnO₄⁻",
        category:"Ions",
        atoms:[
            ["Mn",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Manganate ion",
        formula:"MnO₄²⁻",
        category:"Ions",
        atoms:[
            ["Mn",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Aluminate ion",
        formula:"AlO₂⁻",
        category:"Ions",
        atoms:[
            ["Al",-0.8,0,0],
            ["O",0.8,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Metaborate ion",
        formula:"BO₂⁻",
        category:"Ions",
        atoms:[
            ["B",0,0,0],
            ["O",1.3,0,0],
            ["O",-1.3,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Borate ion",
        formula:"BO₃³⁻",
        category:"Ions",
        atoms:[
            ["B",0,0,0],
            ["O",1.4,0,0],
            ["O",-0.7,1.2,0],
            ["O",-0.7,-1.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Bicarbonate ion",
        formula:"HCO₃⁻",
        category:"Ions",
        atoms:[
            ["C",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[3,4]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Acetate ion",
        formula:"C₂H₃O₂⁻",
        category:"Ions",
        atoms:[
            ["C",-0.8,0,0],
            ["C",0.7,0,0],
            ["O",1.5,1,0],
            ["O",1.5,-1,0],
            ["H",-1.3,0.9,0],
            ["H",-1.3,-0.9,0],
            ["H",-0.8,0,1]
        ],
        bonds:[[0,1],[1,2],[1,3],[0,4],[0,5],[0,6]],
        shape:"Trigonal planar around carboxyl carbon",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Formate ion",
        formula:"HCO₂⁻",
        category:"Ions",
        atoms:[
            ["C",0,0,0],
            ["O",1.3,0.8,0],
            ["O",-1.3,0.8,0],
            ["H",0,-1.1,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Oxalate ion",
        formula:"C₂O₄²⁻",
        category:"Ions",
        atoms:[
            ["C",-0.7,0,0],
            ["C",0.7,0,0],
            ["O",-1.6,0.9,0],
            ["O",-1.6,-0.9,0],
            ["O",1.6,0.9,0],
            ["O",1.6,-0.9,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Nitrate ion",
        formula:"NO₃⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Nitrite ion",
        formula:"NO₂⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["O",1.4,0.9,0],
            ["O",-1.4,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~115°",
        polarity:"Ionic"
    },
    
    {
        name:"Chlorate ion",
        formula:"ClO₃⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Chlorite ion",
        formula:"ClO₂⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.4,0.8,0],
            ["O",-1.4,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Hypochlorite ion",
        formula:"ClO⁻",
        category:"Ions",
        atoms:[
            ["Cl",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Bromate ion",
        formula:"BrO₃⁻",
        category:"Ions",
        atoms:[
            ["Br",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Iodate ion",
        formula:"IO₃⁻",
        category:"Ions",
        atoms:[
            ["I",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Ionic"
    },
    
    {
        name:"Perchlorate ion",
        formula:"ClO₄⁻",
        category:"Ions",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Permanganate",
        formula:"MnO₄⁻",
        category:"Ions",
        atoms:[
            ["Mn",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Tetrahedral",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Dichromate",
        formula:"Cr₂O₇²⁻",
        category:"Ions",
        atoms:[
            ["Cr",-0.8,0,0],
            ["Cr",0.8,0,0],
            ["O",0,1.2,0],
            ["O",-1.6,1.2,0],
            ["O",-1.6,-1.2,0],
            ["O",1.6,1.2,0],
            ["O",1.6,-1.2,0],
            ["O",0,0,1.6]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,2],[1,5],[1,6],[0,7]],
        shape:"Tetrahedral around Cr",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Amide ion",
        formula:"NH₂⁻",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["H",1,0.8,0],
            ["H",-1,0.8,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~104°",
        polarity:"Ionic"
    },
    
    {
        name:"Cyanide ion",
        formula:"CN⁻",
        category:"Ions",
        atoms:[
            ["C",-0.6,0,0],
            ["N",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Oxonium ion",
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
    },
    
    {
        name:"Lithium hydride",
        formula:"LiH",
        category:"Ions",
        atoms:[
            ["Li",-1,0,0],
            ["H",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium hydride",
        formula:"NaH",
        category:"Ions",
        atoms:[
            ["Na",-1,0,0],
            ["H",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium hydride",
        formula:"CaH₂",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0],
            ["H",-1.5,0,0],
            ["H",1.5,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Magnesium hydride",
        formula:"MgH₂",
        category:"Ions",
        atoms:[
            ["Mg",0,0,0],
            ["H",-1.4,0,0],
            ["H",1.4,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Barium chloride",
        formula:"BaCl₂",
        category:"Ions",
        atoms:[
            ["Ba",0,0,0],
            ["Cl",-2,0,0],
            ["Cl",2,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Strontium chloride",
        formula:"SrCl₂",
        category:"Ions",
        atoms:[
            ["Sr",0,0,0],
            ["Cl",-2,0,0],
            ["Cl",2,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Barium fluoride",
        formula:"BaF₂",
        category:"Ions",
        atoms:[
            ["Ba",0,0,0],
            ["F",-1.8,0,0],
            ["F",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Strontium fluoride",
        formula:"SrF₂",
        category:"Ions",
        atoms:[
            ["Sr",0,0,0],
            ["F",-1.8,0,0],
            ["F",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Silver ion",
        formula:"Ag⁺",
        category:"Ions",
        atoms:[
            ["Ag",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Copper(I) ion",
        formula:"Cu⁺",
        category:"Ions",
        atoms:[
            ["Cu",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Copper(II) ion",
        formula:"Cu²⁺",
        category:"Ions",
        atoms:[
            ["Cu",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Zinc ion",
        formula:"Zn²⁺",
        category:"Ions",
        atoms:[
            ["Zn",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Iron(II) ion",
        formula:"Fe²⁺",
        category:"Ions",
        atoms:[
            ["Fe",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Iron(III) ion",
        formula:"Fe³⁺",
        category:"Ions",
        atoms:[
            ["Fe",0,0,0]
        ],
        bonds:[],
        shape:"Atomic ion",
        domains:0,
        hybridization:"—",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Silver chloride",
        formula:"AgCl",
        category:"Ions",
        atoms:[
            ["Ag",-1,0,0],
            ["Cl",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Copper(I) chloride",
        formula:"CuCl",
        category:"Ions",
        atoms:[
            ["Cu",-1,0,0],
            ["Cl",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Copper(II) chloride",
        formula:"CuCl₂",
        category:"Ions",
        atoms:[
            ["Cu",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Zinc chloride",
        formula:"ZnCl₂",
        category:"Ions",
        atoms:[
            ["Zn",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Iron(II) chloride",
        formula:"FeCl₂",
        category:"Ions",
        atoms:[
            ["Fe",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Iron(III) chloride",
        formula:"FeCl₃",
        category:"Inorganic",
        atoms:[
            ["Fe",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Copper sulfate",
        formula:"CuSO₄",
        category:"Ions",
        atoms:[
            ["Cu",0,0,0],
            ["S",2,0,0],
            ["O",3,1,0],
            ["O",3,-1,0],
            ["O",1.5,0,1.2],
            ["O",1.5,0,-1.2]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium nitrate",
        formula:"NaNO₃",
        category:"Ions",
        atoms:[
            ["Na",0,0,0],
            ["N",2,0,0],
            ["O",3.4,0,0],
            ["O",1.3,1.2,0],
            ["O",1.3,-1.2,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4]],
        shape:"Trigonal planar nitrate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium nitrate",
        formula:"KNO₃",
        category:"Ions",
        atoms:[
            ["K",0,0,0],
            ["N",2,0,0],
            ["O",3.4,0,0],
            ["O",1.3,1.2,0],
            ["O",1.3,-1.2,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4]],
        shape:"Trigonal planar nitrate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium carbonate",
        formula:"CaCO₃",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0],
            ["C",2,0,0],
            ["O",3.4,0,0],
            ["O",1.3,1.2,0],
            ["O",1.3,-1.2,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4]],
        shape:"Trigonal planar carbonate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium carbonate",
        formula:"Na₂CO₃",
        category:"Ions",
        atoms:[
            ["Na",-2,0,0],
            ["Na",2,0,0],
            ["C",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,2],[1,2],[2,3],[2,4],[2,5]],
        shape:"Trigonal planar carbonate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium carbonate",
        formula:"K₂CO₃",
        category:"Ions",
        atoms:[
            ["K",-2,0,0],
            ["K",2,0,0],
            ["C",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,2],[1,2],[2,3],[2,4],[2,5]],
        shape:"Trigonal planar carbonate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium sulfate",
        formula:"Na₂SO₄",
        category:"Ions",
        atoms:[
            ["Na",-2.5,0,0],
            ["Na",2.5,0,0],
            ["S",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,2],[1,2],[2,3],[2,4],[2,5],[2,6]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium sulfate",
        formula:"K₂SO₄",
        category:"Ions",
        atoms:[
            ["K",-2.5,0,0],
            ["K",2.5,0,0],
            ["S",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,2],[1,2],[2,3],[2,4],[2,5],[2,6]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Ammonium nitrate",
        formula:"NH₄NO₃",
        category:"Ions",
        atoms:[
            ["N",0,0,0],
            ["H",1,1,1],
            ["H",-1,-1,1],
            ["H",-1,1,-1],
            ["H",1,-1,-1],
            ["N",3,0,0],
            ["O",4.3,0,0],
            ["O",2.35,1.2,0],
            ["O",2.35,-1.2,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[5,6],[5,7],[5,8]],
        shape:"Ionic + tetrahedral ammonium",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Ammonium sulfate",
        formula:"(NH₄)₂SO₄",
        category:"Ions",
        atoms:[
            ["N",-3,0,0],
            ["N",3,0,0],
            ["S",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[2,3],[2,4],[2,5],[2,6]],
        shape:"Ionic + tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Ammonium carbonate",
        formula:"(NH₄)₂CO₃",
        category:"Ions",
        atoms:[
            ["N",-3,0,0],
            ["N",3,0,0],
            ["C",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[2,3],[2,4],[2,5]],
        shape:"Ionic + trigonal planar carbonate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium sulfate",
        formula:"CaSO₄",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0],
            ["S",2.2,0,0],
            ["O",3.7,1.2,1.2],
            ["O",3.7,-1.2,1.2],
            ["O",1.2,1.2,-1.2],
            ["O",1.2,-1.2,-1.2]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Magnesium sulfate",
        formula:"MgSO₄",
        category:"Ions",
        atoms:[
            ["Mg",0,0,0],
            ["S",2.2,0,0],
            ["O",3.7,1.2,1.2],
            ["O",3.7,-1.2,1.2],
            ["O",1.2,1.2,-1.2],
            ["O",1.2,-1.2,-1.2]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium bicarbonate",
        formula:"NaHCO₃",
        category:"Ions",
        atoms:[
            ["Na",3,0,0],
            ["C",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[4,5]],
        shape:"Trigonal planar bicarbonate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium bicarbonate",
        formula:"KHCO₃",
        category:"Ions",
        atoms:[
            ["K",3,0,0],
            ["C",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0],
            ["H",0,-2.2,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[4,5]],
        shape:"Trigonal planar bicarbonate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium hydroxide",
        formula:"Ca(OH)₂",
        category:"Ions",
        atoms:[
            ["Ca",0,0,0],
            ["O",-1.5,0,0],
            ["H",-2.2,0.8,0],
            ["O",1.5,0,0],
            ["H",2.2,0.8,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[3,4]],
        shape:"Ionic + hydroxide groups",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Magnesium hydroxide",
        formula:"Mg(OH)₂",
        category:"Ions",
        atoms:[
            ["Mg",0,0,0],
            ["O",-1.5,0,0],
            ["H",-2.2,0.8,0],
            ["O",1.5,0,0],
            ["H",2.2,0.8,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[3,4]],
        shape:"Ionic + hydroxide groups",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Aluminium hydroxide",
        formula:"Al(OH)₃",
        category:"Ions",
        atoms:[
            ["Al",0,0,0],
            ["O",1.4,0,0],
            ["O",-0.7,1.2,0],
            ["O",-0.7,-1.2,0],
            ["H",2.1,0.7,0],
            ["H",-1.4,1.8,0],
            ["H",-1.4,-1.8,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[2,5],[3,6]],
        shape:"Trigonal planar hydroxide arrangement",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium peroxide",
        formula:"Na₂O₂",
        category:"Ions",
        atoms:[
            ["Na",-2,0,0],
            ["Na",2,0,0],
            ["O",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[2,3]],
        shape:"Peroxide unit",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium peroxide",
        formula:"K₂O₂",
        category:"Ions",
        atoms:[
            ["K",-2,0,0],
            ["K",2,0,0],
            ["O",-0.7,0,0],
            ["O",0.7,0,0]
        ],
        bonds:[[2,3]],
        shape:"Peroxide unit",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Barium peroxide",
        formula:"BaO₂",
        category:"Ions",
        atoms:[
            ["Ba",0,0,0],
            ["O",-1,0,0],
            ["O",1,0,0]
        ],
        bonds:[[1,2]],
        shape:"Peroxide unit",
        domains:4,
        hybridization:"sp³",
        angle:"—",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium cyanide",
        formula:"NaCN",
        category:"Ions",
        atoms:[
            ["Na",-2,0,0],
            ["C",-0.7,0,0],
            ["N",0.7,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear cyanide",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium cyanide",
        formula:"KCN",
        category:"Ions",
        atoms:[
            ["K",-2,0,0],
            ["C",-0.7,0,0],
            ["N",0.7,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear cyanide",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Silver nitrate",
        formula:"AgNO₃",
        category:"Ions",
        atoms:[
            ["Ag",3,0,0],
            ["N",0,0,0],
            ["O",1.5,0,0],
            ["O",-0.75,1.3,0],
            ["O",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4]],
        shape:"Trigonal planar nitrate",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Silver oxide",
        formula:"Ag₂O",
        category:"Ions",
        atoms:[
            ["Ag",-1.2,0,0],
            ["O",0,0,0],
            ["Ag",1.2,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Zinc oxide",
        formula:"ZnO",
        category:"Ions",
        atoms:[
            ["Zn",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Iron(II) oxide",
        formula:"FeO",
        category:"Ions",
        atoms:[
            ["Fe",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Iron(III) oxide",
        formula:"Fe₂O₃",
        category:"Ions",
        atoms:[
            ["Fe",-1.2,0.6,0],
            ["Fe",1.2,0.6,0],
            ["O",-1.2,-0.9,0],
            ["O",0,-0.9,0],
            ["O",1.2,-0.9,0]
        ],
        bonds:[[0,2],[0,3],[1,3],[1,4]],
        shape:"Extended ionic network",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Copper(I) oxide",
        formula:"Cu₂O",
        category:"Ions",
        atoms:[
            ["Cu",-1.2,0,0],
            ["O",0,0,0],
            ["Cu",1.2,0,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Copper(II) oxide",
        formula:"CuO",
        category:"Ions",
        atoms:[
            ["Cu",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Manganese dioxide",
        formula:"MnO₂",
        category:"Inorganic",
        atoms:[
            ["Mn",0,0,0],
            ["O",-1.5,0,0],
            ["O",1.5,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Chromium(III) oxide",
        formula:"Cr₂O₃",
        category:"Inorganic",
        atoms:[
            ["Cr",-1,0.6,0],
            ["Cr",1,0.6,0],
            ["O",-1.4,-0.8,0],
            ["O",0,-0.8,0],
            ["O",1.4,-0.8,0]
        ],
        bonds:[[0,2],[0,3],[1,3],[1,4]],
        shape:"Extended network",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Titanium dioxide",
        formula:"TiO₂",
        category:"Inorganic",
        atoms:[
            ["Ti",0,0,0],
            ["O",-1.5,0,0],
            ["O",1.5,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear model",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Vanadium pentoxide",
        formula:"V₂O₅",
        category:"Inorganic",
        atoms:[
            ["V",-0.9,0,0],
            ["V",0.9,0,0],
            ["O",-1.8,1,0],
            ["O",-1.8,-1,0],
            ["O",0,1.4,0],
            ["O",1.8,1,0],
            ["O",1.8,-1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,4],[1,5],[1,6]],
        shape:"Extended network",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Polar"
    },
    
    {
        name:"Dinitrogen tetroxide",
        formula:"N₂O₄",
        category:"Inorganic",
        atoms:[
            ["N",-0.8,0,0],
            ["N",0.8,0,0],
            ["O",-1.5,1,0],
            ["O",-1.5,-1,0],
            ["O",1.5,1,0],
            ["O",1.5,-1,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Nitrogen pentoxide",
        formula:"N₂O₅",
        category:"Inorganic",
        atoms:[
            ["N",-1.1,0,0],
            ["N",1.1,0,0],
            ["O",-2.2,0.8,0],
            ["O",-2.2,-0.8,0],
            ["O",0,0,0],
            ["O",2.2,0.8,0],
            ["O",2.2,-0.8,0]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4],[1,4],[1,5],[1,6]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Dinitrogen trioxide",
        formula:"N₂O₃",
        category:"Inorganic",
        atoms:[
            ["N",-1.2,0,0],
            ["N",0,0,0],
            ["O",1.3,0.8,0],
            ["O",-2.1,1.1,0],
            ["O",-1.5,-0.9,0]
        ],
        bonds:[[0,1],[1,2],[0,3],[0,4]],
        shape:"Non-linear",
        domains:3,
        hybridization:"sp²",
        angle:"~120°",
        polarity:"Polar"
    },
    
    {
        name:"Nitrogen dioxide",
        formula:"NO₂",
        category:"Gases",
        atoms:[
            ["N",0,0,0],
            ["O",1.5,0.9,0],
            ["O",-1.5,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~134°",
        polarity:"Polar"
    },
    
    {
        name:"Nitric oxide",
        formula:"NO",
        category:"Gases",
        atoms:[
            ["N",-0.6,0,0],
            ["O",0.6,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"sp",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Sulfur monoxide",
        formula:"SO",
        category:"Gases",
        atoms:[
            ["S",-0.7,0,0],
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
        name:"Chlorine dioxide",
        formula:"ClO₂",
        category:"Gases",
        atoms:[
            ["Cl",0,0,0],
            ["O",1.3,0.9,0],
            ["O",-1.3,0.9,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Bent",
        domains:3,
        hybridization:"sp²",
        angle:"~117°",
        polarity:"Polar"
    },
    
    {
        name:"Dichlorine dioxide",
        formula:"Cl₂O₂",
        category:"Inorganic",
        atoms:[
            ["Cl",-1.4,0,0],
            ["O",-0.5,0.5,0],
            ["O",0.5,-0.5,0],
            ["Cl",1.4,0,0]
        ],
        bonds:[[0,1],[1,2],[2,3]],
        shape:"Non-linear",
        domains:4,
        hybridization:"sp³",
        angle:"~110°",
        polarity:"Polar"
    },
    
    {
        name:"Dibromine monoxide",
        formula:"Br₂O",
        category:"Inorganic",
        atoms:[
            ["Br",-1.5,0.8,0],
            ["O",0,0,0],
            ["Br",1.5,0.8,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~110°",
        polarity:"Polar"
    },
    
    {
        name:"Diiodine monoxide",
        formula:"I₂O",
        category:"Inorganic",
        atoms:[
            ["I",-1.6,0.8,0],
            ["O",0,0,0],
            ["I",1.6,0.8,0]
        ],
        bonds:[[0,1],[1,2]],
        shape:"Bent",
        domains:4,
        hybridization:"sp³",
        angle:"~110°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen bromide",
        formula:"HBr",
        category:"Acids",
        atoms:[
            ["H",-0.75,0,0],
            ["Br",0.75,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Hydrogen iodide",
        formula:"HI",
        category:"Acids",
        atoms:[
            ["H",-0.8,0,0],
            ["I",0.8,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Polar"
    },
    
    {
        name:"Phosphine",
        formula:"PH₃",
        category:"Bases",
        atoms:[
            ["P",0,0.5,0],
            ["H",1.4,-0.5,0],
            ["H",-1.4,-0.5,0],
            ["H",0,-0.5,1.4]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"93.5°",
        polarity:"Polar"
    },
    
    {
        name:"Arsine",
        formula:"AsH₃",
        category:"Inorganic",
        atoms:[
            ["As",0,0.5,0],
            ["H",1.4,-0.5,0],
            ["H",-1.4,-0.5,0],
            ["H",0,-0.5,1.4]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~92°",
        polarity:"Polar"
    },
    
    {
        name:"Stibine",
        formula:"SbH₃",
        category:"Inorganic",
        atoms:[
            ["Sb",0,0.5,0],
            ["H",1.4,-0.5,0],
            ["H",-1.4,-0.5,0],
            ["H",0,-0.5,1.4]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~91°",
        polarity:"Polar"
    },
    
    {
        name:"Arsine oxide",
        formula:"AsH₃O",
        category:"Inorganic",
        atoms:[
            ["As",0,0,0],
            ["O",0,1.4,0],
            ["H",1.2,-0.7,0],
            ["H",-1.2,-0.7,0],
            ["H",0,-0.7,1.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[0,4]],
        shape:"Trigonal pyramidal",
        domains:4,
        hybridization:"sp³",
        angle:"~109°",
        polarity:"Polar"
    },
    
    {
        name:"Diborane",
        formula:"B₂H₆",
        category:"Inorganic",
        atoms:[
            ["B",-0.9,0,0],
            ["B",0.9,0,0],
            ["H",-1.6,1,0],
            ["H",-1.6,-1,0],
            ["H",1.6,1,0],
            ["H",1.6,-1,0],
            ["H",0,0,1.2],
            ["H",0,0,-1.2]
        ],
        bonds:[[0,1],[0,2],[0,3],[1,4],[1,5],[0,6],[1,6],[0,7],[1,7]],
        shape:"Bridged",
        domains:4,
        hybridization:"sp³",
        angle:"~120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron trifluoride",
        formula:"BF₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["F",1.5,0,0],
            ["F",-0.75,1.3,0],
            ["F",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron trichloride",
        formula:"BCl₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron tribromide",
        formula:"BBr₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["Br",1.8,0,0],
            ["Br",-0.9,1.56,0],
            ["Br",-0.9,-1.56,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Boron triiodide",
        formula:"BI₃",
        category:"Inorganic",
        atoms:[
            ["B",0,0,0],
            ["I",1.9,0,0],
            ["I",-0.95,1.65,0],
            ["I",-0.95,-1.65,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Non-polar"
    },
    
    {
        name:"Aluminium fluoride",
        formula:"AlF₃",
        category:"Inorganic",
        atoms:[
            ["Al",0,0,0],
            ["F",1.5,0,0],
            ["F",-0.75,1.3,0],
            ["F",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Aluminium chloride",
        formula:"AlCl₃",
        category:"Inorganic",
        atoms:[
            ["Al",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Aluminium bromide",
        formula:"AlBr₃",
        category:"Inorganic",
        atoms:[
            ["Al",0,0,0],
            ["Br",1.8,0,0],
            ["Br",-0.9,1.56,0],
            ["Br",-0.9,-1.56,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Gallium chloride",
        formula:"GaCl₃",
        category:"Inorganic",
        atoms:[
            ["Ga",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Gallium fluoride",
        formula:"GaF₃",
        category:"Inorganic",
        atoms:[
            ["Ga",0,0,0],
            ["F",1.5,0,0],
            ["F",-0.75,1.3,0],
            ["F",-0.75,-1.3,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Indium chloride",
        formula:"InCl₃",
        category:"Inorganic",
        atoms:[
            ["In",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Polar"
    },
    
    {
        name:"Thallium chloride",
        formula:"TlCl",
        category:"Ions",
        atoms:[
            ["Tl",-1,0,0],
            ["Cl",1,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Mercury(I) chloride",
        formula:"Hg₂Cl₂",
        category:"Ions",
        atoms:[
            ["Hg",-1.2,0,0],
            ["Hg",1.2,0,0],
            ["Cl",-2.4,0,0],
            ["Cl",2.4,0,0]
        ],
        bonds:[[0,1],[0,2],[1,3]],
        shape:"Linear Hg₂ unit",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Mercury(II) chloride",
        formula:"HgCl₂",
        category:"Ions",
        atoms:[
            ["Hg",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Cadmium chloride",
        formula:"CdCl₂",
        category:"Ions",
        atoms:[
            ["Cd",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear model",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Nickel(II) chloride",
        formula:"NiCl₂",
        category:"Ions",
        atoms:[
            ["Ni",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear model",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Cobalt(II) chloride",
        formula:"CoCl₂",
        category:"Ions",
        atoms:[
            ["Co",0,0,0],
            ["Cl",-1.8,0,0],
            ["Cl",1.8,0,0]
        ],
        bonds:[[0,1],[0,2]],
        shape:"Linear model",
        domains:2,
        hybridization:"sp",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Cobalt(III) chloride",
        formula:"CoCl₃",
        category:"Ions",
        atoms:[
            ["Co",0,0,0],
            ["Cl",1.7,0,0],
            ["Cl",-0.85,1.47,0],
            ["Cl",-0.85,-1.47,0]
        ],
        bonds:[[0,1],[0,2],[0,3]],
        shape:"Trigonal planar model",
        domains:3,
        hybridization:"sp²",
        angle:"120°",
        polarity:"Ionic"
    },
    
    {
        name:"Nickel(II) oxide",
        formula:"NiO",
        category:"Ions",
        atoms:[
            ["Ni",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear model",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Cobalt(II) oxide",
        formula:"CoO",
        category:"Ions",
        atoms:[
            ["Co",-0.9,0,0],
            ["O",0.9,0,0]
        ],
        bonds:[[0,1]],
        shape:"Linear model",
        domains:1,
        hybridization:"—",
        angle:"180°",
        polarity:"Ionic"
    },
    
    {
        name:"Nickel(II) sulfate",
        formula:"NiSO₄",
        category:"Ions",
        atoms:[
            ["Ni",0,0,0],
            ["S",2.2,0,0],
            ["O",3.7,1.2,1.2],
            ["O",3.7,-1.2,1.2],
            ["O",1.2,1.2,-1.2],
            ["O",1.2,-1.2,-1.2]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Cobalt(II) sulfate",
        formula:"CoSO₄",
        category:"Ions",
        atoms:[
            ["Co",0,0,0],
            ["S",2.2,0,0],
            ["O",3.7,1.2,1.2],
            ["O",3.7,-1.2,1.2],
            ["O",1.2,1.2,-1.2],
            ["O",1.2,-1.2,-1.2]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral sulfate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium permanganate",
        formula:"KMnO₄",
        category:"Ions",
        atoms:[
            ["K",3,0,0],
            ["Mn",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral permanganate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium permanganate",
        formula:"NaMnO₄",
        category:"Ions",
        atoms:[
            ["Na",3,0,0],
            ["Mn",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,1],[1,2],[1,3],[1,4],[1,5]],
        shape:"Tetrahedral permanganate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium dichromate",
        formula:"K₂Cr₂O₇",
        category:"Ions",
        atoms:[
            ["K",-3,0,0],
            ["K",3,0,0],
            ["Cr",-0.8,0,0],
            ["Cr",0.8,0,0],
            ["O",0,1.2,0],
            ["O",-1.6,1.2,0],
            ["O",-1.6,-1.2,0],
            ["O",1.6,1.2,0],
            ["O",1.6,-1.2,0],
            ["O",0,0,1.6]
        ],
        bonds:[[2,3],[2,4],[2,5],[2,6],[3,4],[3,7],[3,8],[2,9]],
        shape:"Dichromate ion",
        domains:4,
        hybridization:"sp³",
        angle:"~109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium sulfite",
        formula:"Na₂SO₃",
        category:"Ions",
        atoms:[
            ["Na",-2.5,0,0],
            ["Na",2.5,0,0],
            ["S",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,2],[1,2],[2,3],[2,4],[2,5]],
        shape:"Trigonal pyramidal sulfite",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium sulfite",
        formula:"K₂SO₃",
        category:"Ions",
        atoms:[
            ["K",-2.5,0,0],
            ["K",2.5,0,0],
            ["S",0,0,0],
            ["O",1.5,0.8,0],
            ["O",-1.5,0.8,0],
            ["O",0,-1.5,0]
        ],
        bonds:[[0,2],[1,2],[2,3],[2,4],[2,5]],
        shape:"Trigonal pyramidal sulfite",
        domains:4,
        hybridization:"sp³",
        angle:"~107°",
        polarity:"Ionic"
    },
    
    {
        name:"Sodium phosphate",
        formula:"Na₃PO₄",
        category:"Ions",
        atoms:[
            ["Na",-3,0,0],
            ["Na",3,0,0],
            ["Na",0,3,0],
            ["P",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,3],[1,3],[2,3],[3,4],[3,5],[3,6],[3,7]],
        shape:"Tetrahedral phosphate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Potassium phosphate",
        formula:"K₃PO₄",
        category:"Ions",
        atoms:[
            ["K",-3,0,0],
            ["K",3,0,0],
            ["K",0,3,0],
            ["P",0,0,0],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[0,3],[1,3],[2,3],[3,4],[3,5],[3,6],[3,7]],
        shape:"Tetrahedral phosphate",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
        polarity:"Ionic"
    },
    
    {
        name:"Calcium phosphate",
        formula:"Ca₃(PO₄)₂",
        category:"Ions",
        atoms:[
            ["Ca",-3,0,0],
            ["Ca",0,3,0],
            ["Ca",3,0,0],
            ["P",0,0,0],
            ["P",0,0,3],
            ["O",1.5,1.5,1.5],
            ["O",-1.5,-1.5,1.5],
            ["O",-1.5,1.5,-1.5],
            ["O",1.5,-1.5,-1.5]
        ],
        bonds:[[3,5],[3,6],[3,7],[3,8],[4,5],[4,6],[4,7],[4,8]],
        shape:"Tetrahedral phosphate groups",
        domains:4,
        hybridization:"sp³",
        angle:"109.5°",
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
    
   
    
    
    /* ============================================================
       CREATE VISUAL FALLBACK STRUCTURES
    ============================================================ */
    
   
    
    
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
