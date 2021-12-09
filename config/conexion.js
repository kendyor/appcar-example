let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbappcar');

module.exports = mongoose;