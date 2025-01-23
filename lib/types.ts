export enum CellTypes {
  "C",
  "M",
  "T",
}

export interface CellProps {
    color: string;
    value: string;
}

export interface Store {
    board: CellProps[][],
    currentLetter: string,
    lines: number,
    filledCells: number
    updateCurrentLetter: (currentLetter: string) => void,
    updateBoard: (i: number, j: number, currentLetter: string) => void
    updateBoardColors: (i: number, j: number) => void,
    updateLines: (lines: number) => void,
    resetBoard: () => void,
    updateFilledCells: () => void
}