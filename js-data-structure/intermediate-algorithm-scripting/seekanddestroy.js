function destroyer(arr) {
	let args = []
	for(let i=1;i<arguments.length;i++){
		args.push(arguments[i])
	}
	return arr.filter(ob => ob != args[args.indexOf(ob)])
}

console.log(destroyer([1, 2, 3, 1, 2, 3, 4, 4, 5, 6], 2, 3, 1, 4, 5));

// function curried(x) {
//   return function(y) {
//     return x + y;
//   }
// }
// console.log(curried(1)(2)) 