//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumInt(a) {
	let n = a.n;
	let int = a.int;
	if(int.length == 1) {
		 return n + int[0][1] - int[0][0];
	} 
	if(int[0][1] < int[1][0]) {
		 let curr = int.shift();
		 return sumInt({n: n + curr[1] - curr[0], int: int}); 
	}
	let newInt = [int[0][0], Math.max(int[0][1], int[1][1])];
	int.shift();
	int.shift();
	int.unshift(newInt);
	return sumInt({n: n, int: int});
}

function sumIntervals(intervals) {
	intervals = intervals.sort((x, y) => {
		 return x[0] == y[0] ? x[1] - y[1] : x[0] - y[0];
	});
	return sumInt({n: 0, int: intervals}); 
}