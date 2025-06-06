// synchronous
// console.log("Start");
// console.log("Middle");
// console.log("End");

// Promise
// .then(successHandler)
// .catch(errorHandler)
// .finally(alwaysExecutes);
// asynchronous
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 2000);

// console.log("End");
//  Real-World Examples Using Promises 
// 1:Fetching Weather Data
fetch("https://api.example.com/weather")
  .then(res => res.json())
  .then(data => console.log("Weather:", data.temp))
  .catch(err => console.error("Failed to fetch weather:", err))
  .finally(() => console.log("Weather request complete"));
// 2:User Login
function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login successful");
    } else {
      reject("Invalid credentials");
    }
  });
}

login("admin", "1234")
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Login attempt finished"));
// 3:Uploading a File
function uploadFile(file) {
  return new Promise(resolve => {
    setTimeout(() => resolve("File uploaded!"), 2000);
  });
}

uploadFile("profile.jpg")
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Upload task complete"));
// 4:Making a Payment
function makePayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      resolve("Payment successful");
    } else {
      reject("Invalid payment amount");
    }
  });
}

makePayment(500)
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Payment process finished"));
// 5:Reading User Settings (simulate with timeout)
function readSettings() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Settings loaded"), 1000);
  });
}

readSettings()
  .then(data => console.log(data))
  .catch(err => console.error("Failed to load settings", err))
  .finally(() => console.log("Read settings operation finished"));
