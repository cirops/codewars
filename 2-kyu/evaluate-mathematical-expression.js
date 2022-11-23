// https://www.codewars.com/kata/52a78825cdfc2cfc87000005
const calc = (exp) => {
  return evaluate(convertToPostfix(parse(formatInput(exp))));
  // return convertToPostfix(parse(formatInput(exp)));
  // return parse(formatInput(exp));
};

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "m"];

const operate = {
  "+": (a, b) => a + b,
  "-": (a, b) => b - a,
  "/": (a, b) => b / a,
  "*": (a, b) => a * b,
};

const precedence = {
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
  "(": 0,
  ")": 0,
};

const formatInput = (exp) => {
  return exp
    .replace(/^-([0-9])/g, "m$1")
    .replace(/([ |\/\*]|$)(-)([0-9])/g, "$1m$3")
    .replace(/ /g, "")
    .replace(/\+-/g, "-");
};

const parse = (exp) => {
  return exp.split("").reduce(
    (acc, curr, index, arr) => {
      if (digits.includes(curr)) {
        acc.n += curr;
      } else {
        if (acc.n) {
          acc.s.push(acc.n);
          acc.n = "";
        }
        acc.s.push(curr);
      }

      if (index === arr.length - 1 && acc.n.length > 0) {
        acc.s.push(acc.n);
      }

      return acc;
    },
    {
      s: [],
      n: "",
    }
  ).s;
};

const convertToPostfix = (tokens) => {
  const output = [];
  const opStack = [];
  for (const token of tokens) {
    if (digits.includes(token[0])) {
      output.push(token);
    } else if (token === "(") {
      opStack.push(token);
    } else if (token === ")") {
      let op = opStack.pop();
      while (op !== "(") {
        output.push(op);
        op = opStack.pop();
      }
    } else {
      while (true) {
        const op = opStack[opStack.length - 1];
        if (op !== "(" && precedence[op] >= precedence[token]) {
          output.push(op);
        } else {
          break;
        }
        opStack.pop();
      }

      opStack.push(token);
    }
  }

  for (const op of opStack) {
    output.push(op);
  }

  return output;
};

const evaluate = (stack) => {
  console.log(stack);
  const result = [];
  for (let i = 0; i < stack.length; i++) {
    const op = stack[i];
    console.log(op, result);
    if (digits.includes(op[0])) {
      result.push(op);
    } else {
      let operand1 = result.pop();
      let operand2 = result.pop();
      operand1 =
        operand1[0] === "m" ? Number(operand1.slice(1)) * -1 : Number(operand1);
      operand2 =
        operand2[0] === "m" ? Number(operand2.slice(1)) * -1 : Number(operand2);

      result.push(operate[op](operand1, operand2));
    }
  }
  if (result[0][0] === "m") return Number(result[0].slice(1)) * -1;
  return Number(result[0]);
};

const tests = [
  // ["1+1", 2],
  // ["1 - 1", 0],
  // ["1* 1", 1],
  // ["1 /1", 1],
  // ["-123", -123],
  // ["123", 123],
  // ["2 /2+3 * 4.75- -6", 21.25],
  // ["12* 123", 1476],
  // ["2 / (2 + 3) * 4.33 - -6", 7.732],
  // ["12*-1", -12],
  // ["1- -1+1- -1", 4],
  // ["6 + -( -4)", 10],
  ["12* 123/-(-5 + 2)", "dunno"],
];

tests.forEach((test) => {
  console.log(calc(test[0]), test[1]);
});

// const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const OPS = ["*", "/", "+", "-"];

// const PRECEDENCE = {
//   "*": 2,
//   "/": 2,
//   "+": 1,
//   "-": 1,
//   "(": 0,
//   ")": 0,
// };

// const PARENS = ["(", ")"];

