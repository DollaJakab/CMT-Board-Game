import { create } from 'zustand'
import { Store } from './types'



export const useStore = create<Store>((set) => ({
    board: new Array(5).fill(new Array(5).fill("")),
    currentLetter: "C",
    updateCurrentLetter: (currentLetter) => set({ currentLetter }),
    updateBoard: (board) => set({ board }),
}))