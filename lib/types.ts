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
    updateCurrentLetter: (currentLetter: string) => void,
    updateBoard: (i: number, j: number, currentLetter: string) => void
    updateBoardColors: (i: number, j: number) => void,
    lines: number,
    updateLines: (lines: number) => void,
    resetBoard: () => void
}