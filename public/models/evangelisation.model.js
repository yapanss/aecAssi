var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvangelisationSchema = new Schema({
  nombreContacts:{
    type:Number,
    required:true
  },
  prospectusDistribues:{
    type:Number,
    required:true
  },
  dateEvangelisation:Date,
  evangelistes:Array,
  lieuEvangelisation:String
});

module.exports = mongoose.model('Evangelisation', EvangelisationSchema);
