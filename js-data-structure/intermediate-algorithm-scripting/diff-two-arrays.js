function diffArray(arr1, arr2) {
 	let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
	let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

	const unique = unique1.concat(unique2);
	return unique
  
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));