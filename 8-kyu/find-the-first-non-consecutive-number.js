//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
	for(var i = 1; i < arr.length; i++) {
	  if(arr[i-1] + 1 != arr[i]) {
		 return arr[i];
	  }
	}
	return null;
 }