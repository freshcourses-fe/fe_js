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


const newCompany = new CompanyClass(
  'Apple',
  {
    country: 'USA',
    state: 'California',
    city: 'LA',
  },
  'tech'
);

const newCompany2 = new CompanyClass(
  'Apple',
  {
    country: 'USA',
    state: 'California',
    city: 'LA',
  },
  'tech'
);
