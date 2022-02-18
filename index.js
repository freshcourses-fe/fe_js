const obj = {
  firstName: 'test',
  lastName: 'test',
  age: 10,
  address: {
    city: 'ZP',
  },
};

console.log(obj.age);

const nasaPc = {
  ram: 938,
  unit: 'Tb',
  hardDriveInfo: {
    amount: 29,
    unit: 'Pb',
  },
  cpus: [
    {
      name: 'Intel Pentium 3000',
      clockSpeed: 4,
      clockSpeedUnit: 'GHz',
    },
    {
      name: 'Intel Itanium 2',
      cores: [
        {
          id: 0,
          clockSpeed: 6,
          clockSpeedUnit: 'GHz',
        },
        {
          id: 1,
          clockSpeed: 6,
          clockSpeedUnit: 'GHz',
        },
        {
          id: 2,
          clockSpeed: 6,
          clockSpeedUnit: 'GHz',
        },
        {
          id: 3,
          clockSpeed: 6,
          clockSpeedUnit: 'GHz',
        },
      ],
    },
  ],
};

console.log(`${nasaPc.ram} ${nasaPc.ramUnit}`);

console.log(`${nasaPc.hardDriveInfo.amount} ${nasaPc.hardDriveInfo.unit}`);

const nasaPcHDDAmount = nasaPc.hardDriveInfo.amount;
const nasaPcHDDUnit = nasaPc.hardDriveInfo.unit;

console.log(nasaPc.cpus[0].name);

const {
  ram,
  hardDriveInfo: { amount, unit }, // вложенная деструктуризация
  hardDriveInfo,
  unit: ramUnit, // переименование переменной
  cpus: [pentiumCPU, second],
} = nasaPc;

const { name, clockSpeed } = pentiumCPU;

const arr = [1235, 5645787, 89797, 7909, [1, 2, 3]];

const [fist, ...restArr] = arr;

const { age, address, ...user } = obj;

// создать обьект с вложенностью и деструктуризировать его

console.log(ram, ramUnit);

const obj1 = {
  _name: 'test',
  // get name () {
  //   return this._name
  // },

  // set name (value) {
  //   this._name = value;
  // }
};

function greetUser({ firstName, lastName }, second) {
  for (let i = 0; i < 100; i++) {
    return `Hello ${firstName} ${lastName} ${second}`;
  }
}
