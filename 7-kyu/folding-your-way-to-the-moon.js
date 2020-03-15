//https://www.codewars.com/kata/58f0ba42e89aa6158400000e

function foldTo(distance) {
	if(distance <=0) return null;
	return distance <= 0.0001 ? 0 : Math.ceil(Math.log2(distance*10000));
 }