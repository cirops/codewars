//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

function fixTheMeerkat(arr) {
	aux = arr[arr.length - 1];
	arr[arr.length - 1] = arr[0];
	arr[0] = aux;
	return arr;
 }