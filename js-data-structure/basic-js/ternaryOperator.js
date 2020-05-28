function checkEqual(a, b) {
  //condition ? statement-if-true : statement-if-false;
  return a === b ? "Equal" : "Not Equal"
}
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num === 0) ? "zero"
    : "negative"
}


console.log(checkEqual(2, 2));
console.log(checkSign(0));
