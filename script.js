// Creating pixels grid by JS
// Requirement 4
function pixelGrid() {
  const pixelGrid = document.getElementById('pixel-board');

  for (let rows = 0; rows < 5; rows += 1) {
    const row = document.createElement('section');

    for (let columns = 0; columns < 5; columns += 1) {
      const pixels = document.createElement('div')

      pixels.classList.add('pixel');
      row.appendChild(pixels);
      
    }
    pixelGrid.appendChild(row);
    
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