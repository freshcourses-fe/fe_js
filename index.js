'use strict';

function Phone(model, manufacturer, yearOfCreation, price) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.yearOfCreation = yearOfCreation;
  this.price = price;
  // this.__proto__ = phonePrototype;
}

function PhonePrototype() {
  this.call = function () {
    return 'you can call abonents';
  };

  this.endCall = function() {
    return 'Call ended';
  }
}

// const phonePrototype = new PhonePrototype();
// Phone.prototype = phonePrototype;

Phone.prototype = new PhonePrototype();

const phone1 = new Phone('X', 'Iphone', 2018, 9999999);
const phone2 = new Phone('Galaxy Note X', 'Samsung', 2015, 9999999);