'use strict';

const maleNames = ['Anton', 'Pavel', 'Ivan'];
const femaleNames = ['Maria', 'Natasha', 'Masha'];
const otherNames = ['Anton', 'Pavel', 'Ivan', 'Petka'];

// const callback = function (name, index, arr) {
//   debugger;
//   if (femaleNames === arr) {
//     return `${name} Pupkina`;
//   } else if (maleNames === arr) {
//     return `${name} Pupkin`;
//   }
//   return `${name} Sirko`;
// };
const callback = function (name, index ) {
  // debugger;
  if (femaleNames.includes(name) ) {
    return `${name} Pupkina`;
  } else if (maleNames.includes(name) ) {
    return `${name} Pupkin`;
  }
  return `${name} Sirko`;
};

const malesWithLastName = maleNames.map(callback);

const femalesWithLastNames = femaleNames.map(callback);

const othersWithLastName = otherNames.map(callback);

const names = malesWithLastName.concat(femalesWithLastNames, 'Igor Dudkin', othersWithLastName);

// const newArr = names.map(maleCallback);

// function
