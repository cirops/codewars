//https://www.codewars.com/kata/52e864d1ffb6ac25db00017f

operators = [
	"^",
	"*",
	"/",
	"+",
	"-"
];

precedence = {
	"^": 4,
	"*": 3,
	"/": 3,
	"+": 2,
	"-": 2
};

associative = {
	"^": false,
	"*": true,
	"/": true,
	"+": true,
	"-": true
}

operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function toPostfix(infix) {
	let s = [];
	let q = [];
	let op;
	const len = infix.length;
	for (let i = 0; i < len; i++) {
		 curr = infix[i];
		 if (operands.indexOf(curr) > -1) {
			  q.unshift(curr);
		 } else if (operators.indexOf(curr) > -1) {
			  while (s.length > 0 &&
					(
						 precedence[curr] < precedence[s[s.length - 1]] ||
						 (precedence[curr] == precedence[s[s.length - 1]] && associative[s[s.length - 1]])
					) && s[s.length - 1] != '('
			  ) {
					op = s.pop();
					q.unshift(op);
			  }
			  s.push(curr);
		 } else if (curr == '(') {
			  s.push(curr);
		 } else { // ')'
			  while (s[s.length - 1] != '(') {
					op = s.pop();
					q.unshift(op);
			  }
			  op = s.pop();
		 }
	}
	while (s.length > 0) {
		 op = s.pop();
		 q.unshift(op);
	}
	return q.reverse().join("");
}