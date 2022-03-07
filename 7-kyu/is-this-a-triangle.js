// https://www.codewars.com/kata/56606694ec01347ce800001b

const isTriangle = (a, b, c) => {
  const A = Math.acos((b * b + c * c - a * a) / (2 * b * c));
  const B = Math.acos((c * c + a * a - b * b) / (2 * a * c));
  const C = Math.acos((b * b + a * a - c * c) / (2 * a * b));

  return (
    (A + B + C).toPrecision(11) == Math.PI.toPrecision(11) &&
    ![A, B, C].includes(0)
  );
};
