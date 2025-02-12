import React, { useState } from "react";
import "./squaredesign.css";

function Square(props) {
  const [cross, setcross] = useState("x");
  const [zero1, setzero1] = useState("o");

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const myarray = new Array(9);
  myarray.fill("-");
  return (
    <div className="tictac">
      {myarray.map((val) => (
        <div>
          <button
            className={`square ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            click me
          </button>
        </div>
      ))}
    </div>
  );
}

export default Square;
