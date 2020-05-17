import React from 'react';
import Cell from './Cell';

// We have the stage that's the one we created

// We map through that and when we map through that stage array
// we get the row and each row is also an array that holds the cells

// So we map through that row also and we get the cell

// For each cell we are going to render out the cell component

const Stage = ({ stage }) => (
    <div>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
    </div>
)

export default Stage;