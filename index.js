// const number = +prompt('Введите число');

// if (number >= 0) {
//   alert('число положительное');
// } else {
//   alert('число отрицательное');
// }

// number >= 0 ? alert('число положительное') : alert('число отрицательное');

const getMinNumber = function (number1, number2) {
  // if(number1 < number2) {
  //   return number1
  // } else {
  //   return number2
  // }

  return number1 < number2 ? number1 : number2;
};

// userRole === 'test'

// alert( getMinNumber(-200, 5) );

let isLigthTheme = true;


isLigthTheme ? 'light-theme-button' : 'dark-theme-button';
