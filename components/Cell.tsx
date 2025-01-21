"use client";
import React from "react";
import { useStore } from "@/lib/store";
import { CellTypes } from "@/lib/types";

const Cell = ({ value, i, j }: { value: string; i: number; j: number }) => {
  const updateBoard = useStore((state) => state.updateBoard);
  const board = useStore((state) => state.board);
  const currentLetter = useStore((state) => state.currentLetter);
  const updateCurrentLetter = useStore((state) => state.updateCurrentLetter);
  const currentLetterIndex = Object.keys(CellTypes).indexOf(currentLetter);
  const setCellValue = () => {
    const newBoard = board.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        if (rowIndex === i && cellIndex === j) {
          return currentLetter;
        }
        return cell;
      }),
    );
    updateBoard(newBoard);
    updateCurrentLetter(CellTypes[(currentLetterIndex + 1) % 3]);
  };
  return (
    <button
      disabled={value !== ""}
      className="bg-gray-200 h-20 w-20 text-black"
      onClick={setCellValue}
    >
      {value}
    </button>
  );
};

export default Cell;
