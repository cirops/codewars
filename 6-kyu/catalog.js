//https://www.codewars.com/kata/59d9d8cb27ee005972000045

function catalog(s, article) {
	itemsRegex = /<prod><name>(.*)<\/name><prx>(.*)<\/prx><qty>(.*)<\/qty><\/prod>/g;
	output = "";
	s.match(itemsRegex).forEach(item => {
	  itemName = item.match(/<name>(.*)<\/name>/)[1];
	  if (itemName.includes(article)) {
		 itemPrice = item.match(/<prx>(.*)<\/prx>/)[1];
		 itemQuantity = item.match(/<qty>(.*)<\/qty>/)[1];
		 if (output.length > 0) {
			output += "\r\n";
		 }
		 output += `${itemName} > prx: $${itemPrice} qty: ${itemQuantity}`;
	  }
	});
	return output == '' ? 'Nothing' : output;
 }