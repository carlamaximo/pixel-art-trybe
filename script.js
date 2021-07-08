const colorBlack = document.getElementsByClassName('color')[0];
const colorOne = document.getElementsByClassName('color')[1];
const colorTwo = document.getElementsByClassName('color')[2];
const colorThree = document.getElementsByClassName('color')[3];
const initialSize = 5;

colorBlack.classList.add('selected');

colorBlack.addEventListener('click', selectColor);
colorOne.addEventListener('click', selectColor);
colorTwo.addEventListener('click', selectColor);
colorThree.addEventListener('click', selectColor);


