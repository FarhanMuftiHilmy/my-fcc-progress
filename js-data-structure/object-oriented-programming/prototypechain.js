function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


// function Bird(name) {
//   this.name = name;
// }

// typeof Bird.prototype; // yields 'object'
// Because a prototype is an object, a prototype can have its own prototype! In this case, 
// the prototype of Bird.prototype is Object.prototyp