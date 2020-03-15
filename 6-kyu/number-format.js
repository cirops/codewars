//https://www.codewars.com/kata/565c4e1303a0a006d7000127

var numberFormat = function(number) {
	sign = "";
	if (number < 0) {
	  sign = "-";
	  number = -number;
	}
	if (number <= 999) {
	  return sign + (number + "");
	}
	number = (number + "").split("");
	rest = "";
	if (number.length % 3 > 0) {
	  rest = number.splice(0, number.length % 3).join("");
	  console.log(rest);
	}
	number = number.join("").match(/\d{1,3}/g);
	if (rest != "") {
	  number.unshift(rest);
	}
	console.log(sign + number.join(","));
	return sign + number.join(",");
 };