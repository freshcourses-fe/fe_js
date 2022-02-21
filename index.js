const map = new Map();

map.set('name', 'Test');
map.set('123', true);
map.set(123, false);
map.set(123, 'fals21312321e');

const data = map.get('name');
const key = { name: 'Test' };
map.set(key, { password: '12345admin' });

const func = function () {
  return 'hello';
};

const arr = [123];

map.set(func, 1);

map.set(arr, true);

const map2 = new Map([
  [1, 'test'],
  [arr, 'new'],
]);

const isArrAKey = map2.has(arr);
const isFuncAKey = map2.has(func);

const delete1 = map.delete(arr);
const delete2 = map.delete(arr);

// map.clear();

const keys = [];

for (const key of map.keys()) {
  keys.push(key);
}

const values = [];

for (const value of map.values()) {
  values.push(value);
}

const entries = [];

for (const entry of map.entries()) {
  entries.push(entry);
}

const mapCopy = new Map(entries);

/*
есть 2 юзера с полями
id
name 
lastName

есть 2 массива с сообщениями пользователя

вам нужно создать функцию которая приймет 
данные от юзера
и вернет массив с его сообщениями

*/

const user1 = {
  id: 5,
  name: 'John',
  lastName: 'Doe',
};

const user2 = {
  id: 5047,
  name: 'Jane',
  lastName: 'Doe',
};

const user3 = {
  id: 12,
  name: 'John',
  lastName: 'NotDoe',
};

const johnMessages = ['Hi', 'Bye'];

const janeMessages = ['Hi', 'Bye', 'NO', 'Yes'];

const usersToMessages = new Map();

usersToMessages.set(user1.id, johnMessages);
usersToMessages.set(user2.id, janeMessages);

function getUserMessages(userId) {
  if (usersToMessages.has(userId)) {
    return usersToMessages.get(userId);
  }

  throw new Error('404 User not found');
}

const getUserMessagesArrow = (userId) =>
  usersToMessages.has(userId)
    ? usersToMessages.get(userId)
    : new Error('404 User not found');

/*
  есть строка текста на языке. 
  Получить на её основании 
  строку текста на другом языке
*/
const untranslatedText = 'Привет меня зовут Вася';
const translatedText = 'Hello my name is Vasya';

const dictionary = new Map([
  ['привет', 'hello'],
  ['меня', 'my'],
  ['зовут', 'name is'],
  ['вася', 'Vasya'],
  ['кот', 'cat'],
  ['собака', 'dog'],
]);

// function translate(...words) {
//   let translated = '';
//   for (let i = 0; i < words.length; i++) {
//     translated += `${dictionary.get(words[i])} `;
//   }

//   return translated;
// }

function translate(str) {
  const words = str.toLowerCase().split(' ');

  const result = [];

  for (const word of words) {
    if (dictionary.has(word)) {
      result.push(dictionary.get(word));
    } else {
      result.push(word);
    }
  }

  result[0] = result[0].toUpperCase();

  return result.join(' ');
}

const res = translate('Привет', 'меня', 'зовут', 'Вася');
