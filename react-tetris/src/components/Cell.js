import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    //Tampilin block cell dengan warna ngikutin komponen TETROMINOS
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell;