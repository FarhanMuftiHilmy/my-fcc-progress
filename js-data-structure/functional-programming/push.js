//mutating, not functional programming way
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem); // use concat instead of push

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
console.log(nonMutatingPush(first,second));