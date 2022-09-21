function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color');
const change = document.querySelector('.change-color');

change.addEventListener('click', changeColor);
function changeColor () {
  const bgCol = getRandomHexColor();
  document.body.style.backgroundColor = bgCol;
  color.textContent = bgCol;
  change.style.color = bgCol;
}