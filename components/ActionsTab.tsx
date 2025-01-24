"use client";
import { useStore } from "@/lib/store";
import { boardSize } from "@/lib/constants";
import { useShallow } from "zustand/react/shallow";

const ActionsTab = () => {
  const { lines, filledCells, resetBoard } = useStore(
    //using useShallow to avoid re-renders https://github.com/pmndrs/zustand#selecting-multiple-state-slices
    useShallow((state) => ({
      lines: state.lines,
      filledCells: state.filledCells,
      resetBoard: state.resetBoard,
    })),
  );

  return (
    <div className="flex justify-center gap-5 mt-10 max-w-[70svw]">
      {filledCells === boardSize && (
        <p className="font-black pt-5">
          {lines > 0
            ? `Congratulations you have ${lines} lines!`
            : "You have no lines, try again."}
        </p>
      )}
      <button
        className={`p-5 px-8 bg-gray-200 dark:bg-[#181818] ${filledCells === boardSize ? "hover:bg-green" : "hover:bg-red"} rounded-xl transition-all ease-in mb-8 `}
        onClick={resetBoard}
      >
        {filledCells === boardSize ? "Play again" : "Reset"}
      </button>
    </div>
  );
};

export default ActionsTab;
