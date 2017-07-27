var express = require('express');
var router = express.Router();

router.route('/api/personnel')
.post(function(req, res){
	var Personnel = req.app.get('PersonnelFile');
	var personnel = new Personnel;
	personnel.login = req.body.login;
	personnel.mot_de_passe = req.body.mot_de_passe;
	personnel.nom = req.body.nom;
	personnel.titre = req.body.titre;

    personnel.save(function(err){
		if(err){
			return res.send(err);
		}	
		else{
		    console.log("Enregistré !");
		    }		  					
	});
	console.log("REQ BODY :", req.body);
	
	res.json({message: 'MERCI BEAUCOUP'});
})
.get(function(req, res){
	var Personnel = req.app.get('PersonnelFile');
	Personnel.find(function(err, users){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(users);
        	console.log("USERS :", users);
        }
    });
});

router.route('/api/personnel/:personnel_id')
.get(function(req, res){
	var Personnel = req.app.get('PersonnelFile');
	Personnel.findById(req.params.personnel_id, function(err, personnel){
		if (err){
			res.send(err);
		}
		res.json(personnel);
	});
})
.delete(function(req, res){
	console.log("ID A SUPPRIMER :", req.params);
  var Personnel = req.app.get('PersonnelFile');
  Personnel.remove(
		{_id:req.params.personnel_id
		}, function(err, personnel){
		if(err){
			res.send(err);
		}
		else{
			console.log('personnel :', personnel);
			res.json({message:"Suppression réussie"});
		}
	});
})
.put(function(req, res){
  var Personnel = req.app.get('PersonnelFile');
  Personnel.findById(req.params.personnel_id, function(err, personnel){
    if(err){
      res.send(err);
    }

    if(req.body.nom){
      personnel.nom = req.body.nom;
    }
    if(req.body.titre){
      personnel.titre = req.body.titre;
    }
    if(req.body.login){
      personnel.login = req.body.login;
    }
    if(req.body.mot_de_passe){
      personnel.mot_de_passe = req.body.mot_de_passe;
    }

    personnel.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        res.json({message : "personnel modifié avec succès"});
      }
    });

 });
});

module.exports = router;



