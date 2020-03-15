//https://www.codewars.com/kata/59126992f9f87fd31600009b

function whoseMove(lastPlayer, win) {
	if ((lastPlayer == "white" && win == true) || (lastPlayer=="black" && win == false)) {
	  return "white";
	}
	  return "black"
 }