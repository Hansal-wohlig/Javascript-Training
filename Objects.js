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
