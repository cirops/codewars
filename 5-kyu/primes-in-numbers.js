//https://www.codewars.com/kata/54d512e62a5e54c96200019e

function isPrime(n) {
	if (n == 2) return true;
	if (n == 3) return true;
	if (n % 2 == 0) return false;
	if (n % 3 == 0) return false;
	let i = 5;
	let w = 2;
	while (i * i <= n) {
	  if (n % i == 0) return false;
 
	  i += w;
	  w = 6 - w;
	}
	return true;
 }
 
 function nextPrime(a) {
	a++;
	while (!isPrime(a)) a++;
	return a;
 }
 
 function primeFactors(n) {
	let output = "";
	let factors = {};
	currPrime = 2;
	while (n >= currPrime) {
	  while (n % currPrime == 0) {
		 if (!(currPrime in factors)) factors[currPrime] = 0;
		 factors[currPrime] = factors[currPrime] + 1;
		 n /= currPrime;
	  }
	  if (currPrime in factors) {
		 power = factors[currPrime] > 1 ? `**${factors[currPrime]}` : "";
		 output += `(${currPrime}${power})`;
	  }
	  currPrime = nextPrime(currPrime);
	}
	return output;
 }