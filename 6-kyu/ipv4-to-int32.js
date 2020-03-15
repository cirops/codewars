//https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

if (!String.prototype.padStart) {
	String.prototype.padStart = function padStart(targetLength,padString) {
		 targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
		 padString = String((typeof padString !== 'undefined' ? padString : ' '));
		 if (this.length > targetLength) {
			  return String(this);
		 }
		 else {
			  targetLength = targetLength-this.length;
			  if (targetLength > padString.length) {
					padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
			  }
			  return padString.slice(0,targetLength) + String(this);
		 }
	};
}

function ipToInt32(ip) {
 return parseInt(ip.split(".").map(a => parseInt(a).toString(2).padStart(8, "0")).reduce((acc, curr) => acc + curr, 0), 2);
}