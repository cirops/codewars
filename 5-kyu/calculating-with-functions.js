const n = (...args) => (args[1] ? args[1][0](args[0], args[1][1]) : args[0]);

const zero = (...args) => n(0, args[0]);
const one = (...args) => n(1, args[0]);
const two = (...args) => n(2, args[0]);
const three = (...args) => n(3, args[0]);
const four = (...args) => n(4, args[0]);
const five = (...args) => n(5, args[0]);
const six = (...args) => n(6, args[0]);
const seven = (...args) => n(7, args[0]);
const eight = (...args) => n(8, args[0]);
const nine = (...args) => n(9, args[0]);

const plus = (...args) =>
  args[1] != undefined ? args[0] + args[1] : [plus, args[0]];
const minus = (...args) =>
  args[1] != undefined ? args[0] - args[1] : [minus, args[0]];
const times = (...args) =>
  args[1] != undefined ? args[0] * args[1] : [times, args[0]];
const dividedBy = (...args) =>
  args[1] != undefined ? parseInt(args[0] / args[1]) : [dividedBy, args[0]];
