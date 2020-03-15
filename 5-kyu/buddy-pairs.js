//https://www.codewars.com/kata/59ccf051dcc4050f7800008f

function s(num) {
	let result = 0;
	let i = 2;
	while (i <= Math.sqrt(num)) {
	  if (num % i == 0) {
		 if (i == num / i) result = result + i;
		 else result = result + (i + num / i);
	  }
	  i = i + 1;
	}
	return result + 1;
 }
 
 m = {};
 
 function buddy(start, limit) {
	for (let x = start; x < limit; x++) {
	  if (!(x in m)) {
		 m[x] = s(x);
	  }
	  y = m[x] - 1;
	  if (!(y in m)) {
		 m[y] = s(y);
	  }
	  if (m[x] == y + 1 && m[y] == x + 1 && x >= start && x < y) {
		 return [x,y];
	  }
	}
	return "Nothing";
 }