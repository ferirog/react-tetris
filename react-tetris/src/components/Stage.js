import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

// We have the stage that's the one we created

// We map through that and when we map through that stage array
// we get the row and each row is also an array that holds the cells

// So we map through that row also and we get the cell

// For each cell we are going to render out the cell component
const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
);

export default Stage;