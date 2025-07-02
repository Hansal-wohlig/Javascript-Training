// Function to compute the product of two numbers
function myFunction(p1, p2) {
  return p1 * p2; // returns product
}

// Calling function and storing return value
let x = myFunction(4, 3);
console.log("Product:", x); // 12

// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Calling with argument
let tempC = toCelsius(77);
console.log("77°F in Celsius is:", tempC.toFixed(2)); // 25.00

// Calling without argument returns NaN (incorrect)
let noArg = toCelsius();
console.log("No argument call:", noArg); // NaN

// Assigning function itself (not invoking)
let funcRef = toCelsius;
console.log("Function reference:", funcRef); // [Function: toCelsius]

// Using function directly in string concatenation
console.log("Temperature is " + toCelsius(100) + " Celsius");

// Using function return value in variable assignment
let tempText = "The temperature is " + toCelsius(68) + " Celsius";
console.log(tempText);

// Local variables inside functions
function showCar() {
  let carName = "Volvo";
  console.log("Inside function:", carName); // Accessible here
}
showCar();
// console.log(carName); // Uncaught ReferenceError: carName is not defined

// Different functions can use same local variable names
function showBike() {
  let carName = "Harley";
  console.log("Inside another function:", carName);
}
showBike();

// Function invoked immediately (self-invoked)
(function() {
  console.log("This function runs immediately!");
})();
