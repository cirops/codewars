//https://www.codewars.com/kata/53368a47e38700bd8300030d

function findMultiples(int,limit){
	var multiples = [];
	for (i = 1; i <= limit; i++) { 
	  if (i%int == 0) {
		 multiples.push(i)
	  }      
	}
	return multiples
 }