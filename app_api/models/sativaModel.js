var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Children of PropertiesSchema

EffectsSchema = new Schema({
    properties: String,
    rating: Number,
})

MedicinalSchema = new Schema({
    properties: String,
    rating: Number,
})

NegativesSchema = new Schema({
    properties: String,
    rating: Number,
})

// Child of SativaSchema

PropertiesSchema = new Schema({
    effects: [EffectsSchema],
    medicinal: [MedicinalSchema],
    negatives: [NegativesSchema],

}) 

// Parent

var SativaSchema = new Schema({
    name: { type: String },
    description: { type: String },
    img: { type: String },
    properties: [PropertiesSchema]
})


mongoose.model('Sativa', SativaSchema);