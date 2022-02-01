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
  firstName : 'Kiril',
  lastName : 'Secret',
  weight: 900,
  isMale: true,
  nullProperty: null,
  undefinedProperty: undefined,
  address: {
    country: 'UA',
    city: 'ZP',
    street: 'nope'
  },
  sayHello: function () {
    alert('Привет');
  }
};

const student1 = {
  firstName: 'Kirill',
  lastName: 'Petrov',
  weight: 85
}

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
alert(student1);