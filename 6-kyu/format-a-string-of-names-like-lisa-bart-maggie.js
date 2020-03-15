//https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){   
	var strOutput = "";
	if (names.length == 0) {
	  return "";
	} else if (names.length == 1) {
	  return names[0].name;
	}
	for (var i=0; i< names.length - 2; i++) {
		 strOutput = strOutput.concat(names[i].name).concat (", ");
	  }
 
	
	strOutput = strOutput.concat(names[i].name).concat (" & ").concat(names[i+1].name)
 
	
	
	return strOutput;
 }