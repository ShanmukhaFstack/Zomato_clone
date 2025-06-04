// for (initialization; condition; increment) {
//     // code block
// }
// 1.1 Print numbers from 1 to 5 🔢

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//  1.2 Calculate the total bill from cart items 
let prices = [100, 250, 50];
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("Total:", total);
// 1.3 Greet users from a list
let users = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < users.length; i++) {
  console.log(`Hello, ${users[i]}!`);
}
// 1.4 Display even numbers between 1-10

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// 1.5 Generate a multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
