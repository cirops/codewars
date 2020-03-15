//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
	if (seconds == 0) return 'now';
	let format = ['year', 'day', 'hour', 'minute', 'second'];
	let conversion = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
	let counts = [0, 0, 0, 0, 0];
	out = '';
	for (let i = 0; i < 5; i++) {
		 counts[i] = Math.floor(seconds / conversion[format[i]]);
		 if (counts[i] > 0) {
			  out += `${counts[i]} ${format[i]}${counts[i] > 1 ? 's' : ''}, `;
		 }
		 seconds = seconds % conversion[format[i]];
	}
	return out.slice(0, -2).replace(/(,)(?!.*,)/, " and");
}