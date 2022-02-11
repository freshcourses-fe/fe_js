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
const sum = (...numbers) => numbers.reduce((sum, number) => +sum + +number);

function func(important, ...rest) {
  console.log(important);
  console.log(rest);
}
// 2 , 2 , 2 = 6
// 10 , 5, 0 = 15
// 1 = 1
// -100, -200, -300, -400 = -1000

const nums = [8, 41, 984, 315, 8975, 3545, 6545213];
const negativeNums = [-8, -41, -984, -315, -8975, -3545, -6545213];
const arr = [[1, [2, [3]]], 4, 5, 6];

const strings = ['test', 'tst123', 'no', 'yes', 'maybe'];
const combinedNUms = [...nums, ...negativeNums, ...strings];
sum(...nums);

const obj1 = {
  name: 'test',
};

const obj2 = {
  lastName: 'Testovich',
};

const user = {
  ...obj1,
  name: obj1.name,
  ...obj2,
  address: { city: 'ZP' },
  ...nums,
};

// const options = {
//   ...defaultOptions,
//   ...userOptions
// }
// const uberArray= [...user];
// sum(...user)

// console.log(arr[0], arr[1], arr[2], arr[3]);

// const users = [
//   {
//     name: 'User',
//     lastName: 'userovich',
//   },
//   {
//     name: 'Test',
//     lastName: 'Testovich',
//   },
//   {
//     name: 'Null',
//     lastName: 'Nullov',
//   },
//   {
//     name: 'Undefined',
//     lastName: 'Undefinenko',
//   },
// ];

// function greet(user) {
//   return `Hello ${user.name} ${user.lastName}`
// }

const symbol1 = Symbol('test');
const symbol2 = Symbol('test');

const symbol3 = symbol1;

const obj = {
  secret: 'secret data',
  0: 'secret data',
  [symbol1]: 'secret data',
};

const object = {
  0: 10,
  1: 15,
  2: 20,
  length: 3,
  [Symbol.iterator]: function () {
    const context = this;
    let i = 0;
    const returnObject = {
      next: function() {
        return {
          done:  i >= context.length,
          value: context[i++]
        }
      }
    };

    return returnObject;
  },
};

for(const value of object) {
  console.log(value);
}

// for(const value of obj ) {
//   console.log(value);
// }