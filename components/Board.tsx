"use client";
import { useStore } from "@/lib/store";
import Cell from "./Cell";
import { CellProps } from "@/lib/types";
import ActionsTab from "./ActionsTab";

const Board = () => {
  const board = useStore((state) => state.board);
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex flex-col gap-1 w-full h-full">
        {board.map((row: Array<CellProps>, i: number) => (
          <div
            key={`row-${i}`}
            className="flex gap-1 items-center justify-center w-full"
          >
            {row.map((cell: CellProps, j: number) => (
              <Cell key={`col-${j}`} cell={cell} row={i} col={j} />
            ))}
          </div>
        ))}
        <ActionsTab />
      </div>
    </div>
  );
};

export default Board;
