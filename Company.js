class CompanyClass {
  constructor(name, address, type, employeeList = []) {
    this.name = name;
    this.address = address;
    this.type = type;
    this.employeeList = employeeList;
    if (true) {
      this.test = 'test';
    }
  }

  addEmployee(employee) {
    debugger;
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
    if (typeof name !== 'string' || typeof surname !== 'string') {
      throw new TypeError(
        'Invalid data, name and surname must be strings and age must be number'
      );
    }
    if (name.trim() === '') {
      throw new Error('Name must be not empty');
    }
    if (surname.trim() === '') {
      throw new Error('Surname must be not empty');
    }

    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  set age(newAge) {
    if (typeof newAge !== 'number') {
      throw new TypeError('age must be number');
    }
    if (newAge > 150 || newAge < 0 || isNaN(newAge)) {
      throw new RangeError('Age must be normal');
    }

    this._age = newAge;
  }

  get age() {
    return this._age;
  }

  getFullName = () => `${this.name} ${this.surname}`;

  isAdult = () => this.age >= 18;
}

const user = new User('Ivan', 'Ivanov', 42);
const user1 = new User('Ivan', 'Ivanov', 12);
const user2 = new User('Test', 'Testovich', -500);
