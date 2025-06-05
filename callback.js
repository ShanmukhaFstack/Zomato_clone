// Callback Functions (Clean & Manageable)
// A callback function is a function passed into another function as an argument to be executed later.
// 1.User login simulation
function login(username, callback) {
  setTimeout(() => {
    console.log(`${username} logged in.`);
    callback();
  }, 1000);
}

login("Veera", () => {
  console.log("Redirecting to dashboard...");
});
// 2.Fetching product data
function fetchProduct(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Chair", price: 1200 });
  }, 500);
}

fetchProduct(101, (product) => {
  console.log("Product received:", product);
});
// 3.Simple animation steps
function fadeIn(callback) {
  console.log("Fading in...");
  setTimeout(callback, 1000);
}

fadeIn(() => {
  console.log("Now visible!");
});
// 4.File upload progress
function uploadFile(file, callback) {
  console.log(`Uploading ${file}...`);
  setTimeout(() => {
    callback("Upload complete");
  }, 1500);
}

uploadFile("photo.jpg", (message) => {
  console.log(message);
});
// 5.Simple event handling
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});

