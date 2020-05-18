// UseEffect is for create a side effect from reactJS

import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    // [] for dependency array
    useEffect(() => {
        const updateStage = prevStage => {
            // First flush the stage
            // Use for loop if you care about performance (faster)
            const newStage = prevStage.map(row =>
                // See gameHelpers.js
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
            );

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            return newStage;
        };

        setStage(prev => updateStage(prev))
    }, [player]);
    return [stage, setStage];
}