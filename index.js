const obj = {
  firstName: '',
  lastName: '',
  age: 10,
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
  hardDriveInfo: { amount, unit },
  hardDriveInfo,
  unit: ramUnit
} = nasaPc;


console.log(ram, ramUnit);
