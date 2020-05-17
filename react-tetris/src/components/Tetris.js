import React from 'react';

import {createStage} from '../gameHelpers';

//Components
import Stage from './Stage'; //Papan Tetris-nya
import Display from './Display'; //Tampilan Score, Rows, dan Level
import StartButton from './StartButton'; //Button buat mulai game

const Tetris = () => {
    return (
        <div>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )

}

export default Tetris;