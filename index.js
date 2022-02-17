/*
  y = log x - логарифмическая
  y = x  - линейная функция
  y = x^2  - квадратичная
  y = x^3 - кубическая
  y = 2 ^ x - експоненциальная
  y = x! - факториальная
*/
/*
5! = 1 * 2 * 3 * 4  * 5
*/

/*
  n - сколько было операций / входных данный
  x - быстродействие
  x = 10*n + 15 - линейная сложность
  x = n^2 + 2 - квадратичная сложность
  x = 2^n + 5n + 1500
*/

/*
 n = 20000

 x = 20000 * 10 + 15 = 200015
 x = 400000002
 x = 40 * 10^6020
*/

/*
  x = n - линейная сложность
  x = n^2 
  x = 2^n 

  O(n)
  O(n^2)
  O(2^n + n)
*/

// O (1)
function isFirstElementOfArray(arr, element) {
  return arr[0] === element;
}

const arr = [0, 1, 2, 5, 7, 8, 9];
const arr2 = Array(50000000)
  .fill(null)
  .map((_, index) => index);
const number1 = 8;
const number2 = 5;

console.time('O(1)');
const result1 = isFirstElementOfArray(arr, number1);
console.timeEnd('O(1)');

console.time('O(1) big array');
const result2 = isFirstElementOfArray(arr2, number2);
console.timeEnd('O(1) big array');

// O (n)
function isElementInArray(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (elem === arr[i]) {
      return true;
    }
  }

  return false;
}

console.time('O(n) best case');
const oNbest = isElementInArray(arr2, 0);
console.timeEnd('O(n) best case');

console.time('O(n) worst case');
const oNworst = isElementInArray(arr2, 4999999);
console.timeEnd('O(n) worst case');

// O (n^2)

function createMultiplicationTable(limit) {
  const table = [];
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }

  return table;
}

console.time('O(n^2) best case');
const goodTable = createMultiplicationTable(10);
console.timeEnd('O(n^2) best case');

console.time('O(n^2) worst case');
const badTable = createMultiplicationTable(5000);
console.timeEnd('O(n^2) worst case');

// const arr = [0, 1, 2, 5, 7, 8, 9];
// O (log n)
function binarySearch(arr, number) {
  // debugger;\
  let steps = 0;
  let start = 0;
  let end = arr.length - 1;

  let center = Math.round((start + end) / 2);

  while (true) {
    steps++;
    if (arr[center] === number) {
      console.log(steps);
      return center;
    }

    if (arr[center] > number) {
      end = center;
      center = Math.floor((start + end) / 2);
    } else {
      start = center;
      center = Math.ceil((start + end) / 2);
    }
  }
}

/*

  Создать функцию бинарный вопросник
  функция будет принимать число
  0 .... 100 numberGuesser(100)
  функция по циклу спрашивает confirm-ом у пользователя
  рпвильное ли число которое по середине сейчас
  

*/

console.time('O(log n) best case');
const goodSearch = binarySearch(arr2, 2500000);
console.timeEnd('O(log n) best case');

console.time('O(log n) worst case');
const badSearch = binarySearch(arr2, 1);
console.timeEnd('O(log n) worst case');
