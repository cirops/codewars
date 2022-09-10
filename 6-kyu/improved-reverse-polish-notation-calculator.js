const calc = (expr) => {
  const operate = {
    "+": (op1, op2) => op1 + op2,
    "-": (op1, op2) => op1 - op2,
    "*": (op1, op2) => op1 * op2,
    "/": (op1, op2) => op1 / op2,
  };

  const tokens = expr.split(" ");

  if (tokens.length === 0) return 0;

  const operands = [];
  for (let token of tokens) {
    const currentToken = Number(token);
    if (!isNaN(currentToken)) {
      operands.push(currentToken);
      continue;
    }

    const currentResult = operate[token](operands.pop(), operands.pop());
    operands.push(currentResult);
  }

  return operands[0];
};

console.log(calc(""), 0, "Should work with empty string");
console.log(calc("3"), 3, "Should parse numbers");
console.log(calc("3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
