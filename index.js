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

let car = {};

car["color"] = "red";
car["turntheKey"] = function () {
  console.log("The engine is running!");
};
car.mileage = 98765;

console.log(car);
car.turntheKey(); // I executed the method.
