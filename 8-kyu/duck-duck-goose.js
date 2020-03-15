//https://www.codewars.com/kata/582e0e592029ea10530009ce

function duckDuckGoose(players, goose) {
	goose--;
	if(goose <= players.length) {
	  return players[goose]["name"];
	}
	return players[goose % players.length]["name"];
 }