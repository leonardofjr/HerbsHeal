var request = require('request');

module.exports.call = function(req, res, next) {
  request('http://localhost:3000/api/strains/sativa/58f7bf2c28018ff5f6653516', function(err, response, body) {
    renderHomepage(req, res, body);
})
}



var renderHomepage = function(req, res, requestBody) {
  res.render('index', { title: requestBody });
}
