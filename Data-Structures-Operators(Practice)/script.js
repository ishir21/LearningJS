'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
  orderDelievery: function ({ time, address, MainIndex, starterIndex }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[MainIndex]} will be deleiverd to ${address} at ${time}!`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//The for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1}:${el}`);
// restaurant.orderDelievery({
//   time: '23:30',
//   address: 'fjfflflf',
//   MainIndex: 2,
//   starterIndex: 2,
// });

//The rest operator

//SPREAD because on right side of =
// const arr = [1, 2, ...[3, 4]];

//REST because on left side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

//objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(4, 7, 9, 6, 8, 145);
// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('jfjfflk', 'gkjgggg', 'foioew');

/*
//The spread operator

const arr = [7, 8, 9];
const newArr = [7, 8, 9, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const join = [...newMenu, ...mainMenuCopy];
console.log(join);

const str = 'Ishir';
const letters = [...str, '', 'A'];
console.log(letters);

const ingredients = [
  // prompt('Ingredient 1!'),
  // prompt('Ingredient 2!'),
  // prompt('Ingredient 3!'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, founder: 'Ishir Agrawal' };
console.log(newRestaurant);
*/

/*
//Destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 9;
const obj = { a: 23, b: 7, c: 5 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/
//
/*
// Destructuring Arrays

let [main, secondary] = restaurant.categories;
console.log(main, secondary);
//to swap two elements
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Defalult Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

//////////////////////////////
/* CODING CHALLENGE 1
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
