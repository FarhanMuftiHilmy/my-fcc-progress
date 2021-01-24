var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let concat = arr.concat([])
  concat.sort((a,b) => a - b)
  return concat		
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));