// function expression
const testVar = 1;

const askUser = function (testName, answer) {
  const yesAnswer = 'da';
  const noAnswer = 'net';

  if(testName === undefined || answer === undefined) {
   return 'не хватает данных';
  }

  console.log(testVar);

  if (yesAnswer === answer) {
    return 'Bye ' + testName;
  }

  if (noAnswer === answer) {
    return 'Hello ' + testName;
  }
};

// const userName = prompt('Enter name');
// const userAnswer = prompt('Вы уже уходите?');

// const result = askUser(userName, userAnswer);

// console.log(testName);
// alert(result);