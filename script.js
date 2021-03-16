'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
  <div class="movements__value">${mov}€</div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayMovements = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

calcDisplayMovements(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * 0.012)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* 
/////////////////////////////////////////////////
// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' | '));
 */

// FOROF OR FOREACH LOOP ARRAY

//for (const movement of movements) {
/* for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------------- FOREACH ----------');

movements.forEach((mov, i) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
 */
// MAP
/* currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
 */
// CHALLENGE
// "Dog number 1 is an adult, and is 5 years old"
// "Dog number 2 is still a puppy"
/* const juliaPets = [3, 5, 2, 12, 7];
const katesPets = [4, 1, 15, 8, 3];
const petsResearch = [...juliaPets.slice(1, -2), ...katesPets];
//const juliasPetsCorrected = juliaPets.slice(1, -2);
//console.log(juliasPetsCorrected);

petsResearch.forEach((age, i) => {
  if (age > 3) {
    console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
  } else {
    console.log(`Dog number ${i + 1} is stil a puppy.`);
  }
}); */
/* const checkDogs = (juliasDogs, katesDogs) => {
  const juliasDogsCorrected = juliasDogs.slice();
  juliasDogsCorrected.splice(0, 1);
  juliasDogsCorrected.splice(-2);
  console.log(juliasDogsCorrected);
  const dogs = juliasDogsCorrected.concat(katesDogs);
  dogs.forEach((dog, i) => {
    if (dog > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is stil a puppy.`);
    }
  });
};
//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */

// LOOPING OVER THE ARRAY ** MAP / FOR OF
/* const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions); */

// FILTER
/* 
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawls = movements.filter(mov => mov < 0);

console.log(withdrawls);
 */

// REDUCE
/* const balance = movements.reduce(
  (acc, cur, i) =>
    //console.log(`Iteration ${i}: ${acc}`);
    acc + cur,
  0
);
console.log(balance); */
/* 
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
 */
/* const calcAverageHumanAge = function (ages) {
  //humanAgeDogs =
  ages.map(ages <= 2 ? 2 * ages : 16 + ages * 4);
  console.log(ages);
}; */
// CHALLENGE #2
/* const calcAverageHumanAge = function (ages) {
  const humanAgeDogs = ages.map(ages => (ages <= 2 ? ages * 2 : 16 + ages * 4));

  const humanAgefilter = humanAgeDogs.filter(age => age > 18); */

/*   const av =
    humanAgefilter.reduce((acc, age) => acc + age, 0) / humanAgefilter.length;
  return av;
 */
/* const av = humanAgefilter.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return av;
};
*/
/* const calcAverageHumanAge = ages =>
  ages
    .map(ages => (ages <= 2 ? ages * 2 : 16 + ages * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); */
/* 
const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
 */
/* 
const firtWithDrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firtWithDrawal);
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
 */

/* for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  } else {
  } 
  //console.log(acc);
} */
