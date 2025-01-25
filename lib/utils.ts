"use client"

import { CellProps } from "./types";

export const linesCalculator = (board: CellProps[][]) => {
    const rows = board.length;
    const cols = board[0].length;
    const results: number[][][] = [];
    const processedSequences: Set<string> = new Set();

    function collectSequence(startRow: number, startCol: number, dRow: number, dCol: number): number[][] {
        const sequence: number[][] = [];
        const letter = board[startRow][startCol].value;

        let row = startRow;
        let col = startCol;

        while (row >= 0 && row < rows && col >= 0 && col < cols && board[row][col].value === letter) {
            sequence.push([row, col]);
            row += dRow;
            col += dCol;
        }

        return sequence.length >= 3 ? sequence : [];
    }

    function sequenceKey(sequence: number[][]): string {
        return sequence.map(([r, c]) => `${r}-${c}`).join(",");
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const letter = board[i][j].value;
            if (!letter) continue;
            const directions = [
                [0, 1],
                [1, 0],
                [1, 1],
                [1, -1]
            ];

            for (const [dRow, dCol] of directions) {
                const sequence = collectSequence(i, j, dRow, dCol);
                const key = sequenceKey(sequence);
                

                if (sequence.length >= 3 && !processedSequences.has(key)) {
                    results.push(sequence);
                    processedSequences.add(key);
                }
            }
        }
    }

    const filteredResults = results.filter(sequence => {
        const key = sequenceKey(sequence);
        return !Array.from(processedSequences).some(processedKey => 
            processedKey.includes(key) && processedKey !== key
        );
    });
    console.log('filteredResults', filteredResults);
    return filteredResults;
}

// export const linesCalculator = (board: CellProps[][]) => {
//     const lines = []

//     const countHorizontalLines = () => {
//         const linesHorizontal = [];
//         board.forEach((row, rowIndex) => {
//             let currentLetter = row[0].value;
//             let length = 0;
//             row.forEach((cell, colIndex) => {
//                 if (cell.value === currentLetter && cell.value) {
//                     length++;
//                 } else {
//                     if (length >= 3) {
//                         linesHorizontal.push(new Array(length).fill(0).map((_, i) => [rowIndex, colIndex - i - 1]));
//                     }
//                     length = 0;
//                     currentLetter = cell.value;
//                 }
//                 if (length >= 3 && colIndex === row.length - 1) {
//                     linesHorizontal.push(new Array(length).fill(0).map((_, i) => [rowIndex, row.length - i - 1]));
//                 }
//             });
//         });
//         return linesHorizontal;
//     }

//     const countVerticalLines = () => {
//         const linesVertical = [];
//         for (let colIndex = 0; colIndex < board[0].length; colIndex++) {
//             let currentLetter = board[0][colIndex].value;
//             let length = 0;
//             for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
//                 const cell = board[rowIndex][colIndex];
//                 if (cell.value === currentLetter && cell.value) {
//                     length++;
//                 } else {
//                     if (length >= 3) {
//                         linesVertical.push(new Array(length).fill(0).map((_, i) => [rowIndex - i - 1, colIndex]));
//                     }
//                     length = 0;
//                     currentLetter = cell.value;
//                 }
//                 if (length >= 3 && rowIndex === board.length - 1) {
//                     linesVertical.push(new Array(length).fill(0).map((_, i) => [rowIndex - i, colIndex]));
//                 }
//             }
//         }
//         return linesVertical;
//     }

//     const horizontalLines = countHorizontalLines();
//     const verticalLines = countVerticalLines();

//     lines.push(...horizontalLines);
//     lines.push(...verticalLines);

//     console.log('lines', lines);
//     return lines;
// }
