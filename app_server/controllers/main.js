var request = require('request');

var apiOptions = {
    server: 'http://localhost:3000/'
}
if (process.env.NODE_ENV = "production") {
	apiOptions.server = 'https://herbsheal.herokuapp.com/';
}

module.exports.call = function(req, res, next) {
	// Setting request options

	var requestOptions = {
		url: apiOptions.server + 'api/strains/sativa/',
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
