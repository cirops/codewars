//https://www.codewars.com/kata/5b4e474305f04bea11000148

function digits(num){
	arr = num.toString().split("");
	combs = [];
	for(i = 0; i < arr.length; i++ ) {
	  for(j = i + 1; j < arr.length; j++) {
		 combs.push(parseInt(arr[i]) + parseInt(arr[j]));
	  }
	}
	return combs;
 }