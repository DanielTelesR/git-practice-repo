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

/*
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

*/

// *** Constructors ***

/*
 Important: If you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it's not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.
*/

// When building objects of the following built-in types, we can use the constructor(the list below is inconclusive):

// To use a constructor function, we must prepend it with the operator 'new'.

/*
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
*/

// *** Creating Classes ***

// In JavaScript classes, 'super' is used to specify what property gets inherited from the super-class in the sub class.

/*
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
*/

// Using class instance as another class' constructor's property:

/*
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
*/

// Lesson: building an object-oriented program

/*
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
*/

// Graded Assessment: Building an object-oriented program:

/*
// Task 1: Code a Person class

class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  let intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

console.log(intern());
console.log(manager());
*/

// De-structuring arrays and objects

/*
In JavaScript, it's possible to extract the properties from objects into distinct variables using destructuring.
*/

// Example:
/*
let { PI } = Math;
console.log(PI);
*/

//  *** For of loops and objets ***

// Three important built-in methods: Object.keys(), Object.values(), and Object.entries().

// Object.keys --> returns an array of strings, where each string is a property key of the the properties contained in the passed object.

// Object.entries() --> returns an array listing both the keys and the values. This time, the values that get returned are 2-member arrays nested inside an array. In other words, you get an array of arrays, where each item has two members, the first being a property's key, and the second being a property's value.

// But how can we loop over an object?
// Example:

/*
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]); // clothingItem[key] was used to access the corresponding value of each key.
}
*/
// Remember: An object itself is not iterable!

// *** For in x For of  and objects ***

/*
const car = {
  engine: true,
  steering: true,
  speed: "slow",
};

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log("---- for-in is unreliable ----");
for (prop in sportsCar) {
  console.log(prop);
}
console.log("🤔", "Iterating over object AND its prototype!");

console.log("---- for-of is reliable ----");
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ":" + sportsCar[prop]);
}
console.log("🎯", "Iterating over object's own PROPERTIES only!");
*/

// *** Template literals ***
// Backsticks(``)
/*
Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes.
*/

// Besides variable interpolation, template strings can span multiple lines.

// It's possible to perform arithmetic operation inside a template literal:
/*
console.log(`${1 + 1 + 1 + 1} stars!`);
*/

// Exercise: Array and object iteration
/*
// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (prop of Object.keys(bird)) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

birdCan();

// Task 3

function animalCan() {
  for (prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();
*/

// *** Data Structures ***

// A solution to a coding task depends on the data structure you use.

// Object: an unordered, non-iterable collection of key-value pairs. You use it when you need to store and later access a value under a key.

// Array: an ordered, iterable collection of values. You use it when you need to store and later acces a value under an index.

// Map: it's like an array, because it's iterable. However, it consists of key value pairs. Don't confuse a map with an object! With maps, any value can be used as a key. With objects, keys can only be strings or symbols.

// Set: it's another collection where each item in the collection must be unique.

// For example, the following code will simply not be run. In other words, no errors will be thrown and no updates will be made to a set:
/*
const house1 = "red";
const house2 = "blue";
const house3 = "red";

const houses = new Set();

houses.add(house1).add(house2).add(house3);

console.log(houses);
*/

// *** Data Structure Examples ***

// Three specific methods that exist on arrays: 1. forEach 2. filter 3. map

// forEach
/*
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
*/

// Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
/*
const veggies = ["onion", "garlic", "potato"];
veggies.forEach((veggie, index) => {
  console.log(`${index}. ${veggie}`);
});
*/

// The filter() method

/*
const nums = [0, 10, 20, 30, 40, 50];
var greaterThan20 = nums.filter((num) => {
  return num > 20;
});
console.log(greaterThan20);
*/

// Similar to the forEach() method, the filter() method also accepts a function and that function performs some work on each of the items in the array.

// The map() method
/*
var dividedBy10 = [0, 10, 20, 30, 40, 50].map((num) => {
  return num / 10;
});
console.log(dividedBy10);
*/

/*
This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.
*/

// The example below covers how to use the object data structure to complete a specific task.

// This task is to convert an object to an array:
/*
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};

const droneKeys = Object.keys(drone);
droneKeys.forEach((key) => {
  result.push(key, drone[key]); // drone[key] returns the value
});

console.log(result);
*/

// Working with Maps in JavaScript:
/*
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers);
*/

// To geet a specific value, you need to use the get() method:

// console.log(bestBoxers.get(1));

// Working with Sets in JavaScript
/*
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
*/

// *** Spread operator ***

/*
let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];

function showItinerary(place1, place2, place3) {
  console.log("Visit " + place1);
  console.log("Then visit " + place2);
  console.log("Finish with a visit to " + place3);
}

showItinerary(top3[0], top3[1], top3[2]);
*/

// Or...

// showItinerary(...top3);

/*The spread operartor includes all of the array elements with much less code. It allows you to pass all array elements into a function without having to type them all individually.
 */

// It's used to "unpack a box".

// *** Rest operator ***

// The rest operator, in the other hand, "is used to build a smaller box and pack items into it".

/*
const top7 = [
  "The Colosseum",
  "The Roman Forum",
  "The Vatican",
  "Trevi Fountain",
  "The Pantheon",
  "Piazza Venezia",
  "The Palatine Hill",
];
*/

// Destructuring...

/*
const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(secondVisit);
*/

// Thus, the rest operator allows you to take items from an array and use them to create a separate sub-array.

// It's also useful in functions:

/*
function addTaxToPrices(taxRate, ...itemsBought) {
  // the rest operator must be the last parameter in the function definition!
  return itemsBought.map((item) => taxRate * item);
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);

console.log(shoppingCart);
*/

/*
The rest operator groups the remaining parameters in a list within a standard JavaScript array.
*/

