export enum CellTypes {
  "C",
  "M",
  "D",
}

export interface Store {
    board: string[][],
    currentLetter: string,
    updateCurrentLetter: (currentLetter: string) => void,
    updateBoard: (board: string[][]) => void
}