var express = require('express');
var router = express.Router();

router.route('/authentifier')
.post(function(req, res){
	Personnel.findOne({
		login:req.body.login
	}).select('nom prenoms login mot_de_passe fonction').exec(function(err, personnel){
		console.log("PERSONNEL ?", personnel);
		if(err){
			throw err;
		}

		if(!personnel){
			console.log("PAS DE PERSONNEL");
			res.json({
				success:false,
				message:'Authentification failed. Personnel not found !'
			});
		}
		else{
			if(personnel){
				var motDePasseValide = personnel.comparePassword(req.body.mot_de_passe);
				console.log("MOT DE PASSE VALIDE ?", motDePasseValide);
				if(!motDePasseValide){
					res.json({
						success:false,
						message:'Authentification failed. Wrong password'
					});
				}
				else{
					var token = jwt.sign({
						nom:personnel.nom,
						login:personnel.login
					},superSecret,{
						expiresIn:60*60*24
					});
					console.log("TOKEN :", token);
					res.json({
						success:true,
						message:'Enjoy your token',
						token:token
					});
				}
			}
		}
	});
});

module.exports = router;