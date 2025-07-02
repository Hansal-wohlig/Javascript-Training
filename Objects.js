// Object literal with nested object and method
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: 10001
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Person's full name:", person.fullName());
console.log("Person's city:", person.address.city);

// Adding a new property
person.job = "Developer";
console.log("Job:", person.job);

// Object constructor function with nested object
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner; // nested object
  this.getDetails = function() {
    return this.make + " " + this.model + " (" + this.year + ")";
  };
}

const ownerInfo = {
  name: "Alice",
  license: "B1234567"
};

const myCar = new Car("Toyota", "Corolla", 2021, ownerInfo);
console.log("My car details:", myCar.getDetails());
console.log("Car owner name:", myCar.owner.name);

// Adding prototype property
Car.prototype.color = "unknown";
console.log("Car color (default):", myCar.color);

const yourCar = new Car("Honda", "Civic", 2019, { name: "Bob", license: "C9876543" });
yourCar.color = "red";
console.log("Your car color:", yourCar.color);
console.log("Your car owner license:", yourCar.owner.license);

// Object.assign --> copies properties from one object to another
const original = { x: 10 };
const additions = { y: 20, z: 30 };

const combined = Object.assign(original, additions);
console.log(combined); // { x: 10, y: 20, z: 30 }

// Object.create --> creates a new object with the specified prototype object and properties
const animal = { speak: () => console.log("Hey there!") };
const dog = Object.create(animal);

dog.speak(); // Hey there!

// Object.entries --> returns an array of a given object's [key, value] pairs
const profile = { firstName: "John", lastName: "Doe" };
const profileEntries = Object.entries(profile);

console.log(profileEntries); // [['firstName', 'John'], ['lastName', 'Doe']]

// Object.fromEntries --> transforms a list of key-value pairs into an object
const infoEntries = [['city', 'New York'], ['country', 'USA']];
const location = Object.fromEntries(infoEntries);

console.log(location); // { city: 'New York', country: 'USA' }

// Object.keys --> returns an array of the keys
const book = { title: "1984", author: "Orwell" };
const bookKeys = Object.keys(book);

console.log(bookKeys); // ['title', 'author']

// Object.values --> returns an array of the values
const movie = { name: "Inception", year: 2010 };
const movieValues = Object.values(movie);

console.log(movieValues); // ['Inception', 2010]

// Object.groupBy --> groups the elements of an array based on a specified key
const products = [
  { category: 'electronics', item: 'laptop' },
  { category: 'electronics', item: 'smartphone' },
  { category: 'clothing', item: 'shirt' },
  { category: 'clothing', item: 'jeans' }
];
const groupedProducts = Object.groupBy(products, product => product.category);

console.log(groupedProducts);

// Add or modify a single property with detailed settings
const car = {};

// Add or modify multiple properties at once
Object.defineProperties(car, {
  model: {
    value: 'Corolla',
    writable: true,
    enumerable: true
  },
  year: {
    value: 2022,
    writable: false,
    enumerable: true
  }
});
console.log(car.model, car.year); 

// Get detailed info about a specific property
const modelDescriptor = Object.getOwnPropertyDescriptor(car, 'model');
console.log(modelDescriptor);


// List all property names (including non-enumerable)
const propertyNames = Object.getOwnPropertyNames(car);
console.log(propertyNames);

// Retrieve the prototype of the object
const proto = Object.getPrototypeOf(car);
console.log(proto === Object.prototype); 


