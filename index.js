'use strict';

const arr = [
  { name: 'test 1' },
  { name: 'test 2' },
  { name: 'test 3' },
  { name: 'test 4' },
  { name: 'test 5' },
  { name: 'test 6' },
];

for (let i = 1; i <= arr.length; i++) {
  console.log(arr[i]);
}

console.log('==================');
arr.forEach(callback);

function callback(value, i, array) {
  console.log(`${value} с индексом ${i}`);
}

const newArr = arr.map(mapCallback);

function mapCallback(item, i, array) {
  console.log(`${item} с индексом ${i}`);

  const obj = { value: 'test', name: item.name };
  // item.value = 'test';
  return obj;
}
