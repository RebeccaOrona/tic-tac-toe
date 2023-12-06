import React from "react";
import '../css/Screen.css';
import { Square } from "./Square";

export function Screen ({ winner }) {

  const winnerText = winner === false ? 'Draw 😔' : 'Winner: '

  if(winner === null) {
    return (
      <div className='screen-container'>
        <section className='winner'>
        <div className='text'>
          <h2>Good luck!</h2>
        </div>
      </section>     
      </div>
    )
  } else

  return (
    <div className='screen-container'>
      <section className='winner'>
      <div className='text'>

        <h2 className="win">{winnerText}<header className="square">{winner && <Square winner={winner}>{winner}</Square>}</header></h2>


      </div>
    </section>     
    </div>
  )
}