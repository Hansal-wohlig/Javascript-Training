console.log("=== Callback Function Demo ===");

function greet(callback) {
  console.log("Hello!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet(sayGoodbye);

function greetUser(name, callback) {
  console.log("Hi " + name + "!");
  callback(name);
}

function thankUser(user) {
  console.log("Thanks for visiting, " + user + "!");
}

greetUser("Alice", thankUser);

function process(callback) {
  console.log("Processing...");
  callback();
}

process(function() {
  console.log("Anonymous callback done!");
});

process(() => {
  console.log("Arrow callback done!");
});



function fetchData(callback) {
  console.log("Fetching data... (simulated)");
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function onFetched() {
  console.log("Now processing the fetched data...");
}

fetchData(onFetched);


