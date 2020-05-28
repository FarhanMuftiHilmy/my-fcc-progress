// Only change code below this line
function countdown(n){
  if (n < 1){
    return []
  } else{
    const countArray = countdown(n-1)
    countArray.unshift(n)
    return countArray;
  }
}

console.log(countdown(5));
// Only change code above this line



function rangeOfNumbers(startNum, endNum) {
	if(endNum < startNum){
		return []
	} else{
		const countArray2 = rangeOfNumbers(startNum, endNum - 1)
		countArray2.push(endNum)
		return countArray2
	}
}
console.log(rangeOfNumbers(1, 5));

