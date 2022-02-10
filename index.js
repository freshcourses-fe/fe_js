'use strict';

/*
  создайте функцию которая принимает строку
  и возвращает количество гласных букв в ней
  a , e , o , i , u
*/
const vowelsArr = ['a', 'e', 'i', 'u', 'o'];
function countLetters(str, arr) {
  if (typeof str !== 'string') {
    throw new TypeError('Принимаем только строки');
  }

  let result = 0;

  // for (let i = 0; i < str.length; i++) {
  //   if (arr.includes(str[i])) {
  //     result++;
  //   }
  // }

  for (const letter of str) {
    if (arr.includes(letter.toLowerCase())) {
      result++;
    }
  }

  return result;
}

