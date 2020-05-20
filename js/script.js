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
}

function onChangeRange(event) {
  var rangeBox = document.getElementById(event.target.id + 'Box');
  rangeBox.value = event.target.value;
}
