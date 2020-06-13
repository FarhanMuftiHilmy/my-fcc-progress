function findLongestWordLength(str) {
	let x = str.split(" ")
	let max = 0;
	for(let i=0;i<x.length;i++){
		if(x[i].length > max){
			max = x[i].length
		}
	}
	return max
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));