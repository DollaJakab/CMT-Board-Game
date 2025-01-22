import { create } from 'zustand'
import { Store } from './types'



export const useStore = create<Store>((set) => ({
    board: new Array(5).fill(null).map(() => new Array(5).fill({color: 'black', value: ''})),
    currentLetter: "C",
    updateCurrentLetter: (currentLetter) => set({ currentLetter }),
    updateBoard: (i, j, currentLetter) => set((state) => {
        const newBoard = [...state.board];
         newBoard[i][j] = {...newBoard[i][j], value: currentLetter};
        return { ...state, board: newBoard };
    }),
    updateBoardColors: (i,j) => set((state) => { 
        const newBoard = [...state.board];
        let color = 'black'
        if (newBoard[i][j].value === "C") {
            color = 'green'
        }else if (newBoard[i][j].value === "M") {
            color = 'blue'
        }else if (newBoard[i][j].value === "T") {
            color = 'red'
        }
        newBoard[i][j] = {...newBoard[i][j], color: color};
        return { ...state, board: newBoard }; 
    }),
}))