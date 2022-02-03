'use strict';

let number1 = 5;
let number2 = 3;
// let number1 = 5;
// let number2 = 3;
// const answer = prompt(number1 + ' + ' + number2 + ' ?');

// alert(number1 + ' + '+ number2 +' = ' + (number1 + number2));
// alert(`${number1} + ${number2} = ${number1 + number2}`);
`sdsadadsadsadsdsad + ${5 + 2 > 7}`;

// alert("Глава 1 \nЧто-то по'шло не так. Иван сказал: \"Все плохо\u00AE\"");

// alert(`Глава
// Что-то по'шло не так.
//             Иван сказал: "Все плохо\u00AE"`);

// const answer = prompt(number1 + ` + ` + number2 + ` ?`);

const user = {
  login: 'test',
  password: '12345',
  10: 'secret 1',
  'secret string': true,
};

/*
  Создать таблицу умножения в обьекте
*/

function createMultiplicationtable() {
  const table = {};

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      table[`${i} * ${j} = `] = i * j;
    }
  }

  return table;
}

const tableButBetter = createMultiplicationtable();

const table = {
  '1 * 1 = ': 1,
  '1 * 2 = ': 2,
  '1 * 3 = ': 3,
  '1 * 4 = ': 4,
  '1 * 5 = ': 5,
  '1 * 6 = ': 6,
  '1 * 7 = ': 7,
  '1 * 8 = ': 8,
  '1 * 9 = ': 9,
  '1 * 10 =': 10,
  '2 * 1 = ': 2,
  '2 * 2 = ': 4,
  '2 * 3 = ': 6,
  '2 * 4 = ': 8,
  '2 * 5 = ': 10,
  '2 * 6 = ': 12,
  '2 * 7 = ': 14,
  '2 * 8 = ': 16,
  '2 * 9 = ': 18,
  '2 * 10 = ': 20,
  '3 * 1 = ': 3,
  '9 * 10 = ': 90,
};
