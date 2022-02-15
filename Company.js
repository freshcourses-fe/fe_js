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
    this.counter = 0;
  }

  setName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Invalid data, name must be string');
    }

    if (newName.trim() === '') {
      throw new Error('Name must be not empty');
    }

    this.name = newName;
  }

  get name() {
    this.counter++;
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

  getFullName = () => `${this.name} ${this.surname}`;

  isAdult = () => this.age >= 18;
}

const user = new User('Ivan', 'Ivanov', 42);
const user1 = new User('Ivan', 'Ivanov', 12);
const user2 = new User('Test', 'Testovich', 50);
