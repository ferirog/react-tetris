import { useState } from 'react';

import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    // const playerState = useState();
    // const player = playerState[0];
    // const setPlayer = playerState[1];
    // 3 baris kode di atas = 1 baris kode di bawah
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false
    });
    
    return [player];
}
