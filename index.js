module.exports = function(year) {
	var day = 1;
	var date = new Date(year, 4, day);
	var check = 0;
	while (check < 2) {
		if (date.getDay() === 0) {
			if (++check >= 2) {
				break;
			}
		}
		date.setDate(++day);
	}
	return date;
}