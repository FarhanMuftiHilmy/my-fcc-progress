function getIndexToIns(arr, num) {
  let wdib = 0
  for(let i=0;i<arr.length;i++){
    if(num > arr[i]){
      wdib++
    }
  }
  return wdib;
}

getIndexToIns([40, 60], 50);
