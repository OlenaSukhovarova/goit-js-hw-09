function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

// Add event listener start/stop on btn start/stop
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

// Function start event listener
function onStart() {
  timerId = setInterval(getBgColor, 1000);

  startBtn.toggleAttribute('disabled');
}

// Function stop event listener
function onStop() {
  clearInterval(timerId);

  startBtn.removeAttribute('disabled');
}

// Function set random bg color
function getBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}
