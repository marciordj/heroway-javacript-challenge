<<<<<<< HEAD
inputNumber1 = document.querySelector('div#n1')
inputNumber2 = document.querySelector('div#n2')
inputNumber3 = document.querySelector('div#n3')
inputNumber4 = document.querySelector('div#n4')
inputNumber5 = document.querySelector('div#n5')
inputNumber6 = document.querySelector('div#n6')
inputNumber7 = document.querySelector('div#n7')
inputNumber0 = document.querySelector('div#n0')
inputNumber8 = document.querySelector('div#n8')
inputNumber9 = document.querySelector('div#n9')
inputNumber0 = document.querySelector('div#n0')

const displayNumber = document.querySelector('#displayer');


inputNumber0.addEventListener('click', () => {
  const btn = inputNumber0.innerText;
  displayNumber.value = btn;
});

inputNumber1.addEventListener('click', () => {
  const btn = inputNumber1.innerText;
  displayNumber.value = btn;
} )





console.dir(inputNumber0);

function mudarNumero() {
  const btn = inputNumber0.innerText;

  displayNumber
}
=======
const inputNumber = [
  inputNumber1 = document.querySelector('div#n1'),
  inputNumber2 = document.querySelector('div#n2'),
  inputNumber3 = document.querySelector('div#n3'),
  inputNumber4 = document.querySelector('div#n4'),
  inputNumber5 = document.querySelector('div#n5'),
  inputNumber6 = document.querySelector('div#n6'),
  inputNumber7 = document.querySelector('div#n7'),
  inputNumber8 = document.querySelector('div#n8'),
  inputNumber9 = document.querySelector('div#n9'),
  inputNumber0 = document.querySelector('div#n0')
];

const displayNumber = document.querySelector('#displayer');

debugger;
const mapedNumbers = inputNumber.map((numbers) => {
  debugger;
  const btnValue = numbers.innerText;
  
  return numbers.addEventListener('click', function() {
    displayNumber.value = displayNumber.value + btnValue;
  });
});





console.dir(displayNumber);
console.dir(mapedNumbers);

// for (let index = 0; index < inputNumber.length; index++) {
  
//   inputNumber[index].addEventListener('click', () => {
//     let btnNumber = inputNumber[index].innerHTML;
//     displayNumber.value = btnNumber;
//   })
// }
>>>>>>> newTest








// for (let index = 0; index < inputNumber.length; index++) {
  
//   inputNumber[index].addEventListener('click', () => {
//     let btnNumber = inputNumber[index].innerHTML;
//     displayNumber.value = btnNumber;
//   })
// }


