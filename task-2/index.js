import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
  input,
  output,
});

let correctAnswer = Math.floor(Math.random() * 10 + 1);

const userAnswer = await rl.question(`What number was drawn? \n`, (answer) => {
  console.log(answer + "=====================================");
});

if (userAnswer.trim() == correctAnswer) {
  rl.close();
} else {
  rl.setPrompt("||| Incorrect response.\n||| Please try again\n");
  rl.prompt();
  rl.on("line", (userAnswer) => {
    if (userAnswer.trim() == correctAnswer) {
      rl.close();
    } else {
      rl.setPrompt(
        `||| Your answer\n||| **** ${userAnswer} ****\n||| isn't correct \n`
      );
      rl.prompt();
    }
  });
}

rl.on("close", () => {
  console.log("==========================");
  console.log("VERY good young Skywalker");
  console.log("==========================");
});
