'use strict';

function MyArray() {
  this.length = 0;
}

function MyArrayProto() {
  this.push = function (...values) {
    for (let i = 0; i < values.length; i++) {
      this[this.length++] = values[i];
    }

    return this.length;
  };
}

MyArray.prototype = new MyArrayProto();

