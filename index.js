const prompt = require("prompt-sync")();

function finalResult() {
  const grade = prompt("Please enter your grade: ");

  if (grade >= 60 && grade < 100) {
    console.log("Congragulations! You passed the exam.");
  } else if (grade == 100) {
    console.log("Wow! You've obtained one of the bests grades! 100!");
  } else {
    console.log("Oh no, you did not pass the exam.");
  }
}

finalResult();
