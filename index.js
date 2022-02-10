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

const ceil = Math.ceil(5.5);
const floor = Math.floor(5.5);
const round = Math.round('asdasf.5');

const result = Math.pow(2, 3);

const func = function (param1) {
  const arrow = () => {
    console.log(this);
  };

  arrow();
};

const Func = function (param1) {
  debugger;
  this.param1 = param1;

  return this;
};

const ArrowFunc = (param1, param2) => {
  debugger;
  // console.log('arrow');
  // console.log(param1);
  // console.log(this);

  return this;
};

const obj = {
  name: 'Test',
  lastName: 'Test',
  phoneNumbers: ['064964684', '0324165468', '564546456'],
  getUserInfo: function () {
    return `${this.name} ${this.lastName} with phones: ${this.phoneNumbers}`;
  },
  getUserInfoArrow: () => {
    return `${this.name} ${this.lastName} with phones: ${this.phoneNumbers}`;
  },

  logPhones: function () {
    // for(let i = 0; i < this.phoneNumbers.length; i++) {
    //   console.log(`Номер телефона ${i + 1} : ${this.phoneNumbers[i]}`)
    // }

    // console.log(this)

    // const that = this;

    // this.phoneNumbers.forEach(function callback(phoneNumber, i) {
    //   console.log(that);
    //   console.log(`Телефон  №${i + 1} : ${phoneNumber}`);
    // });

    debugger;

    const arrow = (phoneNumber, i) => {
      console.log(this);
      console.log(`Телефон  №${i + 1} : ${phoneNumber}`);
    };

    this.phoneNumbers.forEach(arrow);
  },
};
// arrowFunc();

function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.name}  ${this.lastName}`;
  };

  this.getFullNameArrow = () => `${this.name} ${this.lastName}`;
}

const user = new User('Test', 'Test');

function sum(num1, num2) {
  console.log(arguments);
  return arguments[0] + arguments[1] + arguments[2];
}

const arrowSum = (num1, num2) => num1 + num2;
