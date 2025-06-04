// 2. 🔁 while Loop
// while (condition) {
//   // code block
// }
// 2.1 Login attempt with limited tries
let attempts = 0;
let correctPin = "1234";
let input = "";

while (attempts < 3 && input !== correctPin) {
  input = prompt("Enter your PIN:");
  attempts++;
}
if (input === correctPin) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
// 2.2 Countdown from 5
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}
// 2.3 Accumulate sum until it exceeds 100
let sum = 0;
let i = 1;
while (sum <= 100) {
  sum += i;
  i++;
}
console.log("Sum:", sum);
// 2.4 Keep asking user until they type 'exit'
let command;
while (command !== 'exit') {
  command = prompt("Enter a command (type 'exit' to quit):");
}
console.log("Exited.");
// 2.5 Loop until you find a number divisible by 7
let num = 1;
while (true) {
  if (num % 7 === 0) {
    console.log("Found:", num);
    break;
  }
  num++;
}

