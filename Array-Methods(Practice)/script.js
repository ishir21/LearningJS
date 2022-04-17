const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// THE MAP FUNCTION
const eurToUSD = 1.1;
// map will not mutate the old array, it will always return a new array
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

// using arrow functions
const movementsUSD = movements.map((mov) => mov * eurToUSD);
console.log(movements);
console.log(movementsUSD);

const movementsDesc = movements.map(
  (mov, i, arr) =>
    // if (mov > 0) {
    //   return `Movement ${i + 1}: You deposited ${mov}`;
    // } else {
    //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    // }
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
);
console.log(movementsDesc);

//THE FILTER FUNCTION
// it is used to filter out the values based on a particular condition

const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

//THE REDUCE FUNCTION
// the below function calculates the sum of all elements of movements
const balance = movements.reduce((acc, cur) => acc + cur, 0); // this is the initial value of accumulator
console.log(balance);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

//   const adults = humanAge.filter((age) => age >= 18);

//   const final = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return final;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1);
// console.log(avg2);

// Using FLAT and FLATMAP
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];
console.log(arr.flat());
const arr2 = [
  [[1, 2], 3],
  [4, 5, 6],
];
//this goes 2 levels deep
console.log(arr.flat(2));

// Sorting arrays

//strings
const owners = ["Ishir", "Advika", "Arushi", "Nisarg"];
console.log(owners.sort());
// remember the sort method overrides the original array
console.log(owners);
//Numbers
console.log(movements);
// sort method sorts the array in alphabetical order , in case of numbers too
console.log(movements.sort());
// sorting in ascending order
//return <0, A,B (keep order)
// return > 0, A,B (switch order)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
//sorting in descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

//more ways of creating and filling arrays
const newarr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty arrays + fill method
const x = new Array(7);
//the above method will create an empty array with 7
// elements
console.log(x);
x.fill(1, 3, 5);
// 1 refers the value to be filled
// 3 refers to the start index
// 5 refers to the end index
console.log(x);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).

// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((element) => (element.recommendedFood = element.weight ** 0.75 * 28));
console.log(dogs);
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? "much" : "less"}`);

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.forEach((dogs) => {
  if (dogs.curFood > dogs.recommendedFood) ownersEatTooMuch.push(dogs.owners);
  else ownersEatTooLittle.push(dogs.owners);
});
console.log(`${ownersEatTooMuch.flat().join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.flat().join(" and ")}'s dogs eat too much`);

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

const checkEating = (dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEating));
console.log(dogs.filter(checkEating));

const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