// *** Using Spread and Rest in depth ***

// Join arrays, objects using the rest operator

/*
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array
*/

// It's also easy to join objects:

/*
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}
*/

// Add new members to arrays without using the push() method:

/*
Here's how to use the spread operator to easily add one or more members to an existing array:
*/

/*
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);
*/

// Conver a string to an array using the spread operator:

/*
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
*/

// Copy either an object or an awway into a separate one using the spread operator:

/*
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car 2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) // 201, 200.
*/

// You can copy an array into a completely separate array, also using the spread operator:

/*
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits];
fruits1.pop();
console.log(fruits1, "not", fruits2);
*/

// *** JavaScript Modules ***

// To use an ES6 module in a browser, the script's type attribute must be set to "module" (in a HTML file, for example).

// Modules were added to JavaScript in version ES6.

// Modules allow for code to be reused and more easily replaced.

// Example (in the greeting.js file):

/*
export const informalGreeting = (person) => {
  console.log('Hello, ' + person);
}

export const formalGreeting = (person) => {
  console.log(`Good day, ${person}`);
}

const greeting = () => {
  console.log('Howdy!');
}

export default greeting;
*/

// *** JavaScript DOM manipulation ***

/*
DOM tree structure: HTML file is mapped out like a tree structure with nested objects for different parts of the page.
*/

/*
The DOM is the model of the HTML file saved as a JavaScript object in your browser's memory. A browser builds a DOM, or model, for every webpage it downloads as a JavaScript object.
 */

/*
The DOM is an in-memory representation of the active HTML document. Any changes made are local and do not affect the document stored on the webserver.
*/

// Manipulating the DOM:

/*
const h2 = document.createElement("h2"); // Remember to use single-quotes
h2.innerText = "This is an h2 heading";
h2.setAttribute("id", "sub-heading");
h2.setAttribute("class", "secondary");
document.body.appendChild(h2);
*/

// *** JavaScript Selectors ***

// DOM: The framework a browser uses to reand and store a webpage.

// Examples of JS DOM selectors:

// 1. querySelector() 2. querySelectorAll() 3. getElementById() 4. getElementsByClassName()

/*
document.querySelector
document.querySelectorAll
document.getElementById
document.getElementsByClassName
*/

// *** Event Handling ***

// Example:

/*
const target = document.querySelector("body");

function handleClick() {
  console.log("Clicked the body");
}

target.addEventListener("click", handleClick);
*/

// Exercise: Web page content update
// Try this code yourself by pointing your browser to the 'example.com' website
// Run the code below in the console.

/*
let h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

let input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", function () {
  h1.innerText = input.value;
});
*/

// Exercise: Capture Data

/*
let h1 = document.querySelector("h1");
let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
  }
}

h1.addEventListener("click", handleClicks);
*/

// *** JavaScript Object Notation - JSON ***

/*
'{"greeting":"hello"}'

const jsonStr = '{"greeting":"hello"}';
const aPlainObj = JSON.parse(jsonStr);
aPlainObj.greeting = 'hi';
*/

/*
const data = {
  firstName: "John",
  lastName: "Doe",
  greeting: "Hello"
}

JSON.stringify(data)
*/

// Atention: JSON strings cannot hold functions!

/*
When working with JSON it is common to convert it back to a JavaScript object to work with its properties. To do this you need to use the global built-in JSON object and its parse method.
*/

/*
JSON.stringify will turn the object into a string representation. The property name is wrapped in double quotes in the representation.
*/

// Other JavaScript environments - node & NPM

// Node.js is a separate, standalone environment without ties to the JavaScript in the browser.

// Node.js comes with a package manager called NPM.

// Examples of libraries you can install inclue React, Webpack, Bootstrap, and Angular Core:

/*
npm i react
npm i webpack
npm i bootstrap-vue
npm i @angular/core
*/

// *** What is testing? ***

// JavaScript testing frameworks

// Example: JEST framework

/*
function concatStrings(str1, str2) {
  return str1 + str2;
}

expect(concatStrings("abc", "def")).toBe("abcdef");
*/
// When tests fail, you say that they're red, and when they pass you say that they're green.

// Refactoring: updating code, without affecting the results it produces.

/*
Reg-green-refactor cycle: As you continue to refine your code in response to red tests, it becomes a cyclical activity. This is often described as the red-green-refactor cycle. This cycle is the basis of the test-driven development or TDD approach to programming.
*/

// Types of testing:

// e2e testing: it tries to imitate how a user might interact with your app (from the perspective of the end user).

// integration testing: it tests how separate parts of your apps work together.

/* Unit testing: the process of testing the smallest units of your source code in isolation. (highest speed and lowest costs)

Unit is the smallest piece of code that you can test separately from the rest of the app.
*/

// *** Introduction to Jest (framework) ***
// Check the video: 'writing tests with jest'.
// Check the 'addFive.test.js' file.
// Run the test using 'npm run test'.

// *** Final Graded Assessment ***
// Little Lemon Receipt Maker
/*
// Given variables

const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;
    if (taxBoolean == true) {
      finalPrice = dishData[i].price * tax;
    } else if (taxBoolean == false) {
      finalPrice = dishData[i].price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  const prices = getPrices(taxBoolean);
  if (typeof guests == "number" && guests > 0 && guests < 30) {
    // the previous '0 < guests < 30' is not a valid comparison in JavaScript, which resulted in error.
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
*/

// Practicing JS - Some code snippets
const prompt = require("prompt-sync")();
var tweet = prompt("Write your tweet: ");
var tweetCount = tweet.length;
alert(
  "You have writen " +
    tweetCount +
    "characters," +
    ` you have 140 - ${tweetCount} left`
);
