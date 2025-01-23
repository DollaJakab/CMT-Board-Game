"use client";
import { useStore } from "@/lib/store";
import Cell from "./Cell";
import { CellProps } from "@/lib/types";
import ActionsTab from "./ActionsTab";

const Board = () => {
  const board = useStore((state) => state.board);
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full gap-5">
      <div className="h-full w-full max-w-[80svw] md:max-w-[70svw] lg:max-w-[50svw] xl:max-w-[40svw] flex flex-col gap-1 items-center justify-center">
        {board.map((row: Array<CellProps>, i: number) => (
          <div
            key={`row-${i}`}
            className="flex gap-1 items-center justify-center w-full h-auto"
          >
            {row.map((cell: CellProps, j: number) => (
              <Cell key={`col-${j}`} cell={cell} row={i} col={j} />
            ))}
          </div>
        ))}
      </div>
      <ActionsTab />
    </div>
  );
};

export default Board;
