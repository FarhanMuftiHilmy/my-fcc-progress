function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  let spliced = arr.splice(1, 1) // (index, number element to delete)
  return [shifted, popped, spliced];
}



console.log(popShift(['challenge', 'is', 'not', 'complete']));
