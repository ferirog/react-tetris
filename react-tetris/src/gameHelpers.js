export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Zero means nothing on the grid

// We have the different tetrominos each of them
// going to have a letter on "0" 

// "Clear" needed to be set to merge when we have a
// tetromino merge into the stage

// When collided, the tetromino should stay in the stage 
// and not be cleared in the next render

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear']) //No tetro collided here
    )