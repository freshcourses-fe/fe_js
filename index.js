'use strict';
const user1 = {
  name: 'Feofan',
  age: 12
};

const user3 = user1;

// цикл для обхода по свойству обьектов
for(const key in user1) {
  console.log(user1[key]);
}

const user2 = {
  name: 'Feofan',
  age: 12
}

const string1 = 'test';
const string2 = 'test';
// опциональная последовательность
// не упадет с ошибкой если не будет вложенных обьектов
user1?.address?.city?.street

user1['name'];