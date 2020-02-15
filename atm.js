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
const clearBtn = document.querySelector('div#clear');
const confirmBtn = document.querySelector('div#confirm');

const displayNumber = document.querySelector('#displayer');
const displayAvaiableNotes = document.querySelector('div#bills-displayer');

clearBtn.addEventListener('click', () => displayNumber.value = '');

const mapedNumbers = inputNumber.map((numbers) => {
  const btnValue = numbers.innerText;

  return numbers.addEventListener('click', function () {
    displayNumber.value = displayNumber.value + btnValue;
  });
});


confirmBtn.addEventListener('click', () => {
  const convertNumber = Number(displayNumber.value);
  const autenticationRequire = convertNumber % 10 !== 0 ? true : false;

  let notasCem = Math.floor(convertNumber / 100);
  let resto = convertNumber % 100;

  let notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;

  let notasVinte = Math.floor(resto / 20);
  resto = resto % 20;

  let notasDez = Math.floor(resto / 10);

  if (convertNumber % 10 !== 0 || convertNumber <= 0) {
    alert('Coloque um valor válido para saques')
  } else {
    if (notasCem > 0) {
      displayAvaiableNotes.innerText = `R$ 100: ${notasCem} R$ 50: ${notasCinquenta} R$ 20: ${notasVinte} R$ 10: ${notasDez}`;


    }
    if (notasCinquenta > 0) {
      displayAvaiableNotes.innerText = `R$ 100: ${notasCem} R$ 50: ${notasCinquenta} R$ 20: ${notasVinte} R$ 10: ${notasDez}`;

    }
    if (notasVinte > 0) {
      displayAvaiableNotes.innerText = `R$ 100: ${notasCem} R$ 50: ${notasCinquenta} R$ 20: ${notasVinte} R$ 10: ${notasDez}`;
    }
    if (notasDez > 0) {
      displayAvaiableNotes.innerText = `R$ 100: ${notasCem} R$ 50: ${notasCinquenta} R$ 20: ${notasVinte} R$ 10: ${notasDez}`;
    }

  }

});







// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo
