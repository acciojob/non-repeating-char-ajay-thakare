function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i = 0; i < str.length - 1; i = i + 2 ){
		let ch = str[i];

		if(ch !== str[i+1]){
			return ch;
		}
	}

	return null;
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
