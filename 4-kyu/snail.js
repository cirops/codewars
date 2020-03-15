//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

nextDir = function(d) {
	return d == 4 ? 1 : d + 1;
 };
 
 isValid = function(x, y, array, visited) {
	if (
	  x < 0 ||
	  y < 0 ||
	  x >= array.length ||
	  y >= array.length ||
	  visited[x][y]
	) {
	  return false;
	}
	return true;
 };
 
 snail = function(array) {
	if(array.length <= 1) return array[0];
	
	let d = 1; //1,2,3,4 -> r,d,l,u
	let arrSize = array.reduce((acc, curr) => {
	  return acc + curr.length;
	}, 0);
	let visited = Array(array.length)
	  .fill()
	  .map(() => Array(array.length).fill(false));
	let output = [];
	// console.log(visited);
	let x = 0;
	let y = 0;
	let x1 = 0;
	let y1 = 0;
	while (output.length < arrSize - 1) {
	  switch (d) {
		 case 1: //right
			x1 = x;
			y1 = y + 1;
			break;
		 case 2: //down
			x1 = x + 1;
			y1 = y;
			break;
		 case 3: //left
			x1 = x;
			y1 = y - 1;
			break;
		 case 4: //up
			x1 = x - 1;
			y1 = y;
			break;
		 default:
			console.log("something wrong");
			break;
	  }
	  console.log(output);
	  if (!isValid(x1, y1, array, visited)) {
		 d = nextDir(d);
	  } else {
		 output.push(array[x][y]);
		 visited[x][y] = true;
		 x = x1;
		 y = y1;
	  }
	}
	output.push(array[x1][y1]);
	return output;
 };