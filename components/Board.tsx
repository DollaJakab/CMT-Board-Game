"use client";
import { useStore } from "@/lib/store";
import Cell from "./Cell";

const Board = () => {
  const board = useStore((state) => state.board);

  return (
    <div className="flex flex-col gap-5">
      {board.map((row: Array<string>, i: number) => (
        <div key={i} className="flex gap-5 items-center justify-center">
          {row.map((cell: string, j: number) => (
            <Cell key={j} value={cell} i={i} j={j} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
