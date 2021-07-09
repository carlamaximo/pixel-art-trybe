// Creating pixels grid by JS

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
