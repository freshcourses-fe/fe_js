const result2 = getMinNumber2(1, 5);

// function expression
const getMinNumber = function (number1, number2) {
  return number1 < number2 ? number1 : number2;
};

// function declaration
function getMinNumber2(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

if(true) {
  // 
  'block 1'
} else {
  //
  'block 2'
}
// true ? 'block 1' : 'block 2';

const userName = prompt('Enter your name');
const isMale = confirm('Вы мужчина?');

const prefix = isMale ? 'Mr. ' : 'Mrs. ';
const message = 'Hello ' + prefix + userName;
alert(message);

// const result1 = getMinNumber(1, 5);

// let counter = 1;

// while (true) {
//   console.log(counter++);

//   if (counter > 5) {
//     break;
//   }
// }

// do {
//   console.log(counter++);

//   if (counter > 100) {
//     break;
//   }
// } while (true);
