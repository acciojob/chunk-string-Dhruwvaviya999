function stringChop(str, size) {
    // your code here
    if(str.length > 0){
		let result = [];
	    for (let i = 0; i < str.length; i += size) {
	      result.push(str.slice(i, i + size));
	    };
		
		return result;
	} else {
		return [];
	}

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
