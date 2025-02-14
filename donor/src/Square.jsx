import React, { useState } from "react";
import "./squaredesign.css";

function Square() {
  const [board, setBoard] = useState(Array(9).fill(null)); 

  const handleClick = (index) => {
    if (board[index]) { 
      return; 
    }
    const newBoard = [...board];// important part!!
    newBoard[index] = '0'; // Assuming 'X' plays first
    setBoard(newBoard);
  };

  return (
    <div className="tictac">
      {board.map((value, index) => (
        <button 
          key={index} 
          className={`square ${value === 'X'||"O"} ? 'clicked' : ''}`} 
          onClick={() => handleClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Square;