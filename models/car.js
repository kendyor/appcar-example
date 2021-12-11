let mongoose = require ("mongoose");
let Schema = mongoose.Schema;
var ObjectId = require('mongoose').Types.ObjectId; 

let carSchema = new Schema({
    _id: { type: ObjectId},
    anio: { type: Number, min: 0},
    fabricante: { type: String},
    Kilometraje: { type: String},
    color: { type: String}
}, {collection: 'cars'});

let Car = mongoose.model('Cars', carSchema);

module.exports = Car;