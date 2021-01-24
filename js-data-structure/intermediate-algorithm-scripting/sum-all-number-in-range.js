function sumAll(arr) {
	let value = 0
	if(arr[0] < arr[1]){
		for(let i=arr[0];i<=arr[1];i++){
			value += i
		}
	} else{
		for(let i=arr[1];i<=arr[0];i++){
			value += i
		}
	}
	
	return value
}

console.log(sumAll([1, 4]));