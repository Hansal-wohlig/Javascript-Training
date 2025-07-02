
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
  case "mango":
    console.log("This is a tropical fruit.");
    break;
  case "apple":
    console.log("Apple is red."); // unreachable due to earlier match
    break;
  case "grape":
    console.log("This is a berry fruit.");
    break;
  default:
    console.log("Unknown fruit.");
}

// For loop example
let i =100

for (let i = 0; i < 5; i++) {
  let message = "Iteration " + i;
  console.log(message);
}

console.log(i);      // here i is 100, not 5

// For in loop example---  loops through object properties
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text)

//Foreach loop example--- loops through array elements
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
console.log(txt)

//for of loop example
let language = "JavaScript";

let y = "";
for (let x of language) {
y += x;
console.log(y)
}


// While loop example
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
    }
// Do while loop example
let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);

// Break and continue example
for (let j = 0; j < 10; j++) {
    if (j === 5) {
        console.log("Breaking at 5");
        break; // exits the loop when j is 5
    }
    console.log(j);
}
for (let k = 0; k < 10; k++) {
    if (k % 2 === 0) {
        console.log("Skipping even number: " + k);
        continue; // skips the rest of the loop for even numbers
    }
    console.log(k);
}