function calc(expr) {
  const tokens = expr.split(" ");

  if (tokens.length === 0) return 0;

  const operands = [];
  for (let token of tokens) {
    const currentToken = Number(token);
    if (isNaN(currentToken)) {
      const secondOperand = operands.pop();
      const firstOperand = operands.pop();
      let result;
      switch (token) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
      }
      operands.push(result);
    } else {
      operands.push(currentToken);
    }
  }
  return operands[0];
}
