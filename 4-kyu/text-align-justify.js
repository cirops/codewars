//https://www.codewars.com/kata/537e18b6147aa838f600001b

function justify(str, len) {
	a = str.split(" ");
	currSize = 0;
	currLine = [];
	out = "";
	while(a.length > 0) {
		 curr = a.shift();
		 if(curr.length + currSize + currLine.length > len) {
			  if(currLine.length == 1) {
					out += currLine[0] + "\n";
			  } else {
					out += buff(currLine, len)  + "\n";
			  }
			  currLine = [curr];
			  currSize = curr.length;
		 } else {
			  currLine.push(curr);
			  currSize += curr.length;
		 }
	}
	return out + currLine.join(" ");
};

function buff(wordArr, len) {
	spaceLeft = len - wordArr.reduce((acc, curr) => acc + curr.length, 0);
	i = 0;
	while(spaceLeft > 0) {
		 spaceLeft--;
		 wordArr[i] += " ";
		 i++;
		 if(i == wordArr.length - 1) {
			  i = 0;
		 }
	}
	wordArr[i] += " ".repeat(spaceLeft);
	return wordArr.join("");
}