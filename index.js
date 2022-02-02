'use strict';

// let myFirstName = 'Kirill';
// let myLastName = 'Secret';

// let student1FirstName = 'Petya';
// let student1LastName = 'Petrov';

// let student2FirstName = 'Natasha';
// let student2LastName = 'Sidorova';

// function greet(firstName, lastName) {
//   return 'Hello '+ firstName + ' ' + lastName
// }

const teacher = {
  firstName: 'Kiril',
  lastName: 'Secret',
  weight: 900,
  isMale: true,
  nullProperty: null,
  undefinedProperty: undefined,
  address: {
    country: 'UA',
    city: 'ZP',
    street: 'nope',
  },
  sayHello: function () {
    alert('Привет');
  },
};

const student1 = {
  firstName: 'Kirill',
  lastName: 'Petrov',
  weight: 85,
};

// ERROR!
// teacher = {
//   firstName: 'Kirill',
//   lastName: 'Petrov',
//   weight: 85
// }

// перезапись свойств обьекта
// или создание новых свойств
// уже существующему обьекту
teacher.firstName = 'Vasya';

// удаление свойства
delete teacher.address;

// не алертите обьекты
// alert(student1);

function greet(person) {
  if (
    typeof person.firstName === 'string' &&
    person.firstName !== '' &&
    typeof person.lastName === 'string' &&
    person.lastName !== ''
  ) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
  }
  return 'Неверные данный, нужен пользователь';
}

const cat1 = {
  name: 'Pushok',
  breed: 'Maine Coon',
  age: 3,
  isMale: true,
  meow: function () {
    return 'Meow';
  },
};

const cat2 = {
  name: 'Vas`ka',
  breed: 'Persian',
  age: 2,
  isMale: true,
  meow: function () {
    return 'Meow';
  },
};

const cat3 = {
  name: 'Pushok',
  brd: 'Maine Coon',
  age: 3,
  isMale: true,
  meow: function () {
    return 'Meow';
  },
};

function Cat(name, breed, age, isMale) {
  // debugger;
  this.meow = function () {
    return 'Meow';
  };

  this.name = name;
  this.breed = breed;
  this.age = age;
  this.isMale = isMale;

  return this;
}

const cat4 = new Cat('Barsic', 'siameese', 3.5, true);

// const cat5 = Cat('Ivan', 'dvorovoi', 50, true);

/* 
сделайте функцию конструктор Car
у машины есть следубющие свойства
марка
модель
цвет
год выпуска
расход топлива  (число, литров на километр)
обьем бака (число)

машина должна уметь ехать (метод обьекта)
*/

function Car(
  manufacturer,
  model,
  color,
  releaseYear,
  fuelConsumption,
  fuelVolume
) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.fuelConsumption = fuelConsumption;
  this.fuelVolume = fuelVolume;

  this.drive = function () {
    return 'мы едем';
  };

  this.getDrivedDistance = function () {
    return this.fuelVolume * this.fuelConsumption;
  };

  return this;
}

const car = new Car('Toyota', 'Camry', 'black', 2022, 8.3, 60);

const car2 = new Car('Toyota', 'Camry', 'black', 2022, 15, 100);
// const car3 = new Car('Toyota', 'Camry', 'black', 2022);

car.test = function () {
  // returns car
  return this;
}

function tst() {
  // undefined
}