const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const resetBtn = document.getElementById('eraserBtn');
const sideValue = document.getElementById('sideValue');
const sizeSlider = document.getElementById('sizeSlider');
const cnt_grid = document.getElementById('cnt-grid');

function setGrid(size) {
    cnt_grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cnt_grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        
    }

}