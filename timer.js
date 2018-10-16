const readline = require('readline');

const reader = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

reader.question(`Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice.`, (res) => {


 if (res === "r") {
   console.log(`You chose 'rock'. Hmm...`);
 } else if (res === "p") {
   console.log(`You chose  'paper'. Hmm...`);
 } else if (res === "s"){
   console.log(`You chose 'scissors'. Hmm...`);
 }
let cpu = Math.floor(Math.random() * Math.floor(3))

setTimeout(() => {
if (cpu === 0) {
 console.log("the computer chose rock");
} else if (cpu === 1) {
 console.log("the computer chose paper");
} else if (cpu === 2) {
 console.log("the computer chose scissors");

}
if (res === "r" && cpu === 0) {
  console.log("you tied!");
} else if (res === "r" && cpu === 1) {
  console.log("you lose!");

} else if (res === "r" && cpu === 2) {
  console.log("you win!");
} else if (res === "p" && cpu === 0) {
  console.log("you lose!");

} else if (res === "p" && cpu === 1) {
  console.log("you tied!");

} else if (res === "p" && cpu === 2) {
  console.log("you win!");

} else if (res === "s" && cpu === 0) {
  console.log("you lose!");

} else if (res === "s" && cpu === 1) {
  console.log("you win!");

} else if (res === "s" && cpu === 2) {
  console.log("you tied");

}

} , 1000)
rl.close();
});
