// --------- Array Destructuring ---------

const numbers = [10, 20, 30, 40, 50];

// Basic destructuring
const [a, b] = numbers;
console.log("a:", a, "b:", b); // a: 10 b: 20

// Skipping elements
const [, , third] = numbers;
console.log("third:", third); // third: 30

// Using rest to collect remaining items
const [x, y, ...restNumbers] = numbers;
console.log("x:", x, "y:", y, "restNumbers:", restNumbers); // x: 10 y: 20 restNumbers: [30, 40, 50]

// Default values
const [m = 0, n = 0, o = 0, p = 0, q = 0, r = 99] = numbers;
console.log("r (default used?):", r); // r: 99 (not in array, so default used)


// --------- Object Destructuring ---------

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  profession: "Engineer"
};

// Basic destructuring
const { name, age } = person;
console.log("name:", name, "age:", age); // name: Alice age: 25

// Using rest with object destructuring
const { city, ...restProps } = person;
console.log("city:", city); // New York
console.log("restProps:", restProps); // { name: 'Alice', age: 25, profession: 'Engineer' }

// Default values and renaming
const { profession: job = "Unemployed", salary = 0 } = person;
console.log("job:", job, "salary:", salary); // job: Engineer salary: 0


// --------- Nested Destructuring ---------

const user = {
  id: 101,
  profile: {
    username: "techie",
    contacts: {
      email: "techie@example.com",
      phone: "123-456-7890"
    }
  }
};

const {
  profile: {
    username,
    contacts: { email }
  }
} = user;

console.log("username:", username); // techie
console.log("email:", email);       // techie@example.com



