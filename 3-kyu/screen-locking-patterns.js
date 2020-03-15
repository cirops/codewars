//https://www.codewars.com/kata/585894545a8a07255e0002f1

const graph = {
	g: [
	  [0, 0, '1', 0, 0, 0, '3', 0, '4'],
	  [0, 0, 0, 0, 0, 0, 0, '4', 0],
	  ['1', 0, 0, 0, 0, 0, '4', 0, '5'],
	  [0, 0, 0, 0, 0, '4', 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, '4', 0, 0, 0, 0, 0],
	  ['3', 0, '4', 0, 0, 0, 0, 0, '7'],
	  [0, '4', 0, 0, 0, 0, 0, 0, 0],
	  ['4', 0, '5', 0, 0, 0, '7', 0, 0],
	],
	getNeighbors(sourceVertex, visited) {
	  const neighbors = [];
	  let targetVertex;
	  let middleVertex;
	  for (let i = 0; i < 9; i += 1) {
		 if (sourceVertex === i) continue;
		 targetVertex = this.g[sourceVertex][i];
		 if (typeof targetVertex === 'number') {
			if (!visited.includes(i)) {
			  neighbors.push(i);
			}
		 } else { // u is a string
			middleVertex = Number(targetVertex);
			if (visited.includes(middleVertex)) {
			  neighbors.push(i);
			}
		 }
	  }
	  return neighbors;
	},
 };
 
 let nPaths = 0;
 let maxLength = 0;
 
 
 function countPatternsFromRecursive(current, visited, pathSize) {
	if (pathSize > maxLength) return;
	if (pathSize === maxLength - 1) {
	  nPaths += 1;
	  return;
	}
 
	const neighbors = graph.getNeighbors(current, visited);
	for (let i = 0; i < neighbors.length; i += 1) {
	  if (!visited.includes(neighbors[i])) {
		 countPatternsFromRecursive(neighbors[i], visited.concat(current), pathSize + 1);
	  }
	}
 }
 
 function countPatternsFrom(firstDot, length) {
	if (length === 0 || length > 9) return 0;
	const start = firstDot.charCodeAt(0) - 65;
	maxLength = length;
	countPatternsFromRecursive(start, [], 0);
	let val = nPaths;
	nPaths = 0;
	return val;
 }