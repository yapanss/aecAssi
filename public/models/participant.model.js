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
      reseau1:String,
      reseau2:String
    },
    numero:{
      numero1:String,
      numero2:String
    }
    
  },
  dateArrivee:Date,
  typeFormation:String,
  invitePar:String,
  religion:String,
  statutMatrimonial:String,
  sexe:String,
  lieuFormation:String

});

module.exports = mongoose.model('Participant', ParticipantSchema);
