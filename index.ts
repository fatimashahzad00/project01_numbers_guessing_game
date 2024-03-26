#! /usr/bin/env node

import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

async function playGame() {
  const max_number = 100;
  const computerGuess = Math.floor(Math.random() * max_number) + 1;
let guessCount = 0


    const { userGuess } = await inquirer.prompt([
        {
          type: "number",
          name: "userGuess",
          message: chalk.magentaBright("Guess a number between 1 and 100"),
        },
      ]);
    
      console.log(`Your Guess, ${userGuess}, \n System Guess, ${computerGuess}`);
    
      if (userGuess === computerGuess) {
        console.log(figlet.textSync("You Win!, big"));
      } else if (userGuess < computerGuess) {
        console.log(figlet.textSync("Your guess is too low, big"));
      } else {
        console.log(figlet.textSync("Your guess is too high."));
      }
      
}

async function main() {
    do {
        await playGame();
        var again = await inquirer.prompt([
          {
            type: "input",
            name: "restart",
            message: chalk.green.italic(
              "Do you want to start again? Select Y or N"
            ),
          },
        ]);
      } while (again.restart === "Y" || again.restart === "y");
}

main();


