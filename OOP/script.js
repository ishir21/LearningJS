'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const ishir = new Person('Ishir', 2002);
// console.log(ishir);

// Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// ishir.calcAge();

// console.log(ishir.__proto__);
// console.log(ishir.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(ishir));

/// Coding challenge 1

// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h

// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// mercedes.brake();
// mercedes.accelerate();
// mercedes.brake;

//class declaration

// class PersonClass {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   //getters and setters
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   //Creating static methods

//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }
// }
// const ishir2 = new PersonClass('Ishir Agrawal', 2002);
// console.log(ishir2);
//This is same as method in the class
// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// ishir2.greet();
// console.log(ishir2.age);
// PersonClass.hey();

// getters and setters

const account = {
  owner: 'Ishir',
  movements: [300, 439, 892, 100],

  get latest() {
    return this.movements.slice(-1).pop();
  },
};

console.log(account.latest);

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// const advika = Object.create(PersonProto);
// advika.init('Advika', 2007);
// advika.calcAge();

/// Coding challenge - 2

// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     speed = speed * 1.6;
//     this._speed = speed;
//   }
// }

// const ford = new Car('Ford', 120);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);

// Inheritance between classes using constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //Implementing inheritance
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2003, 'Computer Science');
mike.introduce();
mike.calcAge();

// Coding challenge 3

// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 10;
//   this.charge--;
//   console.log(
//     `${this.make} is going at a speed of ${this.speed} km/h, with a charge of ${this.charge} %`
//   );
// };

// const tesla = new EV('Tesla', 120, 80);
// tesla.chargeBattery(100);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// Inheritance between classes using ES6 Classes

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  //getters and setters
  get age() {
    return 2022 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full Name`);
  }
  get fullName() {
    return this._fullName;
  }

  //Creating static methods

  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

//creating a new studentclass which will inherit personclass
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const arushi = new StudentClass('Arushi Jain', 2002, 'CA');
arushi.introduce();

// Inheritance between classes using Object.create

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2004, 'Computer');
jay.introduce();
console.log(jay);
jay.calcAge();

// Coding challenge 4
// Your tasks:

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!

// Test data:

// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is going at a speed of ${
        this.speed
      } km/h having a charge of ${this.#charge}`
    );
  }
}

const rivian = new EVCl('Tesla', 120, 69);
