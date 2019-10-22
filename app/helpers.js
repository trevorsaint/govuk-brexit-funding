const moment = require('moment');


// Date formatter
function getFormattedDate(m) {
	var date = moment(m);
	var format = date.format('D MMMM YYYY');
	return format;
}


// Contains any
function containsAny(source, target) {
  var result = source.filter(function(item) { return target.indexOf(item) > -1 });
  return (result.length > 0);
}
