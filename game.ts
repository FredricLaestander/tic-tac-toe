import { useState } from "react";

const emptyBoard = ["", "", "", "", "", "", "", "", ""];

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
  const [activePlayer, setActivePlayer] = useState("player 1");

  const changeTurn = () => {
    setActivePlayer(activePlayer === "player 1" ? "player 2" : "player 1");
  };

  const placeSymbol = (index: number) => {
    if (board[index] !== "") return;
  };

  return { board, activePlayer, changeTurn, placeSymbol };
};
