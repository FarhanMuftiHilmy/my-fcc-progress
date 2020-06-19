function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
  
};
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
  
};
