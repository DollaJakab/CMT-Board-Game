import { expect, it } from "vitest";
import { linesCalculator } from "./linesCalculator";
import { boardCols, boardRows } from "./constants";

const createMockBoard = () => {
  return new Array(boardRows)
    .fill(null)
    .map(() => new Array(boardCols).fill({ color: "black", value: undefined }));
};

it("Should not have lines in empty board", () => {
  const board = createMockBoard();
  const lines = linesCalculator(board);
  expect(lines.length).toBe(0);
});

it("Should find horizontal lines", () => {
  const board = createMockBoard();
  board[0] = new Array(boardCols).fill({ color: "black", value: "C" });
  board[1] = new Array(boardCols).fill({ color: "black", value: "M" });
  board[2] = new Array(boardCols).fill({ color: "black", value: "T" });
  const lines = linesCalculator(board);
  expect(lines.length).toBe(3);
  expect(lines[0]).toStrictEqual(
    Array.from({ length: boardCols }, (_, i) => [0, i]),
  );
  expect(lines[1]).toStrictEqual(
    Array.from({ length: boardCols }, (_, i) => [1, i]),
  );
  expect(lines[2]).toStrictEqual(
    Array.from({ length: boardCols }, (_, i) => [2, i]),
  );
});

it("Should find vertical lines", () => {
  const board = createMockBoard();
  board.forEach((row) => {
    row[0] = { color: "black", value: "C" };
    row[1] = { color: "black", value: "M" };
    row[2] = { color: "black", value: "T" };
  });
  const lines = linesCalculator(board);
  expect(lines.length).toBe(3);
  expect(lines[0]).toStrictEqual(
    Array.from({ length: boardRows }, (_, i) => [i, 0]),
  );
  expect(lines[1]).toStrictEqual(
    Array.from({ length: boardRows }, (_, i) => [i, 1]),
  );
});

it("Should find diagonal lines", () => {
  const board = createMockBoard();
  for (let i = 0; i < 3; i++) {
    board[i][i] = { color: "black", value: "C" };
    board[i][i + 1] = { color: "black", value: "M" };
    board[i][i + 2] = { color: "black", value: "T" };
  }
  const lines = linesCalculator(board);
  expect(lines.length).toBe(3);
  expect(lines).toStrictEqual([
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    [
      [0, 2],
      [1, 3],
      [2, 4],
    ],
  ]);
});
