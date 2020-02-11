//key numbers
const inputNumber1 = document.querySelector('div#n1');
const inputNumber2 = document.querySelector('div#n2');
const inputNumber3 = document.querySelector('div#n3');
const inputNumber4 = document.querySelector('div#n4');
const inputNumber5 = document.querySelector('div#n5');
const inputNumber6 = document.querySelector('div#n6');
const inputNumber7 = document.querySelector('div#n7');
const inputNumber8 = document.querySelector('div#n8');
const inputNumber9 = document.querySelector('div#n9');
const inputNumber0 = document.querySelector('div#n0');

inputNumber1.addEventListener('click', inputNumberOnDisplay);
inputNumber2.addEventListener('click', inputNumberOnDisplay);
inputNumber3.addEventListener('click', inputNumberOnDisplay);
inputNumber4.addEventListener('click', inputNumberOnDisplay);
inputNumber5.addEventListener('click', inputNumberOnDisplay);
inputNumber6.addEventListener('click', inputNumberOnDisplay);
inputNumber7.addEventListener('click', inputNumberOnDisplay);
inputNumber8.addEventListener('click', inputNumberOnDisplay);
inputNumber9.addEventListener('click', inputNumberOnDisplay);
inputNumber0.addEventListener('click', inputNumberOnDisplay);

const clearBtn = document.querySelector('div#clear');
clearBtn.addEventListener('click', clearDisplay);

const displayNumber = document.querySelector('#displayer');

function clearDisplay() {
  displayNumber.value = '';
}


function inputNumberOnDisplay() {
  switch (displayNumber) {
    case inputNumber0:
      displayNumber.value = 0;
      break;
    case inputNumber1:
      displayNumber.value = 1;
      break;
    default:
      console.log('toma no seu cu');
  }
}

