var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
  nom:{
    type:String,
    required:true
  },
  cycle:String,
  contact:{
    reseau:{
      type:String
    },
    numero:{
      type:String
    }
    
  },
  dateArrivee:Date,
  formation:String,

});

module.exports = mongoose.model('Participant', ParticipantSchema);
