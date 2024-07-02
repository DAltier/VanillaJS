let minus = document.getElementById('btn-minus');
let reset = document.getElementById('btn-reset');
let plus = document.getElementById('btn-plus');
let score = document.getElementById('score');

let counter = 0;
let size = 100;

function scoreColor() {
  if (counter < 0) {
    document.getElementById('score').style.color = 'red';
  } else if (counter > 0) {
    document.getElementById('score').style.color = 'green';
  } else {
    document.getElementById('score').style.color = 'black';
  }
}

function plusButtonFontSize() {
  if ((counter <= 50 && counter > 0) || (counter < 0 && counter > -50)) {
    size += 1;
  }
  console.log(size);
  return size;
}

function minusButtonFontSize() {
  if ((counter < 0 && counter >= -50) || (counter > 0 && counter < 50)) {
    size -= 1;
  }
  console.log(size);
  return size;
}

minus.addEventListener('click', (e) => {
  counter -= 1;
  scoreColor();
  document.getElementById('score').style.fontSize =
    minusButtonFontSize().toString() + 'px';
  score.innerHTML = counter;
});
reset.addEventListener('click', (e) => {
  counter = 0;
  scoreColor();
  document.getElementById('score').style.fontSize = '100px';
  score.innerHTML = counter;
});
plus.addEventListener('click', (e) => {
  counter += 1;
  scoreColor();
  document.getElementById('score').style.fontSize =
    plusButtonFontSize().toString() + 'px';
  score.innerHTML = counter;
});
