function truncateString(str, num) {
  let truncated = ""
  
  if(str.length > num){
  	for(let i=0;i<num;i++){
    	truncated+=str[i]
  	}
    truncated+="..."
    return truncated
  } else{
  	for(let i=0;i<str.length;i++){
    	truncated+=str[i]
  	}
    return truncated
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))