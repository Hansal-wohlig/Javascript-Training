// ----------------------------------------
// VARIABLE DECLARATION: var, let, const
// ----------------------------------------

// 'var' is function-scoped and hoisted (old JS, avoid when possible)
// 'let' is block-scoped and can be reassigned
// 'const' is block-scoped and cannot be reassigned (but can mutate if it's an object or array)

// Example 1: Basic Usage
var city = "New York";
let name = "John";
const age = 25;

console.log("City (var):", city);   // "New York"
console.log("Name (let):", name);   // "John"
console.log("Age (const):", age);   // 25

// Reassigning values
name = "Alice"; // allowed
// age = 30;    // ❌ Error! Cannot reassign a const

console.log("New Name:", name);

// ----------------------------------------
// BLOCK SCOPE: let and const are block-scoped
// ----------------------------------------

{
  let blockLet = "I exist only inside this block";
  const blockConst = "Me too!";
  var functionVar = "I escape blocks!";

  console.log("Inside block:", blockLet);    // Works
  console.log("Inside block:", blockConst);  // Works
}

console.log("Outside block - var:", functionVar); // ✅ Works - 'var' is function-scoped

// The following will throw ReferenceError:
try {
  console.log("Outside block - let:", blockLet);    // ❌ Error
} catch (e) {
  console.log("Error:", e.message);
}

try {
  console.log("Outside block - const:", blockConst); // ❌ Error
} catch (e) {
  console.log("Error:", e.message);
}


