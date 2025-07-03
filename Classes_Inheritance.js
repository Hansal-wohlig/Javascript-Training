class Animal {
  constructor(name, age) {
    this._name = name; // Internal property with underscore
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    }
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  static info() {
    console.log("Animals are living beings that can move, reproduce, and respond to their environment.");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed; // This one is fine as a public property, or you can also make it private and add getter/setter if needed
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  get dogBreed() {
    return this.breed;
  }

  set dogBreed(newBreed) {
    this.breed = newBreed;
  }

  static dogInfo() {
    console.log('Dogs are loyal and friendly.');
  }
}

// Usage
const myAnimal = new Animal('Generic Animal', 5);
myAnimal.speak();
Animal.info();

const myDog = new Dog('Buddy', 3, 'Golden Retriever');
myDog.speak();
console.log(myDog.name);
myDog.age = 4;
console.log(myDog.age);
console.log(myDog.dogBreed);
myDog.dogBreed = 'Labrador';
console.log(myDog.dogBreed);
Dog.dogInfo();
