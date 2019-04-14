var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSchema = new Schema({
    name:  String,
    formatted_address: String,
    phoneNumber:   String,
    disease_cure: String,
    date: { type: Date, default: Date.now },
    location: { type: {type: String} , coordinates: []},
    ageGroup: String

});
hospitalSchema.index({location:"2dsphere"});
module.exports = mongoose.model('hospitalSchema', hospitalSchema);