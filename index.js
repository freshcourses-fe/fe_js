'use strict';

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

// const phonePrototype = new PhonePrototype();
// Phone.prototype = phonePrototype;

Phone.prototype = new PhonePrototype();

const phone1 = new Phone('X', 'Iphone', 2018, 9999999);
const phone2 = new Phone('Galaxy Note X', 'Samsung', 2015, 9999999);

// const user1 = {
//   name: 'Test',
//   lastName: 'Testovich',
// };

// const user2 = {
//   name: 'Undefined',
//   lastName: 'Undefinenko',
// };

// const userPrototype = {
//   name: 'Adam',
//   lastName: 'Adamovich',
//   getFullName: function () {
//     return `${this.name} ${this.lastName}`;
//   },
//   walk: function () {
//     return `${this.name} ${this.lastName} is walking`;
//   },
// };

// user1.__proto__ = userPrototype;
// user2.__proto__ = userPrototype;

// const user3 = {};
// user3.__proto__ = userPrototype;

function User(name, lastName) {
  if (typeof name !== 'string' || typeof lastName !== 'string') {
    throw new TypeError('Enter strings');
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

const newUser = new User('Item', 'Itemov');
const moder = new Moderator('Moder', 'MOderovich');

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
