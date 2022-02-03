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

arr.push('element1'); // вставляет в конец
const deleted1 = arr.pop(); // удляет последний элемент

arr.unshift('element2', 'element3'); // вставляет в начало элементы и  двыигает уже существующие
const deleted2 = arr.shift(); // удаляет с напчала

// в массиве начиная с третьего элемента
// удалить 2 элемента и вставить один новый элемент

// скопировать в новый массив первую половину старого

function highOrderFunction() {
  // func1();

  return function () {
    return true;
  };
}

function test () {
  console.log('меня передали другйо');
}