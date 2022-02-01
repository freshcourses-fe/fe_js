// 3)  Найти сумму чисел в пределах от 1 до 100.

function task3For() {
  let result = 0;

  for (let i = 1; i <= 100; i++) {
    result = result + i;
  }

  return result;
}

function task3While() {
  let result = 0;
  let i = 1;

  while (i <= 100) {
    result += i;
    i++;
    // result += i++;
  }

  return result;
}

// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
function task4While() {

  while (true) {
    const answer = +prompt('введите реузльтат 2 + 2 * 2');
    if(answer === 6) {
      break;
    }
  }
}

let isUserAnswered = false;

// for(let i = 0; i < 1;) {
//   const answer = +prompt('введите реузльтат 2 + 2 * 2');
//   if(answer === 6) {
//     i++;
//     break;
//   }
// }

for(let i = 0; i < 5 ;i++) {
  const answer = +prompt('введите реузльтат 2 + 2 * 2');
  if(answer === 6) {
    isUserAnswered = true;
    break;
  }
}

if(isUserAnswered) {
  alert('молодец')
} else {
  alert('огурец')
}