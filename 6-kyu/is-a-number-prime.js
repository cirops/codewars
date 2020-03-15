//https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(num) {
	var nDivisors = 0;
	for (i = 0; i < num; i++) {
	  if (num % i == 0) {
		 nDivisors++;
	  }
	}
	if (num <= 1) {
	  return false
	}
	
	if (nDivisors > 1) {
	  return false
	}
	return true
 }