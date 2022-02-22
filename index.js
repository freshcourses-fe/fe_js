// let counter = 0;
// function myFunc() {
//   debugger;
//   counter++;
//   myFunc();
// }

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log('Go');

// function countdown(number = 10) {
//   debugger;
//   console.log(number);
//   if (number > 1) {
//     countdown(number - 1);
//   } else {
//     console.log('start');
//   }
// }

function toPower(number = 5, exp = 2) {
  // debugger;
  // if (exp === 1) {
  //   return number;
  // } else if (exp > 1) {
  //   return number * toPower(number, exp - 1);
  // } else if (exp === 0) {
  //   return 1;
  // } else {
  //   return 1 / (number * toPower(number, exp * -1 - 1));
  // }

  if (exp === 1) {
    return number;
  } else if (exp === 0) {
    return 1;
  }

  return exp > 1
    ? number * toPower(number, exp - 1)
    : 1 / (number * toPower(number, Math.abs(exp) - 1));
}

// написать рекрсивную функцию
// нахождение факториала числа

// 5! = 1 * 2 * 3 * 4 * 5 => 120
function getFactorial(number = 2) {
  if (number < 0) {
    throw new RangeError('Factorial of negative numbers doesnt exist');
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  return number * getFactorial(number - 1);
}

// переделать toPower так
// чтобы он мог принимать отрицательные степени числа

const binaryTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 2,
    },
  },
  right: {
    value: 3,
    left: {
      value: 8,
      right: {
        value: -5,
      },
    },
    right: {
      value: 20,
    },
  },
};

/**
 *
 * @param {object} tree
 * @param {number} tree.value - значение узла
 * @param {object} tree.left - узел слева
 * @param {object} tree.right - узел справа
 * @returns {number} сумма дерева
 */
function getTreeSum(tree) {
  let result = tree.value;

  if (tree.left) {
    result += getTreeSum(tree.left);
  }

  if (tree.right) {
    result += getTreeSum(tree.right);
  }

  return result;
}

/**
 * Эта функция складывает 2 числа
 * @param {number} a - число коорое возводим
 * @param {number} b - степень
 * @returns {number} результат возведения a в степень b
 */
function toPower2(a, b) {
  return a ** b;
}

toPower2('test', 2);

/**
 *
 * @param  {number[]} numbers - массив с числами
 * @returns
 */
function sum(numbers) {
  return numbers.reduce((sum, currentValue) => sum + currentValue);
}
