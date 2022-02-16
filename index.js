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