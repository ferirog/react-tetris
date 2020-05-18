import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
    // const playerState = useState();
    // const player = playerState[0];
    // const setPlayer = playerState[1];
    // 3 baris kode di atas = 1 baris kode di bawah
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos:{x:(prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }   

    // Prevent infinite loop using useCallback
    const resetPlayer = useCallback(() => {
        setPlayer({
            // Set the block to the center
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])
    
    return [player, updatePlayerPos, resetPlayer];
}
