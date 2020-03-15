//https://www.codewars.com/kata/583203e6eb35d7980400002a

const isSmiley = str => {
	if (!(str[0] == ':' || str[0] == ';')) {
	  return false;
	}
	
	switch(str[1]) {
	  case '~':
	  case '-':
		 break;
	  case ')':
	  case 'D':
		 return true
	  default:
		 return false;
	}
	
	if(!(str[2] == ')' || str[2] == 'D')) {
	  return false;
	}
	
	return true;
 }
 
 //return the total number of smiling faces in the array
 function countSmileys(arr) {
	return arr.reduce((acc, curr) => {
	  if(isSmiley(curr)) {
		 return acc + 1;
	  }
	  return acc;
	}, 0);
 }