var mongoose = require('mongoose');

ver indicaSchema = mongoose.Schema({
    name: { type: String }
})

mongoose.model('Indica', indicaSchema)

var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}