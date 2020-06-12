// generates an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj)
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
