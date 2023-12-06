import React from "react";
import { useState } from "react";
import { Screen } from './Screen';
import { Square } from './Square';
import { TURNS } from "../constants";
import '../css/GameLogic.css'
import confetti from 'canvas-confetti'
import { checkWinnerFrom, checkEndGame } from "./Board";

export const GameLogic = () => {
    
    const [board, setBoard] = useState(Array(9).fill(null));
    // 'x','o','x','o','x','o','x','o','x'

    const [turn, setTurn] = useState(TURNS.X);

    const [winner, setWinner] = useState(null)

    const updateBoard = (index) => {
        if (board[index] || winner) return
        const newBoard = [ ... board];
        newBoard[index] = turn
        setBoard(newBoard)
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {
        confetti()
        setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
        setWinner(false)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }
 
    return (
        <main>
            <h1>Tic tac toe</h1>
            <div className="board">
            <Screen
                winner={winner}
            />   
            <section className='game-container'>
                {
                    board.map((square, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {square}
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn-container">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
            <button onClick={resetGame}>Reset game</button>
            </div>
        </main>
    )
}