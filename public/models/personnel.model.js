var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personnelSchema = new Schema({
    	login:{
    		type:String, 
            required: true,
            index:{
                unique:true
            }
    	},
    	mot_de_passe:{
    		type:String, 
            required: true,
            // select:false
    	},
    	nom:{
    		type:String,
    		required:true
    	},
    	titre:{
    		type:String,
    		required:false
    	}
    });

personnelSchema.pre('save', function(next){
    var personnel = this;
    if(!personnel.isModified('mot_de_passe')){
        return next();
    }
    bcrypt.hash(personnel.mot_de_passe, null, null, function(err, hash){
        if(err){
            return next(err);
        }
        personnel.mot_de_passe = hash;
        next();
    });
});

// method to compare a given password with the database hash
personnelSchema.methods.comparePassword = function(mot_de_passe){
    var personnel = this;
    return bcrypt.compareSync(mot_de_passe, personnel.mot_de_passe);
};

module.exports = mongoose.model('Personnel', personnelSchema);
