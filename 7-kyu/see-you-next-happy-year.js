//https://www.codewars.com/kata/5ae7e3f068e6445bc8000046

function isHappyYear(year) {
	year = year.toString();
	return new Set(year).size == 4;
 }
 
 function nextHappyYear(year) {
	i = year + 1;
	while (!isHappyYear(i)) {
	  i++;
	}
	return i;
 }