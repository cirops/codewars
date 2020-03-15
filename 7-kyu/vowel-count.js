//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
	var vowelsCount = 0;
	
	var vowels = ['a','e','i','o','u'];
	
	for (var i = 0; i < str.length; i++) {
	  if (vowels.indexOf(str[i]) > -1) {
		 vowelsCount++;
	  }
	}
 
	return vowelsCount;
 }