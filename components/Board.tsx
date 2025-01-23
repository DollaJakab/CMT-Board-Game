"use client";
import { useStore } from "@/lib/store";
import Cell from "./Cell";
import { CellProps, CellTypes } from "@/lib/types";
import { linesCalculator } from "@/lib/utils";

const Board = () => {
  //store values
  const board = useStore((state) => state.board);
  const lines = useStore((state) => state.lines);
  const filledCells = useStore((state) => state.filledCells);
  const currentLetter = useStore((state) => state.currentLetter);
  const currentLetterIndex = Object.keys(CellTypes).indexOf(currentLetter);

  //update functions
  const updateBoard = useStore((state) => state.updateBoard);
  const updateCurrentLetter = useStore((state) => state.updateCurrentLetter);
  const updateLines = useStore((state) => state.updateLines);
  const updateFilledCells = useStore((state) => state.updateFilledCells);
  const updateBoardColors = useStore((state) => state.updateBoardColors);

  const setCellValue = (row: number, col: number) => {
    updateBoard(row, col, currentLetter);
    updateCurrentLetter(CellTypes[(currentLetterIndex + 1) % 3]);
    const lines = linesCalculator(board);
    updateLines(lines.length);
    lines.forEach((line) => {
      line.forEach(([row, col]) => {
        updateBoardColors(row, col);
      });
    });
    updateFilledCells();
  };

  const resetBoard = useStore((state) => state.resetBoard);
  return (
    <div className="flex flex-col gap-1">
      {board.map((row: Array<CellProps>, i: number) => (
        <div
          key={`row-${i}`}
          className="flex gap-1 items-center justify-center w-full"
        >
          {row.map((cell: CellProps, j: number) => (
            <Cell
              key={`col-${j}`}
              cell={cell}
              row={i}
              col={j}
              setCellValue={setCellValue}
            />
          ))}
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <p className="font-black pt-5">
          {lines > 0 && filledCells === 25
            ? `Congratulations you have ${lines} lines!`
            : filledCells === 25 && "You have no lines, try again."}
        </p>
        <button
          className="p-5 px-8 bg-gray-200 dark:bg-[#181818] hover:bg-red rounded-xl transition-all ease-in"
          onClick={resetBoard}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Board;
