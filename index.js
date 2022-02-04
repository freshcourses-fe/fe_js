'use strict';

const mostPopularNames = {
  0: 'Anton',
  1: 'Pavel',
  2: 'Ivanna',
};

const namesArray = new Array('Anton', 'Antonina', 'Feofan', 'Natasha');

const arr = ['Anton', 'Antonina', 'Feofan', 'Natasha'];

// создайте массив
// положите в него 3 любых значения с помощью метода push
// удалите последнее значение из массива
// и сохраните в переменную deleted

// arr.push('element1'); // вставляет в конец
// const deleted1 = arr.pop(); // удляет последний элемент

// // arr.unshift('element2', 'element3'); // вставляет в начало элементы и  двыигает уже существующие
// const deleted2 = arr.shift(); // удаляет с напчала

// в массиве начиная с третьего элемента
// удалить 2 элемента и вставить один новый элемент

// скопировать в новый массив первую половину старого

function highOrderFunction(power) {
  return function (number) {
    return number ** power;
  };
}

function test() {
  console.log('меня передали другйо');
}

const maleNames = ['Anton', 'Pavel', 'Ivan'];
const femaleNames = ['Maria', 'Natasha', 'Masha'];

const names = maleNames.concat(femaleNames, 'Igor');

names.forEach(callback);

function callback(currentName, index) {
  console.log(`${currentName} имеет индекс ${index} из массива names`);
}

// создайте массив чисел
// с помощью метода forEach выведите в консоль
// значение каждого числа в кубе
const numbers = [5, 8, 2, 3, 42, 69, 420, 15, 0.5, 7];
numbers.forEach(numbersCallback);
function numbersCallback(number) {
  console.log(number ** 3);
}
// * выводить в консоль квадрат чисел с четным индексом
// * а для нечетных индексов выводить значение чисел в кубе
numbers.forEach(numbersCallbackHard);
function numbersCallbackHard(number, index) {
  if (index % 2 === 0) {
    console.log(number ** 2);
  } else {
    console.log(number ** 3);
  }
}
// console.log('============================================')
for(let i = numbers.length / 2;i <= numbers.length; i++) {
  console.log(numbers[i] ** 3)
}