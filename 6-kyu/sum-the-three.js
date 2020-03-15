//https://www.codewars.com/kata/5800580f8f7ddaea13000025

const sumTheTreeValues = root => {
	return root === null
	  ? 0
	  : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
 };