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
  }
};


function countOnline(usersObj) {
  // Only change code below this line
  let sum = 0;
  for (let x in usersObj){
    if(usersObj[x].online === true){
    	sum++;
    } 
  }
  return sum
  // Only change code above this line
}

console.log(countOnline(users))
