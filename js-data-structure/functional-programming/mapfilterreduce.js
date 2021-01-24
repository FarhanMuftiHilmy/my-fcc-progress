const squareList = arr => {
  // Only change code below this line
  arr = arr
  .filter(arr => arr > 0 && Number.isInteger(arr))
  .map(arr => arr*arr)
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);