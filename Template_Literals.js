// --------- Basic Interpolation ---------
const name = "Sam";
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); 



// --------- Expression in Template Literal ---------
const a = 10;
const b = 5;

const mathStatement = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(mathStatement); 



// --------- Multi-line Strings ---------
const multiLine = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multiLine);



// --------- Function Call in Template Literal ---------
function toUpper(text) {
  return text.toUpperCase();
}

const status = `User status: ${toUpper("active")}`;
console.log(status); 



// --------- Nesting Template Literals ---------
const product = "laptop";
const price = 1200;

const details = `Product: ${product}
Price: $${price}
Offer: ${price > 1000 ? "10% discount" : "No discount"}`;
console.log(details);

