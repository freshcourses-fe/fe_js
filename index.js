'use strict';

const prototype = {
  greet: function () {
    return `Hello ${this.name} ${this.lastName}`;
  },
  endCall: function () {
    return `Your call ended`;
  },
  password: 1234,
  accessLevel: 'user',
};

const obj1 = {
  name: 'Test',
  lastName: 'Testovich',
  password: 9876,
};
obj1.__proto__ = prototype;

const obj2 = {
  name: 'Null',
  lastName: 'Nullenko',
  __proto__: prototype,
};
/*
  ====================== User PRototypes ====================
*/
const userProto = {
  write: function () {
    return 'write';
  },
};

const moderProto = {
  deleteMessage: function () {
    return 'delete msg';
  },
  __proto__: userProto,
};

const adminProto = {
  delteUser: function () {
    return 'delete user';
  },
  __proto__: moderProto,
};

const user1 = {
  name: 'user',
  __proto__: userProto,
};

const user2 = {
  name: 'moder',
  __proto__: moderProto,
};

const user3 = {
  name: 'admin',
  __proto__: adminProto,
};
