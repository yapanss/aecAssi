var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var FormationSchema = new Schema({
  fpn:{
    cycle:String,
    nombreParticipants:Number,
    nombreNouveaux:Number,
    meditationTexte:String,
    meditationDirigeant:String,
    questionPartage:String,
    questionPartageDirigeant:String,
    enseignementTitre:String,
    enseignementDirigeant:String
  },
  cdn:{
    cycle:String,
    nombreParticipants:Number,
    nombreNouveaux:Number,
    meditationTexte:String,
    meditationDirigeant:String,
    questionPartage:String,
    questionPartageDirigeant:String,
    enseignementTitre:String,
    enseignementDirigeant:String
  },  
  vea:{
    cycle:String,
    nombreParticipants:Number,
    nombreNouveaux:Number,
    enseignementTitre:String,
    enseignementDirigeant:String
  },
  dateCellule:Date,
  lieuCellule:String
});

module.exports = mongoose.model('Formation', FormationSchema);

