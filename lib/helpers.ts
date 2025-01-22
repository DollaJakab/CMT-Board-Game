import { CellProps } from "./types";

export const linesCalculator = (board:CellProps[][]) => {
        const rows = board.length;
        const cols = board[0].length;
        const lines: number[][][] = [];
    
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
    
            return sequence.length > 1 ? sequence : [];
        }
    
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const letter = board[i][j].value;
                if (letter === "") continue; 
    
                const directions = [
                    [0, 1],   
                    [1, 0],   
                    [1, 1],   
                    [1, -1]   
                ];
    
                for (const [dRow, dCol] of directions) {
                    const sequence = collectSequence(i, j, dRow, dCol);
                    if (sequence.length > 2) {
                        lines.push(sequence);
                    }
                }
            }
        }

        return lines
}
