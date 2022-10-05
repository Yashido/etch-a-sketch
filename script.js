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
        const cnt_gridEl = document.createElement('div');
        cnt_gridEl.classList.add('gridElement');
        cnt_gridEl.addEventListener('mouseover', changeColor);
        cnt_gridEl.addEventListener('mousedown', changeColor);
        cnt_grid.appendChild(cnt_gridEl);
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