import React from "react";
import { CellProps } from "@/lib/types";
import { useStore } from "@/lib/store";
import { boardRows } from "@/lib/constants";

const Cell = ({
  cell,
  row,
  col,
}: {
  cell: CellProps;
  row: number;
  col: number;
}) => {
  const setCellValue = useStore((state) => state.setCellValue);
  return (
    <button
      disabled={cell.value !== undefined}
      className={`bg-gray-200 rounded-sm w-full h-auto aspect-square `}
      style={{ color: cell?.color }}
      onClick={() => setCellValue(row, col)}
    >
      {cell?.value}
    </button>
  );
};

export default Cell;
