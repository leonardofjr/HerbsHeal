var request = require('request');

module.exports.call = function(req, res, next) {
	// Setting request options

	var requestOptions = {
		url: 'http://localhost:3000/api/strains/sativa/',
		method: 'GET',
		json: {}
	}
  	
	// Fetching Request

  	request(requestOptions, function(err, response, body) {
    	renderHomepage(req, res, body);
	})
}



var renderHomepage = function(req, res, requestBody) {
  res.render('index', { title: requestBody[0].name});
}
