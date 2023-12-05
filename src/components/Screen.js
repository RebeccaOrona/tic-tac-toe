import React from "react";
import '../css/Screen.css';
import { Square } from "./Square";

export function Screen ({ winner }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (
    <div className='screen-container'>
      <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

      </div>
    </section>     
    </div>
  )
}