//https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function wordToDictionary(word) {
	return word.split("").reduce((acc, curr) => {
	  if (curr in acc) {
		 acc[curr]++;
	  } else {
		 acc[curr] = 1;
	  }
	  return acc;
	}, {});
 }
 
 function wordsAreAnagrams(a, b) {
	if (Object.keys(a).length != Object.keys(b).length) return false;
	for (var key in a) {
	  if (a[key] != b[key]) return false;
	}
	return true;
 }
 
 function anagrams(word, words) {
	let x = wordToDictionary(word);
	return words.reduce((acc, curr) => {
	  y = wordToDictionary(curr);
	  return wordsAreAnagrams(x, y) ? acc.concat(curr) : acc;
	}, []);
 }