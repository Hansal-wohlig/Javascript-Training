let a = 10;
let b = 3;

// Arithmetic Operators
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Assignment Operators
let x = 5;
x += 2;
console.log("x after += 2:", x);
x *= 3;
console.log("x after *= 3:", x);

// Comparison Operators
console.log("Equal (==):", a == "10");
console.log("Strict Equal (===):", a === "10");
console.log("Not Equal (!=):", a != b);
console.log("Greater Than:", a > b);
console.log("Less Than:", a < b);
console.log("Greater or Equal:", a >= 10);
console.log("Less or Equal:", b <= 3);

// String comparison
let str1 = "apple";
let str2 = "banana";
console.log("String comparison (str1 < str2):", str1 < str2);
console.log("String comparison (str1 === 'apple'):", str1 === "apple");

// String addition (concatenation)
let hello = "Hello, ";
let world = "World!";
console.log("String addition:", hello + world);

// String and number addition
let num = 5;
console.log("String + Number addition:", hello + num);  // concatenates to string
console.log("Number + String addition:", num + world);  // concatenates to string

// Logical Operators
let isAdult = true;
let hasID = false;
console.log("AND (&&):", isAdult && hasID);
console.log("OR (||):", isAdult || hasID);
console.log("NOT (!):", !isAdult);

// Unary Operator
let c = 5;
console.log("Unary -c:", -c);

// Ternary Operator
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary result:", result);

// ------------------------------
// Bitwise Operators
// ------------------------------

let p = 5; // 0101
let q = 1; // 0001

console.log("Bitwise AND (&):", p & q);         // 0001 → 1
console.log("Bitwise OR (|):", p | q);          // 0101 → 5
console.log("Bitwise NOT (~):", ~p);            // 1010 → -6 (2's complement)
console.log("Bitwise XOR (^):", p ^ q);         // 0100 → 4
console.log("Left Shift (<<):", p << 1);        // 1010 → 10
console.log("Right Shift (>>):", p >> 1);       // 0010 → 2
console.log("Unsigned Right Shift (>>>):", p >>> 1); // 0010 → 2
