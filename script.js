const colorBlack = document.getElementById('black');
const colorA = document.getElementById('yellow');
const colorB = document.getElementById('blue');
const colorC = document.getElementById('green');

// Fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function colorGenerating() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b})`;
}

colorBlack.style.backgroundColor = 'black';
colorA.style.backgroundColor = colorGenerating();
colorB.style.backgroundColor = colorGenerating();
colorC.style.backgroundColor = colorGenerating();

colorBlack.classList.add('selected');

// Requisito 7 feito em conjunto com Filipe Brochier!!
function selectedColor(color) {
  addEventListener('click', selectedColor);
  const colorList = document.getElementsByClassName('color')
  for (let i = 0; i < colorList.length; i += 1) {
  colorList[i].classList.remove('selected');
  }
  color.target.classList.add('selected'); 
}

addEventListener("click", paint)
function paint(event) {
  const pixel = event.taget;
  const selectColor = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = selectColor;
}

//Requisitos 6 e 7 tão fodas

const btnClear = document.createElement('button');
btnClear.id = 'clear-pixels';
btnClear.innerHTML = 'Limpar!';
document.querySelector('.buttons').appendChild('btnClear');

function clear() {
  btnClear.addEventListener('click', limpar);
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

