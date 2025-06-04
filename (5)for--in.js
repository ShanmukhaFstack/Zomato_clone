// 5. 🔁 for...in Loop (for Objects)
// for (let key in object) {
//   // code block
// }
// 5.1 Print object values
let user = {name: "Alice", age: 25, city: "Delhi"};
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// 5.2 Count keys in object
let laptop = {brand: "HP", RAM: "16GB", SSD: "512GB"};
let count = 0;
for (let prop in laptop) {
  count++;
}
console.log("Total Properties:", count);
// 5.3 Capitalize values
let student = {name: "bob", subject: "math"};
for (let key in student) {
  student[key] = student[key].toUpperCase();
}
console.log(student);
// 5.4 Validate all fields are filled
let form = {name: "John", email: "john@gmail.com", phone: ""};
let isValid = true;
for (let key in form) {
  if (!form[key]) isValid = false;
}
console.log(isValid ? "Valid" : "Invalid");

