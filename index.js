/*
Создать класс Animal и унаследовать от него несколько других животных, 
например льва  и змею 
у них будут клички
Они долны уметь есть двигатсья есть и говорить (издавать звуки)
Создать класс дрессировщика, котрый будет иметь методы, 
которые будут заствалять дрессируемое 
животное делать то или иное действие
*/

class Animal {
  constructor(type, nickname) {
    this.type = type;
    this.nickname = nickname;
  }

  speak() {
    return `Животное ${this.nickname} издает звуки`;
  }
}

class Snake extends Animal {
  constructor(nickname) {
    super('Змея', nickname);
  }

  speak() {
    return `${this.type} ${this.nickname} шипит`;
  }
}

class Cat extends Animal {
  constructor(nickname) {
    super('Кот', nickname);
  }

  speak() {
    return `${this.type} ${this.nickname} мяукает`;
  }
}

class Trainer {
  trainSpeech(animal) {
    return animal.speak();
  }
}

const animal = new Animal('животное', 'Пушок');
const snake = new Snake('Ефрасинья Петровна');
const cat = new Cat('Симба');

const trainer = new Trainer();

function a(condition) {
  if (condition) {
    // логика 1 (цикл)
    return `1`;
  }

  return `0`;
}

function createAnimals(amount = 1) {
  const result = [];
  for (let i = 0; i < amount; i++) {
    const newAnimal = new Animal(`Animal  ${i + 1}`, `Name ${i + 1}`);
    result.push(newAnimal);
  }

  return result;
}



function b(condition) {
  if (condition) {
    // логика 2 (switch)
    return `tesfa`;
  }

  return `sadfdsfgdsg`;
}

function c(condition, options) {
  if (condition) {
    return options.successResult;
  }

  return options.failResult;
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculator(a, b, operator) {
  switch (operator) {
    case '+': {
      return sum(a, b);
    }
    case '-': {
      return subtract(a, b);
    }
  }
}
