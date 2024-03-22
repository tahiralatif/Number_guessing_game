#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number:
// 2) user input for guessing number:
// 3) compare user input with computer generated randomnumber and show result:

const randomNumber = Math.floor(Math.random()* 6 +1);
const answers = await inquirer.prompt([
  {
    name: "userguessNumber",
    type: "number",
    message: "please guess a number b/w 1 to 6",
  },
]);
if (answers.userguessNumber === randomNumber) {
  console.log("congratulations! you guess right number");
} else {
  console.log("you guess wrong number");
}
