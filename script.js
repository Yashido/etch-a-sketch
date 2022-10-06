const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const resetBtn = document.getElementById('eraserBtn');
const sideValue = document.getElementById('sideValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('cnt-grid');

function setGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const gridEl = document.createElement('div');
        gridEl.classList.add('gridElement');
        gridEl.addEventListener('mouseover', changeColor);
        gridEl.addEventListener('mousedown', changeColor);
        grid.appendChild(gridEl);
    }

}
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

const gridSize = 16;

window.onload = () => {
    setGrid(gridSize);
}