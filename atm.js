const inputNumbers = [
  document.querySelector('#n1'),
  document.querySelector('#n2'),
  document.querySelector('#n3'),
  document.querySelector('#n4'),
  document.querySelector('#n5'),
  document.querySelector('#n6'),
  document.querySelector('#n7'),
  document.querySelector('#n8'),
  document.querySelector('#n9'),
  document.querySelector('#n0')
];

let mapedInputNumbers = inputNumbers.map((numbers) => {
  return numbers.addEventListener('click', () => console.log('testando se deu certo'));
});

