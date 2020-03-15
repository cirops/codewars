//https://www.codewars.com/kata/5761a717780f8950ce001473

function  calculateAge(birthYear, targetYear) {
	ageDifference = targetYear - birthYear;
	yearParticle = " year";
	if (Math.abs(ageDifference) != 1) {
	  yearParticle = yearParticle.concat("s");
	}
	if (ageDifference > 0) {
	  return "You are ".concat(String(ageDifference)).concat(yearParticle).concat(" old.");
	} else if (ageDifference == 0) {
	  return "You were born this very year!";
	} else {
	  return "You will be born in ".concat(String(Math.abs(ageDifference))).concat(yearParticle).concat("."); 
	}
 }