import React from 'react';

import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

//Components
import Stage from './Stage'; //Papan Tetris-nya
import Display from './Display'; //Tampilan Score, Rows, dan Level
import StartButton from './StartButton'; //Button buat mulai game

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )

}

export default Tetris;