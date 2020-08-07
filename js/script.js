'use strict';

let activeBox = false;
let colorSelectedToPaint = 'rgb(203, 251, 129)';

const startInputValues = function () {
  let rangeInput = document.querySelectorAll('.range');
  let rangeInputBox = document.querySelectorAll('.rangeBoxInput');
  let boxColor = document.getElementById('boxColor');
  let canvas = document.querySelector('.drawBoard');

  for (let i = 0; i < rangeInput.length; i++) {
    rangeInput[i].value = '0';
    rangeInput[i].setAttribute('max', 255);
    rangeInput[i].setAttribute('min', 0);
    rangeInput[i].addEventListener('input', onChangeRange);

    rangeInputBox[i].value = '0';
  }

  boxColor.addEventListener('click', toggleSelectedOverlay);
  boxColor.addEventListener('click', addSelectedColor);

  canvas.addEventListener('click', addColorToCanvas);

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
  // Add limit to number of selected colors
  let limit = document.querySelectorAll('#selectedColors li').length;

  //Add the color to selected colors list
  if (activeBox && limit < 7) {
    let boxColor = document.getElementById('boxColor');
    let colorRGB = boxColor.style.backgroundColor;

    let ul = document.getElementById('selectedColors');
    let li = document.createElement('li');

    let div = document.createElement('div');
    div.classList.add('colorSelected');
    div.style.backgroundColor = colorRGB;
    div.addEventListener('click', pickColor);

    li.appendChild(div);
    ul.appendChild(li);
  }
};

const pickColor = function (event) {
  let color = document.querySelectorAll('.colorSelected');
  let colorArray = Array.from(color);

  colorArray.forEach((colorSelected) => {
    if (colorSelected.classList.contains('activeSelectedColor'))
      colorSelected.classList.toggle('activeSelectedColor');
  });

  event.target.classList.toggle('activeSelectedColor');

  colorSelectedToPaint = event.target.style.backgroundColor;
};

const addColorToCanvas = function () {
  let canvas = document.querySelector('.drawBoard');
  canvas.style.backgroundColor = colorSelectedToPaint;
};

window.addEventListener('load', startInputValues);
