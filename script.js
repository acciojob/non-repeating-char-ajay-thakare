function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map();

	for (let ch of str) {
		map.set(ch, (map.get(ch) || 0 ) + 1);
	}

	
	 for (let [char, count] of map) {
	    if (count === 1) {
	      return char;
	    }
  }
	return null;
}


// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
