window.addEventListener('load', startInputValues);

function startInputValues() {
  var rangeInput = document.querySelectorAll('.range');
  var rangeInputBox = document.querySelectorAll('.rangeBoxInput');

  for (var i = 0; i < rangeInput.length; i++) {
    rangeInput[i].value = '0';
    rangeInput[i].setAttribute('max', 255);
    rangeInput[i].setAttribute('min', 0);
    rangeInput[i].addEventListener('input', onChangeRange);

    rangeInputBox[i].value = '0';
  }

  changeBoxColor();
}

function onChangeRange(event) {
  var rangeBox = document.getElementById(event.target.id + 'Box');
  rangeBox.value = event.target.value;

  changeBoxColor();
}

function changeBoxColor() {
  var boxColor = document.getElementById('boxColor');

  var red = document.getElementById('rangeRedBox').value;
  var green = document.getElementById('rangeGreenBox').value;
  var blue = document.getElementById('rangeBlueBox').value;

  boxColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
