const input1 = +prompt('Enter num 1');
const input2 = +prompt('Enter num 2');

const result =  input1 + input2;

const checkResult = isNaN(result);

if(checkResult === true){
  alert('ERROR');
} else {
  alert(result);
}
