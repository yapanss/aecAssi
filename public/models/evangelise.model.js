var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvangeliseSchema = new Schema({
  nom:{
    type:String,
    required:true
  },
  contact:{
    reseau:{
      type:String
    },
    numero:{
      type:String
    }
  },
  dateEvangelisation:Date,
  lieuEvangelisation:String
});

module.exports = mongoose.model('Evangelise', EvangeliseSchema);
