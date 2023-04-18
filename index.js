/*
var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension.");
} else if (age < 65 && age == 18) {
  console.log("Each month you get a salary.");
} else if (age < 18) {
  console.log("You get an allowance.");
} else {
  console.log("The value of the age variable is not numerical.");
}
*/

/*
var day = "Friday";

switch (day) {
  case "Monday":
    console.log("Go to school.");
    break;
  case "Tuesday":
    console.log("Do your homework.");
    break;
  case "Wednesday":
    console.log("Go to the gym.");
    break;

  case "Thursday":
    console.log("Do something.");
    break;
  case "Friday":
    console.log("Go out with some friends.");
    break;
  case "Saturday":
    console.log("Go to the church");
    break;
  case "Sunday":
    console.log("Get ready! A new week has started.");
    break;
  default:
    console.log("The is no such day");
}
*/

/*
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Counting Completed!");
*/

/*
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

console.log("Countdown finished!");
*/

/*
var i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

console.log("Counting completed!");
*/

/*
var i = 5;

while (i >= 1) {
  console.log(i);
  i = i - 1;
}

console.log("Countdown finished!");
*/

/*
var year = 2018;

while (year <= 2022) {
  console.log(year);
  year++;
}
*/

// A cool way to output things on the browser's console:

/*
var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}
*/

/*
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal.");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
*/

/*
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("--No match found at", i);
    }
  }
}

letterFinder("test", "t");
*/

// Creating objects using the dot notation

/*
let car = {};

car.color = "silver";
car.doors = 4;
car.priceUSD = 10000;
car.owner = "Daniel";
car.previousOwner = "Unknown";

car.doors = 2;

console.table(car);
*/

// Object Literals and the Brackets Notation
/* 
There's one really useful thing that bracket notation has
but is not available in the dot notation: It can evaluate expressions. For example:
*/

/*
var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};

for (let i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
*/

// Arrays are Objects - Practicing

/*
function arrayBuilder(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

var cars = arrayBuilder("Ferrari", "BMW", "Chevrolet");

console.table(cars);
*/

// Math Object

/*
let number = Math.pow(2, 3);
console.log(number);
*/

/*
let randomNumber = Math.random();
let roundedUpwards = Math.ceil(randomNumber * 10);

console.log(roundedUpwards);
*/

// Exercise - Crating arrays and objects

/*
let clothes = [];
clothes.push("t-shirt");
clothes.push("pants");
clothes.push("underwear");
clothes.push("skirt");
clothes.push("bra");

clothes.pop();
clothes.push("Nike T-shirt");
console.log(clothes[2]);

let favCar = {};
favCar.color = "black";
favCar.covertible = true;

console.log(favCar);
*/

// Object Methods
/*
If the function is a property of an object, it is then referred to as a method.
/*
All the key-value pairs in an object are referred to simply as properties. However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods. For example:
*/

/*
let car = {};

car["color"] = "red";
car["turntheKey"] = function () {
  console.log("The engine is running!");
};
car.mileage = 98765;

console.log(car);
car.turntheKey(); // I executed the method.
*/

// Error Handling
// Try and Catch

// Example 1:
/*
try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("The error was saved in the error log");
}
console.log("My program does not stop");
*/

// Example 2:
/*
try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was an Reference Error");
}
console.log("My program does not stop");
*/

// Undefined, null and empty values

/*
console.log(noise2); // Output: Uncaught ReferenceError: noise2 is not defined

var word;
console.log(word); // Output: undefined
*/

// Exercise - Error prevention
/*
function addTwoNums(a, b) {
  try {
    if (typeof a !== "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b !== "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");
*/

// Exercise: Defensive Programming
/*
function letterFinder(word, match) {
  let condition1 = typeof word == "string" && word.length >= 2;
  let condition2 = typeof match == "string" && match.length == 1;
  if (condition1 == true && condition2 == true) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}
letterFinder("cat", "c");
*/

// Practicing - Return values from functions
/*
let car = {}; // I created an empty object
car.color = "black"; // Added properties to it
car.doors = 2;
car["engine"] = "V-power";

function doubleIt(num) {
  return num * 2;
}

function addProp(obj, prop, val) {
  // Function that adds a new property to the object
  obj[prop] = val;
  return obj;
}

addProp(car, "mileage", doubleIt(22500));
console.table(car);
*/

/*
let brazil = {};
brazil.player1 = "Kaká";
brazil.player2 = "Ronaldo";
brazil.player3 = "Ronaldinho";

function addPlayer(obj, player, name) {
  obj[player] = name;
  return obj;
}

addPlayer(brazil, "player4", "Neymar");
console.log(brazil);
*/

// Function calling and recursion
/*
Recursion is an alternative way to run repetitive code without the use of loops.
*/

// Example:
/*
let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}
example();
*/

// Graded Assessment: Building a functional program

/*
// Task 1: Build a function-based console log message generator

function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);

}

// Task 2: Build another console log message generator

function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(`%cHave a nice day!`, "color: blue; font-size: 50px");
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message

function styleAndCelebrate() {
    consoleStyler('white', 'red', '43px', 'You rock!');
    celebrateStyler('finished the course');
}

// Call styleAndCelebrate

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
*/

// Introduction to object-oriented programming

/*
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    // totalPrice is a method
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  },
};

purchase1.totalPrice();

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    // totalPrice is a method
    var calculation = purchase2.shoes * purchase2.stateTax;
    console.log("Total price: ", calculation);
  },
};
*/

// Now, using the "this" keyword:

/*
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    // In this context, this = this object
    var calculation = this.shoes * this.stateTax;
    console.log("Total price: ", calculation);
  },
};

purchase1.totalPrice();
*/

/*Using the "this" keyword allows me to not really care about the current object's name, which is an improvement to the previous code I had. I can now refer to the object itself without specifying the object's name.
 */

// The 'this' keyword is an alias for the name of the object.

// With the OOP (object-oriented programming) approach, I can code more efficiently by reusing existing code.

// *** Classes: ***

// They are essentially a blueprint(model) that you can repeatdly use to build new objects of a certain kind, as many times as you like.

// // Example:

// class Car {
//   // Starting  with a capital letter.

//   constructor(color, speed) {
//     /*Constructor function: accepts as many parameters as needed; the role of the constructor function is to assign the passed in parameters to the future objects properties. It is the constructor function that is used when instantiating new objects, instances of a given class.
//      */

//     this.color = color;
//     this.speed = speed;
//   }
//   turboOn() {
//     // There's no need to use the'function' keyword here, just the name of the method is needed.
//     console.log("turbo is on!");
//   }
// }

// const car1 = new Car("red", 120);
// car1.turboOn();

// To setup inheritance relation between classes in JS, we can use the 'extends' keyword, as in 'class B extends A'.

/*
class Animal {
  ...
}
class Bird extends Animal {
  ...
}
class Eagle extends Bird {
  ...
}
*/

// Always keep in mind: The upper class is also known as 'super class'.

// OOP Principles: Polymorphism
class Car {
  useWorn() {
    console.log("Beep, Beep!");
  }
}
class Ferrari extends Car {
  useWorn() {
    super.useWorn();
    console.log("Just a casual ferrari!");
  }
}
class volkswagemGol extends Car {
  useWorn() {
    console.log("Brazilian gol! Beep, Beep!");
  }
}

var ferrari = new Ferrari();
var gol = new volkswagemGol();

ferrari.useWorn();
gol.useWorn();
