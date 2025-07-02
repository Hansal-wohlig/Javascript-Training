console.log("=== Higher-Order Functions Demo ===");

// 1. A function that accepts another function as argument
function greetUser(name, formatter) {
  return "Hello, " + formatter(name);
}

// Formatter functions (callbacks)
function upperCaseName(name) {
  return name.toUpperCase();
}

function lowerCaseName(name) {
  return name.toLowerCase();
}

console.log(greetUser("Alice", upperCaseName)); 
console.log(greetUser("Bob", lowerCaseName));   

// 2. A function that returns another function (closure)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(5)); 

// 3. Using HOF with array methods
const numbers = [1, 2, 3, 4, 5];

// map 
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled:", doubledNumbers); 

// filter out even numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers); 


// 4. repeat a function n times
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
}

repeat(index => console.log(`Called at iteration ${index}`), 3);

// 5. HOF returning a function with parameters 
function makeGreeting(language) {
  return function(name) {
    if (language === "en") return `Hello, ${name}!`;
    if (language === "es") return `¡Hola, ${name}!`;
    if (language === "fr") return `Bonjour, ${name}!`;
    return `Hi, ${name}!`;
  }
}

const greetEnglish = makeGreeting("en");
const greetSpanish = makeGreeting("es");
console.log(greetEnglish("Alice"));  
console.log(greetSpanish("Bob"));   
// 6. HOF for function composition
function compose(f, g) {
  return function(x) {
    return f(g(x));
  }
}

const addOne = x => x + 1;
const square = x => x * x;

const addOneThenSquare = compose(square, addOne);

console.log(addOneThenSquare(4)); 