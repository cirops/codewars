//https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
	return (damage > health ? 0 : health - damage);
 }