const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  // (return {
  //   name: name,
  //   age: age,
  //   gender: gender
  // };)

  return {name, age, gender}
  // Only change code above this line
};

/*-----------------Declaring function in object concisely-----------------*/

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
