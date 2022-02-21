const set = new Set([1, 2, 5, 86, 3, 8, 6, 8]);

set.add(1);
set.add('test');
set.add(false);
set.add(1);
set.add('1');

set.delete(false);

set.delete([0]);

const obj = {};

const obj2 = obj;

const symbol1 = Symbol();
const symbol2 = Symbol();
// set.clear();

// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });

const result = set.has(1);
const result2 = set.has(10);

// console.log('values');
// for(const value of set.values()) {
//   console.log(value);
// }
// console.log('keys');
// for(const value of set.keys()) {
//   console.log(value);
// }
// console.log('entries');
// for(const value of set.entries()) {
//   console.log(value);
// }

/*
  есть 2 массива с повторяющимися значениями
  воспользуясь setом удалите повторяющиеся значения

*/
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [-5, 80, 2, 15, 4];

const set2 = new Set([...arr1, ...arr2]);

// for(let i = 0; i < arr1.length; i++) {
//   set2.add(arr1[i]);
// }

// arr2.forEach((element)=> {
//   set2.add(element);
// });

const resultArr = [...set2];

class MyArray {
  constructor() {
    this.length = 0;
  }
  push(value) {
    this[this.length++] = value;

    return this.length;
  }

  concat(...args) {
    const newArr = new MyArray();

    // по циклу запушить все значения this в новый массив
    for (let i = 0; i < this.length; i++) {
      newArr.push(this[i]);
    }

    // по циклу проходимя по массиву аргументов

    // 2.1 проверить что элемент из args  - это массив

    // 2,2 если да то заупустить цикл для него и
    // внутри пушить элементы в новый массив

    // иначе просто запушит ьэлемент в новый массив

    // вернуть новый массив
    return newArr;
  }

  [Symbol.iterator]() {}

  static isMyArray(arg) {}
}

const myArr = new MyArray();


