
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authschema = new Schema({
    username:  String,
   password:String

});

module.exports = mongoose.model('authschema', authschema);