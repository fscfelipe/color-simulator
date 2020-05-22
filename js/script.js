const startInputValues = function () {
  let rangeInput = document.querySelectorAll('.range');
  let rangeInputBox = document.querySelectorAll('.rangeBoxInput');

  for (let i = 0; i < rangeInput.length; i++) {
    rangeInput[i].value = '0';
    rangeInput[i].setAttribute('max', 255);
    rangeInput[i].setAttribute('min', 0);
    rangeInput[i].addEventListener('input', onChangeRange);

    rangeInputBox[i].value = '0';
  }

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
};

window.addEventListener('load', startInputValues);
