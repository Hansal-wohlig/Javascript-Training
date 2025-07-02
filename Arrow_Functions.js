const person = {
  name: "Alice",
  regularFunc: function() {
    console.log("Regular:", this.name); // 'this' refers to 'person'
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);   // 'this' does NOT refer to 'person'
  }
};

person.regularFunc(); 
person.arrowFunc();    

//Arguement function taking arguement from parent scope

function withArguments() {
  const arrow = () => {
    console.log("Arrow arguments:", arguments); // Inherits from withArguments
  };
  arrow(1, 2, 3); // These don't matter
}
withArguments(10, 20, 30);
