var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SoireeSchema = new Schema({
  
  lieuCellule:String,
  dateCellule:Date,
  cycle:String,
  nombreParticipants:Number,
  nombreNouveaux:Number,
  nombreVieAbondance:Number 

});

module.exports = mongoose.model('Soiree', SoireeSchema);
