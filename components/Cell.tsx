"use client";
import React from "react";
import { CellProps } from "@/lib/types";

const Cell = ({
  cell,
  row,
  col,
  setCellValue,
}: {
  cell: CellProps;
  row: number;
  col: number;
  setCellValue: (row: number, col: number) => void;
}) => {
  return (
    <button
      disabled={cell?.value !== ""}
      className={"bg-gray-200 h-20 w-20"}
      style={{ color: cell?.color }}
      onClick={() => setCellValue(row, col)}
    >
      {cell?.value}
    </button>
  );
};

export default Cell;
