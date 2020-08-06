'use strict';

let activeBox = false;

const startInputValues = function () {
  let rangeInput = document.querySelectorAll('.range');
  let rangeInputBox = document.querySelectorAll('.rangeBoxInput');
  let boxColor = document.getElementById('boxColor');

  for (let i = 0; i < rangeInput.length; i++) {
    rangeInput[i].value = '0';
    rangeInput[i].setAttribute('max', 255);
    rangeInput[i].setAttribute('min', 0);
    rangeInput[i].addEventListener('input', onChangeRange);

    rangeInputBox[i].value = '0';
  }

  boxColor.addEventListener('click', toggleSelectedOverlay);
  boxColor.addEventListener('click', addSelectedColor);
  changeBoxColor();
};

const onChangeRange = function (event) {
  let rangeBox = document.getElementById(event.target.id + 'Box');
  rangeBox.value = event.target.value;

  changeBoxColor();
};

const changeBoxColor = function () {
  let boxColor = document.getElementById('boxColor');

  let red = document.getElementById('rangeRedBox').value;
  let green = document.getElementById('rangeGreenBox').value;
  let blue = document.getElementById('rangeBlueBox').value;

  boxColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  if (activeBox) toggleSelectedOverlay();
};

const toggleSelectedOverlay = function (event) {
  activeBox = !activeBox;
  let selected = document.getElementById('selectedOverlay');
  selected.classList.toggle('selectedOverlay');
};

const addSelectedColor = function () {
  //Add the color to selected colors list
  let boxColor = document.getElementById('boxColor');
  let colorRGB = boxColor.style.backgroundColor;

  let ul = document.getElementById('selectedColors');
  let li = document.createElement('li');

  let div = document.createElement('div');
  div.classList.add('colorSelected');
  div.style.backgroundColor = colorRGB;

  li.appendChild(div);
  ul.appendChild(li);
};

window.addEventListener('load', startInputValues);
