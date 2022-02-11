'use strict';

/*
  создайте функцию которая принимает строку
  и возвращает количество гласных букв в ней
  a , e , o , i , u
*/
const vowelsArr = ['a', 'e', 'i', 'u', 'o'];

function countLetters(str, arr = ['a', 'e', 'i', 'u', 'o']) {
  if (typeof str !== 'string') {
    throw new TypeError('Принимаем только строки');
  }

  let result = 0;

  for (const letter of str) {
    if (arr.includes(letter.toLowerCase())) {
      result++;
    }
  }

  return result;
}
// let sum = 0;

// for (let i = 0; i <= numbers.length; i++) {
  //   sum = sum + numbers[i];
  // }
  
  // return sum;
  
  // rest operator
const sum = (...numbers) => numbers.reduce((sum, number) => sum + number);

function func(important, ...rest) {
  console.log(important);
  console.log(rest);
}
// 2 , 2 , 2 = 6
// 10 , 5, 0 = 15
// 1 = 1
// -100, -200, -300, -400 = -1000
