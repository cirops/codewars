//https://www.codewars.com/kata/55a29405bc7d2efaff00007c

function multiplyUntil(a, b) {
	mult = 1;
	for (i = a; i <= b; i++) {
	  mult *= i;
	}
	return mult;
 }
 
 function going(n) {
	sum = 1;
	for (x = n; x >= 2; x -= 1) {
	  sum += 1 / multiplyUntil(n - x + 2, n);
	}
	return parseFloat(sum.toFixed(8).substring(0, 8));
 }