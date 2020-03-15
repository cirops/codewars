//https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
	return word.split("").reduce((acc, curr, i) => {
	  return curr == curr.toUpperCase() ? acc.concat(i): acc 
	},
	[]);
 };