// function calc(expression) {
//   const parsedExp = [];
//   for (let i = 0; i < expression.length; i++) {
//     if (expression[i] === " ") continue;
//     if (DIGITS.includes(Number(expression[i]))) {
//       let [newNumber, newIndex] = processNumber(expression, i);
//       parsedExp.push(newNumber);
//       i = newIndex;
//     } else if (OPS.includes(expression[i])) {
//       if (
//         expression[i] === "-" &&
//         expression[i + 1] !== " " &&
//         DIGITS.includes(Number(expression[i + 1]))
//       ) {
//         let [newNumber, newIndex] = processNumber(expression, i);
//         parsedExp.push(newNumber);
//         i = newIndex;
//       } else {
//         parsedExp.push(expression[i]);
//       }
//     } else if (PARENS.includes(expression[i])) {
//       parsedExp.push(expression[i]);
//     } else {
//       console.log(`ignoring unknown symbol '${expression[i]}`);
//     }
//   }
//   // console.log(addSumToNegativeOperands(parsedExp));
//   return evaluate(addSumToNegativeOperands(parsedExp));
// }

// // receives a string and a starting point, and returns a string number and ending point
// function processNumber(s, index) {
//   let i = index;
//   let newNumber = [s[i]];
//   i++;
//   while (s[i] !== " " && (DIGITS.includes(Number(s[i])) || s[i] === ".")) {
//     newNumber.push(s[i]);
//     i++;
//   }
//   return [Number(newNumber.join("")), i - 1];
// }

// function addSumToNegativeOperands(parsed) {
//   let newParsed = [];
//   for (let i = 0; i < parsed.length; i++) {
//     newParsed.push(parsed[i]);
//     if (typeof parsed[i] === "number" && typeof parsed[i + 1] === "number") {
//       newParsed.push("+");
//     }
//   }
//   return newParsed;
// }

// function evaluate(expression) {
//   const operandStack = [];
//   const operatorStack = [];
//   let auxOp, op1, op2, res;
//   while (expression.length > 0) {
//     currOp = expression.shift();
//     // console.log(operatorStack, operandStack, currOp);
//     if (typeof currOp === "number") {
//       //a
//       // console.log("A");
//       operandStack.push(currOp);
//     } else if (OPS.includes(currOp) && operatorStack.length == 0) {
//       //b
//       // console.log("B");
//       operatorStack.push(currOp);
//     } else if (
//       OPS.includes(currOp) &&
//       operatorStack.length != 0 &&
//       PRECEDENCE[currOp] > PRECEDENCE[operatorStack[operatorStack.length - 1]]
//     ) {
//       //c
//       // console.log("C");
//       operatorStack.push(currOp);
//     } else if (currOp === "(") {
//       //d
//       // console.log("D");
//       operatorStack.push(currOp);
//     } else if (currOp === ")") {
//       auxOp = operatorStack.pop();
//       while (auxOp != "(") {
//         op1 = operandStack.pop();
//         op2 = operandStack.pop();
//         res = doOperation(op1, auxOp, op2);
//         operandStack.push(res);
//         auxOp = operatorStack.pop();
//       }
//     } else {
//       //f
//       // console.log("F");
//       op1 = operandStack.pop();
//       op2 = operandStack.pop();
//       auxOp = operatorStack.pop();
//       res = doOperation(op2, auxOp, op1);
//       operandStack.push(res);
//       operatorStack.push(currOp);
//     }
//   }
//   while (operatorStack.length > 0) {
//     op1 = operandStack.pop();
//     op2 = operandStack.pop();
//     auxOp = operatorStack.pop();
//     res = doOperation(op2, auxOp, op1);
//     operandStack.push(res);
//   }
//   return operandStack.pop();
// }
// function doOperation(op1, operand, op2) {
//   switch (operand) {
//     case "+":
//       return op1 + op2;
//       break;
//     case "-":
//       return op1 - op2;
//       break;
//     case "*":
//       return op1 * op2;
//       break;
//     case "/":
//       return op1 / op2;
//       break;
//   }
// }
