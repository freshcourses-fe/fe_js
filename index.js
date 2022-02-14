'use strict';

function Company(name, address, type, employeeList = []) {
  this.name = name;
  this.address = address;
  this.type = type;
  this.employeeList = employeeList;

  if(true) {
    this.test = 'test'
  }
}

function CompanyProto() {
  this.addEmployee = function (employee) {
    this.employeeList.push(employee);
  };
}

Company.prototype = new CompanyProto();

const company1 = new Company(
  'Apple',
  {
    country: 'USA',
    state: 'California',
    city: 'LA',
  },
  'tech'
);

// const company2 = Company(
//   'Apple',
//   {
//     country: 'USA',
//     state: 'California',
//     city: 'LA',
//   },
//   'tech'
// );
