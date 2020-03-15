//https://www.codewars.com/kata/568018a64f35f0c613000054

class Guesser {
	constructor(number, lives) {
	  this.number = number;
	  this.lives = lives;
	}
	
	guess(n) {
	  if(this.lives < 1) {
			throw "Error: Already Dead.";
	  } 
	  if(n == this.number) {
		 return true;
	  } else {
	  
		 this.lives--;
		 return false;
  
		 
	  }
	}
 }