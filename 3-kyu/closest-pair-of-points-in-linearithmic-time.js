//https://www.codewars.com/kata/5376b901424ed4f8c20002b7

function dist(p, q) {
  return Math.hypot(p[0] - q[0], p[1] - q[1]);
}

function bruteForce(points) {
  let P = points;
  let minDist = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < P.length - 1; i++) {
    for (j = i + 1; j < P.length; j++) {
      let p = P[i];
      let q = P[j];
      if (dist(p, q) < minDist) {
        minDist = dist(p, q);
        closest = [p, q];
      }
    }
  }
  return closest;
}

function closestPairUtil(points) {
  if (points.length <= 3) {
    return bruteForce(points);
  }
  let P = points;
  let xMid = Math.floor(P.length / 2);
  let dLeft = closestPairUtil(P.slice(0, xMid));
  let dRight = closestPairUtil(P.slice(xMid));
  let midPoint = P[xMid];
  d = dist(dLeft[0], dLeft[1]) < dist(dRight[0], dRight[1]) ? dLeft : dRight;
  let strip = [];
  for (let i = 0; i < P.length; i++) {
    if (Math.abs(P[i][0] - midPoint[0]) < dist(d[0], d[1])) {
      strip.push(P[i]);
    }
  }
  sClosest = stripClosest(strip, d);
  return dist(d[0], d[1]) < dist(sClosest[0], sClosest[1]) ? d : sClosest;
}

function stripClosest(strip, d) {
  let min = d;
  let size = strip.length;
  strip.sort((x, y) => x[1] - y[1]);
  for (let i = 0; i < size; i++) {
    for (
      let j = i + 1;
      j < size && strip[j][1] - strip[i][1] < dist(min[0], min[1]);
      ++j
    ) {
      if (dist(strip[i], strip[j]) < dist(min[0], min[1])) {
        min = [strip[i], strip[j]];
      }
    }
  }
  return min;
}

function closestPair(points) {
  let P = points;
  P.sort((x, y) => x[0] - y[0]);
  console.log(points);
  return closestPairUtil(P);
}
