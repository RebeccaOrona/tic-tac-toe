import React from "react";
import '../css/Square.css'

export const Square = ({children, isSelected, updateBoard, index}) => {

    const className = `square-container ${isSelected ? 'selected' : ''}` 

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}