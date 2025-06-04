// 3. 🔁 do...while Loop
// do {
//   // code block
// } while (condition);
// 3.1 Menu loop until user chooses to quit
let option;
do {
  option = prompt("Choose: 1. Start  2. Help  3. Exit");
} while (option !== "3");
console.log("Program ended");
// 3.2 Ask for age until valid input
let age;
do {
  age = prompt("Enter your age:");
} while (isNaN(age) || age <= 0);
console.log("Age is valid");
// 3.3 Enter numbers until user cancels
let sum = 0, input;
do {
  input = prompt("Enter a number:");
  if (input !== null) sum += Number(input);
} while (input !== null);
console.log("Total:", sum);
// 3.3 Enter numbers until user cancels
let sum = 0, input;
do {
  input = prompt("Enter a number:");
  if (input !== null) sum += Number(input);
} while (input !== null);
console.log("Total:", sum);

