const set = new Set();

set.add(1);
set.add('test');
set.add(false);
set.add(1);
set.add('1');

set.delete(false);

set.delete([0]);

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
  push() {}

  static isMyArray(arg) {}
}
