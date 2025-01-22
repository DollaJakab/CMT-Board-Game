"use client";
import React from "react";
import { useStore } from "@/lib/store";
import { CellProps, CellTypes } from "@/lib/types";
import { linesCalculator } from "@/lib/helpers";

const Cell = ({ cell, i, j }: { cell: CellProps; i: number; j: number }) => {
  const updateBoard = useStore((state) => state.updateBoard);
  const board = useStore((state) => state.board);
  const updateBoardColors = useStore((state) => state.updateBoardColors);
  const currentLetter = useStore((state) => state.currentLetter);
  const updateCurrentLetter = useStore((state) => state.updateCurrentLetter);
  const currentLetterIndex = Object.keys(CellTypes).indexOf(currentLetter);
  const updateLines = useStore((state) => state.updateLines);
  const setCellValue = () => {
    updateBoard(i, j, currentLetter);
    updateCurrentLetter(CellTypes[(currentLetterIndex + 1) % 3]);
    const lines = linesCalculator(board);
    updateLines(lines.length);
    lines.forEach((line) => {
      line.forEach(([row, col]) => {
        updateBoardColors(row, col);
      });
    });
  };
  return (
    <button
      disabled={cell?.value !== ""}
      className={"bg-gray-200 h-20 w-20"}
      style={{ color: cell?.color }}
      onClick={setCellValue}
    >
      {cell?.value}
    </button>
  );
};

export default Cell;
