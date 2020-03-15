//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
	return parens.split("").reduce((stack, curr) => {
	  // console.log("Stack:", stack);
	  if (stack == -1) return -1;
	  if (curr == "(") {
		 return stack + 1;
	  } else {
		 if (stack > 0) {
			return stack - 1;
		 } else {
			return -1;
		 }
	  }
	}, 0) === 0
	  ? true
	  : false;
 }