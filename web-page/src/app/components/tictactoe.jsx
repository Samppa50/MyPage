'use client';
import { useState } from 'react'
//import '.styles/tictactoe.css';

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
      setValue("X");
    }
  
    return (
      <button
        className="square"
        style={{backgroundColor: "white"}}
        onClick={handleClick}
      >
        {value}
      </button>
    );
}

export default function Tictactoe() {
    return (
      <>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
      </>
    );
}