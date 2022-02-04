'use strict';

const maleNames = ['Anton', 'Pavel', 'Ivan'];
const femaleNames = ['Maria', 'Natasha', 'Masha', 'Anton'];
const otherNames = ['Anton', 'Pavel', 'Anton', 'Petka'];

const names = maleNames.concat(femaleNames, otherNames);

const witoutAntons = names.filter(callback);

function callback(currentName, index, arr) {
  return currentName !== 'Anton';
}

const users = [
  { name: 'Ivan', isAdult: true },
  { name: 'Masha', isAdult: true },
  { name: 'Anton', isAdult: false },
];

const adults = users.filter(function(user, index, arr) {
  return user.name === 'Anton';
});
