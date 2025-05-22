let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); //  Accessible here
}

showGlobal();
console.log(globalVar);   //  Accessible here too
//1. Global Variable
//Declared outside any function or block.
//Can be accessed anywhere in the code (unless shadowed).
function greet() {
  let localVar = "Hello!";
  console.log(localVar);  //  Works
}

greet();
console.log(localVar);    // ❌ Error: localVar is not defined
//2. Local Variable
//Declared inside a function or block.
//Accessible only within that function or block.
//----scope chain ----
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    let message = "Inner";
    console.log(name);   // Looks in inner → not found → looks in outer →  Found: "Outer"
    console.log(message); //  Found in inner
  }

  inner();
}

outer();
//Scope Chain
//When a variable is accessed, JavaScript looks for it:
//In the current scope.
//Then in the outer scope.
//All the way up to the global scope.
//If not found, it throws a ReferenceError.