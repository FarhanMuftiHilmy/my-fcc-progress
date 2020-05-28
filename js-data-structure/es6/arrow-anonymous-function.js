// in JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

// To achieve this, we often use the following syntax:
/*
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
*/
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
/*
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
*/
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
/*
const myFunc = () => "value";
*/
// This code will still return value by default.


/*-----------------Write Arrow Functions with Parameters-----------------*/

// var myConcat = function(arr1, arr2) {
//   "use strict";
//   return arr1.concat(arr2);
// };

//converted using arrow function :

const myConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcat([1, 2], [3, 4, 5]));

/*-----------------Set Default Parameters for Your Functions-----------------*/

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified (it is undefined). 
// The parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. 
// You can add default values for as many parameters as you want.

