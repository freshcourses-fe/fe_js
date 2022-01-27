const isEven = function (number) {
  return number % 2 === 0;
};

// const testNum = +prompt('chislo dlya proverki');

// const result = isEven(testNum);

// console.log(result);

const findMinNumberFromTwo = function (num1, num2) {
  if (num1 > num2) {
    return num2;
  }
  return num1;
};
