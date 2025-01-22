"use client";
import { useStore } from "@/lib/store";
import Cell from "./Cell";
import { CellProps } from "@/lib/types";

const Board = () => {
  const board = useStore((state) => state.board);
  const lines = useStore((state) => state.lines);
  const resetBoard = useStore((state) => state.resetBoard);
  return (
    <div className="flex flex-col gap-3">
      {board.map((row: Array<CellProps>, i: number) => (
        <div key={i} className="flex gap-3 items-center justify-center w-full">
          {row.map((cell: CellProps, j: number) => (
            <Cell key={j} cell={cell} i={i} j={j} />
          ))}
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <p className="font-black pt-5">{`Completed lines: ${lines}`}</p>
        <button
          className="p-5 px-8 bg-[#181818] hover:bg-red rounded-xl transition-all ease-in"
          onClick={resetBoard}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Board;
