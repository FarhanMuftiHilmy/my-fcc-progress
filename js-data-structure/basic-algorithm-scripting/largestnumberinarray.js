function largestOfFour(arr) {
	let largest = []
	let max = 0;
	for(let i=0;i<arr.length;i++){
		max = arr[i][0]
		for(let j=0;j<arr.length;j++){			
			if(arr[i][j] > max){
				max = arr[i][j]
			}		
			
		}		
		largest.push(max)
		max = 0
	}
	return largest
  	
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])