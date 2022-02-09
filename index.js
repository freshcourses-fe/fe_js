'use strict';

try {
  // опасный код
  const phone1 = new Phone('X', 'Iphone', 2018, 9999999);
  const phone2 = new Phone('Galaxy Note X', 'Samsung', 2015, 9999999);

  const newUser = new User('Item', 'Itemov');
  // const newUser2 = new User('', 'Test');
  // throw new Error('ужас');
  const moder = new Moderator('Moder', 'MOderovich');
  console.log('test');
} catch (error) {
  // обрабатываем нашу ошибку
  console.error(error);

  console.log(error.message);

  if (error.message === 'ужас') {
    console.log('все плохо');
  }
} finally {
  // блок который выполняется всегда
  console.log('все закончилось');
}

const bool = new Boolean(true);

const num = Number(150);

const str = String('test');


console.log(str.length);

/*
  создайте функцию которая принимает строку
  и возвращает количество гласных букв в ней
  a , e , o , i , u
*/

// ============================================

function Phone(model, manufacturer, yearOfCreation, price) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.yearOfCreation = yearOfCreation;
  this.price = price;
  // this.__proto__ = phonePrototype;
}

function PhonePrototype() {
  this.call = function () {
    return 'you can call abonents';
  };

  this.endCall = function () {
    return 'Call ended';
  };
}

Phone.prototype = new PhonePrototype();

function sum(number1, number2) {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    return number1 + number2;
  }

  throw new TypeError('Ожидаем числа в качестве параметров');
}

function MyArray() {
  this.length = 0;

  this.push = function (value) {
    this[this.length] = value;

    this.length++;

    return this.length;
  };
}

function User(name, lastName) {
  if (typeof name !== 'string' || typeof lastName !== 'string') {
    throw new TypeError('Enter strings');
  }
  if (name === '' || lastName === '') {
    throw new Error('Strings cannot be empty');
  }
  this.name = name;
  this.lastName = lastName;

  return this;
}

function UserPrototype() {
  this.name = 'Adam';
  this.lastName = 'Adamovich';

  this.getFullName = function () {
    return `${this.name} ${this.lastName}`;
  };

  this.walk = function () {
    return `${this.name} ${this.lastName} is walking`;
  };

  return this;
}

const userPrototype = new UserPrototype();

User.prototype = userPrototype;

function ModeratorPrototype() {
  this.run = function () {
    return `${this.name} ${this.lastName} is running`;
  };

  this.deleteMessage = function () {
    return `Message is deleted`;
  };
}

ModeratorPrototype.prototype = userPrototype;

function Moderator(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  return this;
}

const moderatorPrototype = new ModeratorPrototype();

Moderator.prototype = moderatorPrototype;
