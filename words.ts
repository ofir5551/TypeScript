function allCombinations(mat: string[][], row: number, col: number): void {
    console.log(`mat[${row}][${col}]`);

    if(col<mat.length-1)
        allCombinations(mat,row,col+1);

    else if(row<mat.length-1)
        allCombinations(mat,row+1,0);
    
}

let mat: string[][] = [
    ["A", "B", "C", "D"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"]
];

allCombinations(mat, 0, 0);

/*
let mat: string[][] = [
    ["C", "A", "R", "T"],
    ["E", "T", "A", "K"],
    ["E", "S", "M", "E"],
    ["L", "L", "P", "N"]
];
*/
