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
