import { useState } from "react";

export type Symbol = "" | "O" | "X";

const emptyBoard: Symbol[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

export const useGame = () => {
  const [board, setBoard] = useState(emptyBoard);
  const [activePlayer, setActivePlayer] = useState("1");

  const changeTurn = () => {
    setActivePlayer(activePlayer === "1" ? "2" : "1");
  };

  const playTurn = (row: number, column: number) => {
    const tile = board[row][column];
    if (tile !== "") return;
    const symbol = activePlayer === "1" ? "X" : "O";
    setBoard((board) => {
      const boardClone = board.map((row) => [...row]); // Clones two dimensional array
      boardClone[row][column] = symbol;
      return boardClone;
    });
    changeTurn();
  };

  return { board, activePlayer, changeTurn, playTurn };
};
