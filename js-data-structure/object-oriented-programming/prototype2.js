function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  constructor: Dog, // Remember to Set the Constructor Property when Changing the Prototype
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
		
let dog = new Dog("cody")

console.log(dog.constructor === Dog)
