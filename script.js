const colorPicker = document.getElementById('colorPicker').value;
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const resetBtn = document.getElementById('eraserBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider').value;
console.log(sizeSlider);
const grid = document.getElementById('grid');
const gridElement = document.getElementsByClassName('gridElement');
const value = document.getElementById('sizeSlider').oninput = () => setSizeValue();
function setSizeValue() {
  sizeValue.innerHTML = `${val} x ${val}`;
}
function clearGrid() {
  grid.innerHTML = '';
  setGrid(val);
  console.log(sizeSlider);
}
let val = 16;
function updateValue() {
  val = document.getElementById('sizeSlider').value;
  setSizeValue()
  clearGrid()
  setGrid(val)
  console.log(val);
}
function setGrid(size) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
      const gridDiv = document.createElement('div');
      gridDiv.classList.add('gridElement');
      gridDiv.addEventListener('mouseover', changeColor);
      grid.appendChild(gridDiv);
    }
}
let currentColor = '#000000';
function updateColor() {
  const colorPicker = document.getElementById('colorPicker').value;
  console.log(colorPicker);
  currentColor = colorPicker;
}
const defaultMode = 'solid';
let currentMode = defaultMode;

function colorMode(mode) {
  currentMode = mode;
  console.log(currentMode);
}
function changeColor(e) {
  if(currentMode === 'solid') {
    currentColor = colorPicker;
    Object.assign(e.target.style, {backgroundColor: currentColor});
  }
  else if(currentMode === 'rainbow') {
    rainbowMode();
    Object.assign(e.target.style, {backgroundColor: currentColor});
  } else if(currentMode === 'eraser'){
    currentColor = '#FFFFFF';
    Object.assign(e.target.style, {backgroundColor: currentColor});
  }
}
function randomNum() {
  return Math.floor(Math.random() * (255 - 0) + 0);
}
function rainbowMode() {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  currentColor = 'rgb('+ r + ','+ g +','+ b +')';
  console.log(currentColor);
}
const gridSize = 16;

setGrid(16);
setSizeValue();