//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
	array2 = [];
	for(var i = 0; i < array.length; i++ ) {
	  if (array[i] != 0) {
		 array2.push(array[i] * -1);
	  } else {
		 array2.push(0);
	  }
	}
	return array2;
 }