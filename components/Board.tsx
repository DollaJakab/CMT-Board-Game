"use client";
import { useStore } from "@/lib/store";
import Cell from "./Cell";
import { CellProps } from "@/lib/types";

const Board = () => {
  const board = useStore((state) => state.board);
  const lines = useStore((state) => state.lines);
  const resetBoard = useStore((state) => state.resetBoard);
  const filledCells = useStore((state) => state.filledCells);
  return (
    <div className="flex flex-col gap-1">
      {board.map((row: Array<CellProps>, i: number) => (
        <div key={i} className="flex gap-1 items-center justify-center w-full">
          {row.map((cell: CellProps, j: number) => (
            <Cell key={j} cell={cell} i={i} j={j} />
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
