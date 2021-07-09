// Creating pixels grid by JS
// Requirement 4
const pixelBoard = document.getElementById('pixel-board');
function pixelGrid() {
  for (let rows = 0; rows < 5; rows += 1) {
    const row = document.createElement('section');

    for (let columns = 0; columns < 5; columns += 1) {
      const pixels = document.createElement('div')

      pixels.classList.add('pixel');
      row.appendChild(pixels);
      
    }
    pixelBoard.appendChild(row);
    
  }
}
pixelGrid()
// Requirement 06
document.getElementById('black').classList.add('selected');

// Requirement 07 
function selectedColor(currentColor) {
  const lastColorSelected = document.querySelector('.selected');
  lastColorSelected.classList.remove('selected');
  currentColor.target.classList.add('selected');
}
const colorPallete = document.getElementById('color-palette');
colorPallete.addEventListener("click", selectedColor);

// Requirement 08 - Thanks to Filipe Brochier for your help!
function paint(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
pixelBoard.addEventListener("click", paint);