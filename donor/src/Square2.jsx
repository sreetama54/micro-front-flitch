import React, { useState } from "react";
import "./squaredesign.css";

function Square2(props) {
  //create array of 9

  const [board, setboard] = useState(new Array(9).fill());

  //handle input:
  const myhandler = (index) => {
    if (board[index]) return;
    else {
      const newboard = [...board];
      newboard[index] = "X";
      setboard(newboard);
    }
  };
  return (
    <div className="tictac">
        Boards:2
      {board.map((val,i) => 
        (<div>
          <button key={i} className={`square ${val ==='X'}?"clicked":" "`} 
          onClick={()=>myhandler(i)}>
            {val}
          </button>
        </div>)
      )}
    </div>
  );
}

export default Square2;
