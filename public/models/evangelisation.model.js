var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvangelisationSchema = new Schema({
  nombreContacts:Number, 
  prospectusDistribues:Number,
  dateEvangelisation:Date,
  evangelistes:Array,
  lieuEvangelisation:String
});

module.exports = mongoose.model('Evangelisation', EvangelisationSchema);
