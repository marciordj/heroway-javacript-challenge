const inputNumber = [
  inputNumber1 = document.querySelector('div#n1'),
  inputNumber2 = document.querySelector('div#n2'),
  inputNumber3 = document.querySelector('div#n3'),
  inputNumber4 = document.querySelector('div#n4'),
  inputNumber5 = document.querySelector('div#n5'),
  inputNumber6 = document.querySelector('div#n6'),
  inputNumber7 = document.querySelector('div#n7'),
  inputNumber0 = document.querySelector('div#n0'),
  inputNumber8 = document.querySelector('div#n8'),
  inputNumber9 = document.querySelector('div#n9'),
  inputNumber0 = document.querySelector('div#n0')
];

const displayNumber = document.querySelector('#displayer');

for (let index = 0; index < inputNumber.length; index++) {
  
  inputNumber[index].addEventListener('click', () => {
    let btnNumber = inputNumber[index].innerHTML;
    displayNumber.value = btnNumber;
  })
}


