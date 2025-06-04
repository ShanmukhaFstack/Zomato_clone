// 4. 🔁 for...of Loop (for Arrays, Strings)
// for (let value of iterable) {
//   // code block
// }
// 4.1 Print each character in a name
let name = "Shanmukha";
for (let char of name) {
  console.log(char);
}
// 4.2 Sum values in an array
let scores = [10, 20, 30];
let total = 0;
for (let score of scores) {
  total += score;
}
console.log("Total:", total);
// 4.3 Greet every city
let cities = ["Delhi", "Mumbai", "Pune"," Bangalore"," Hyderabad"];
for (let city of cities) {
  console.log(`Welcome to ${city}`);
}
// 4.4 Print all vowels in a sentence
let sentence = "Hello World!";
for (let letter of sentence) {
  if ("aeiouAEIOU".includes(letter)) {
    console.log(letter);
  }
}
// 4.5 List ingredients
let ingredients = ["Flour", "Eggs", "Milk"," Sugar", "Butter"];
for (let item of ingredients) {
  console.log(`Add ${item}`);
}
