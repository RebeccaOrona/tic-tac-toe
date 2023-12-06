import React from "react";
import '../css/Square.css'

export const Square = ({children, isSelected, updateBoard, winner, index}) => {

    const className = `square-container ${isSelected ? 'selected' : '' || winner ? 'winner' : ''}` 

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}