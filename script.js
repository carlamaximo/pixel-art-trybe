// Creating pixels grid by JS

function pixelGrid() {
  const pixelGrid = document.getElementById('pixel-board');

  for (let rows = 0; rows < 5; rows += 1) {
    const row = document.createElement('div');

    for (let columns = 0; columns < 5; columns += 1) {
      const pixel = document.createElement('div')

      pixel.classList.add('pixel');
      row.appendChild(pixel);
      
    }
    pixelGrid.appendChild(row);
  }
}
pixelGrid()