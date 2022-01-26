const userName = prompt('Enter name');
const userAnswer = prompt("Вы уже уходите?");

const yesAnswer = 'da';
const noAnswer = 'net';

if(yesAnswer === userAnswer){
  alert('Bye ' + userName);
} 

if(noAnswer === userAnswer){
  alert('Hello ' + userName);
} 
