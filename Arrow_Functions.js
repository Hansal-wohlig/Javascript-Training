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
