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


// if( ' ' ) {
//   alert('два больше нуля')
// }

// const greetUser = function(userName) {
//   if(userName) {
//     alert('Hello ' + userName);
//   } else {
//     alert('Hello Anonym');
//   }
// }



const checkNumberAgainstOther = function (num1, num2) {
  debugger;
  if(typeof num1 === 'number' ) {
    if (num1 > num2) {
      console.log(num1 +' больше ' + num2);
    } else if (num1 < num2) {
      console.log(num1 +" меньше " + num2);
    } else if (num2 > num1) {
      console.log('test');
    } else {
      console.log(num1 +' равны ' + num2);
    }

  } else {
    console.log('Введите числа плз');
  }
};

const num1 = 5;

if(true) {
  var test1 = true;
  console.log(test1);
  console.log(num1);

  if(true) {
    const test2 = 12;
    console.log(test2);
    console.log(test1);
    console.log(num1);
  }

}

const testFunc = function() {
  var x = true;

  if(true) {
    var y = true;
  }

  console.log(y);
}
