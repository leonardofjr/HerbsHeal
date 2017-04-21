var mongoose = require('mongoose');


var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

// Importing Model
var Sativa = mongoose.model('Sativa');


// Fetching all entries and sending response

module.exports.sativaReadAll = function(req, res, next) {
    Sativa.find()
    .exec()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send('error occured')
    })
}

// Fetching an entry by ID  and sending response

module.exports.sativaReadOne = function(req, res, next) {
        Sativa.findOne({
            _id: req.params.sativaid
        }).exec()
        .then((response) => {
            res.send(response);

        }).catch((err) => {
            res.send('error occured');
        })
}

// Creating a new entry

module.exports.sativaCreate = function(req, res, next) {
    Sativa.create(req.body)
    .then((newSativa) => {
        res.send(newSativa)
    })
    .catch((err) => {
        res.send('error occured')
    })

    
}

// Updating entry by ID

module.exports.sativaUpdate = function(req, res, next) {
    Sativa.findByIdAndUpdate(
        req.params.sativaid,
        { $set: { 
                name: req.body.name,
                description: req.body.description,
                img: req.body.img,

             }
        },
        { new: true },
        function(err, data) {
            if (err) return handleError(err);
            res.send(data);
        }
        )
}

// Removing entry by ID

module.exports.sativaDelete = function(req, res, next) {
    Sativa.findByIdAndRemove({
        _id: req.params.sativaid}, function(err, data) {
            res.send()
    })
  
}


module.exports.addMedicinalProperties = function(req, res, next) {
    Sativa.findOne({
        _id: req.params.sativaid
    })
    .exec()
    .then((data) => {
        data.properties.push({
            effects: {
                properties: req.body.properties,
                rating: req.body.rating,
            }
        });
        data.save()
        console.log('Success');
    })
}
