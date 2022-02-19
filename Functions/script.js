'use strict';
// using default parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 1500 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 3, 2000);
// createBooking('LH123', 3);

// const flight = 'LH1234';
// const ishir = {
//   name: 'Ishir Agrawal',
//   passport: 2939302230,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport == 2939302230) alert('Checked In');
//   else alert('Wrong passport');
// };
// checkIn(flight, ishir);
// console.log(flight);
// console.log(ishir);
// if you observe carefully the flight variable remains the same even after we changed it's value in the function because we create an exact copy of it.
// whereas the ishir object has the modifications we made in the function because for an object they point to the same object in the memory heap

// creating higher order functions

// const oneword = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('ishir is the best', upperFirstWord);
// transformer('ishir is the best', oneword);

// The call and apply methods

const airIndia = {
  airline: 'Air India',
  code: 'AI',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.code} ${flightNum}`, name });
  },
};
airIndia.book(269, 'Ishir Agrawal');
console.log(airIndia);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};
const book = airIndia.book;

// The call method will call the book function and set the this keyword to whatever is mentioned in the first argument of the function.
book.call(eurowings, 34, 'Ishir Agrawal');
console.log(eurowings);

//The bind method
// the bind method behaves in a similar fashion as the call method but instead of calling the function, it makes a new function

const bookEW = book.bind(eurowings);
const bookAI = book.bind(airIndia);
bookEW(69, 'Ishir Agrawal');
bookAI(48, 'Arushi Jain');

//with event listeners
airIndia.planes = 300;
airIndia.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', airIndia.buyplane.bind(airIndia));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.18);
console.log(addGST(500));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.options.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Immediately invoked function expression (IIFE)
(function () {
  console.log('This function will never run again');
})();

(() => console.log('This function will also never run again'))();
