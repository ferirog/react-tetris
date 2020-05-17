export const TETROMINOS = {
    // 0 = Initial shape(equals nothing on the grid)
    0: { shape :[[0]], color: '0,0,0' },
    I: {
        shape: [
            // Ini bentuk block I ke bawah
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        // RGB Value
        color: '80, 227, 230',
    },
    J: {
        shape: [
            // Ini bentuk block J ke bawah
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        // RGB Value
        color: '36, 95, 223',
    },
    L: {
        shape: [
            // Ini bentuk block L ke bawah
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        // RGB Value
        color: '223, 175, 36',
    },
    O: {
        shape: [
            // Ini bentuk block O atau Kotak
            ['O', 'O'],
            ['O', 'O'],
        ],
        // RGB Value
        color: '223, 217, 36',
    },
    S: {
        shape: [
            // Ini bentuk block S atau Z kebalik
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        // RGB Value
        color: '48, 211, 56',
    },
    T: {
        shape: [
            // Ini bentuk block T 
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],
        // RGB Value
        color: '132, 61, 198',
    },
    Z: {
        shape: [
            // Ini bentuk block Z atau S kebalik
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        // RGB Value
        color: '227, 78, 78',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}
