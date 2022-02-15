class CompanyClass {
  constructor(name, address, type, employeeList = []) {
    this.name = name;
    this.address = address;
    this.type = type;
    this.employeeList = employeeList;

    if (Math.random() > 0.5) {
      this.test = 'test';
    }
  }

  addEmployee(employee) {
    this.employeeList.push(employee);
  }
}

/*
  созадть класс User
  у него есть свойства
  name
  surname
  age

  у него есть методы 
  getFullName()
  isAdult() 
*/

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = false;
    this.permissions = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Invalid data, name must be string');
    }

    if (newName.trim() === '') {
      throw new Error('Name must be not empty');
    }

    this._name = newName;
  }

  get surname() {
    return this._surname;
  }

  set surname(newSurname) {
    if (typeof newSurname !== 'string') {
      throw new TypeError('Invalid data, surname must be string');
    }

    if (newSurname.trim() === '') {
      throw new Error('surname must be not empty');
    }

    this._surname = newSurname;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (typeof newAge !== 'number') {
      throw new TypeError('Invalid data, age must be number');
    }

    if (newAge < 0 || newAge > 150) {
      throw new RangeError('age must be realistic');
    }

    this._age = newAge;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const user = new User('Ivan', 'Ivanov', 42);
const user1 = new User('Ivan', 'Ivanov', 12);
const user2 = new User('Test', 'Testovich', 50);

/*
  создать класс Moder
  у него есть свойства с геттерами и сеттерами
  name - string
  surname -string
  age - number
  email - string

// 
  у него есть методы 
  getFullName()
  isAdult() 
  createMessage() - пусть возвращают какие то строки
  deleteMessage() - пусть возвращают какие то строки
*/

class Moder extends User {
  constructor(name, surname, age, email) {
    super(name, surname, age);
    this.email = email;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    if (typeof email !== 'string') {
      throw new TypeError('Invalid data, email must be string');
    }

    if (email.trim() === '') {
      throw new Error('email must be not empty');
    }

    this._email = email;
  }

  createMessage(messageText) {
    return 'Message created';
  }

  deleteMessage(messageText) {
    return 'Message deleted';
  }
}

const moder = new Moder('Moder', 'Moderovich', 42, 'moder@moder.moder');
const moder2 = new Moder('Moder', 'Moderovich', 42, 'moder@moder.moder');

class Admin extends Moder {
  constructor(name, surname, age, email, address) {
    super(name, surname, age, email);

    this.address = address;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
  }

  ban(user) {
    if (user instanceof Admin) {
      throw new Error('Админы своих не бьют');
    }
    return (user.isBanned = true);
  }

  unban(user) {
    return (user.isBanned = false);
  }

  setName(user, newName) {
    user.name = newName;
  }
}

const admin = new Admin(
  'Tiran',
  'Tiranovich',
  12,
  'tiran2010@mylo.est',
  'address'
);
const admin1 = new Admin(
  'Tiran',
  'Tiranovich Sr',
  13,
  'tiran2011@mylo.est',
  'address'
);
// incapsulation

class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {}
}

class Square extends Figure {
  constructor(a) {
    super('Square');
    this.a = a;
  }

  getArea() {
    return this.a * this.a;
  }
}

class Circle extends Figure {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  // getArea() {
  //   return Math.PI * this.radius * this.radius;
  // }
}

const figure = new Figure('figure');
const square = new Square(5);
const circle = new Circle(10);
// polimorphism

function getFigureArea(figure) {
  if(figure instanceof Figure) {
    return figure.getArea()
  }

  throw new TypeError('Это не фигура');
}