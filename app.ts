#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const sleep = (ms: number = 2000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const animation = chalkanimation.rainbow("Wellcome To Word Counter🧮");
await sleep();
animation.stop();

const answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: chalk.blueBright.bold("Enter your sentence to count your word"),
  },
]);

const words = answer.sentence.trim().split(" ");
console.log(words);

// count words length//
console.log(
  chalk.blueBright.italic(`\nYour sentence word count is ${words.length}`)
);
