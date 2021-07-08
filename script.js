window.onload = documen.querySelector('.black').classList.add('selected');

const colorBlack = document.getElementById('black');
const colorA = document.getElementById('yellow');
const colorB = document.getElementById('blue');
const colorC = document.getElementById('green');

const pixel = document.getElementsByClassName('pixel')

colorBlack.classList.add('selected');

colorBlack.addEventListener('click', selectedColor);
colorA.addEventListener('click', selectedColor);
colorB.addEventListener('click', selectedColor);
colorC.addEventListener('click', selectedColor);

addEventListener("click", selectedColor)

const colorList = getElementsByClassName('color')

function selectedColor(event) {
  for (let i = 0; i < colorList.length; i += 1) {
  colorList[i].classList.remove('selected');
  console.log([colorList[i]]);
  }
  event.target.classList.add('selected');
} 


addEventListener("click", paint)

function paint() {
  pixel.style.backgroundColor = colorSelected;

}