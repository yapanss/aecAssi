var express = require('express');
var router = express.Router();

// All the Evanelisations

router.route('/api/soireenoce')
.post(function(req, res){
  var Soiree = req.app.get('SoireeFile');
  var soiree = new Soiree;

  soiree.cycle = req.body.soiree.cycle;
  soiree.dateCellule = req.body.dateCellule;
  soiree.lieuCellule = req.body.lieuCellule;
  soiree.nombreParticipants = req.body.soiree.nombreParticipants;
  soiree.nombreVieAbondance = req.body.soiree.nombreVieAbondance;
  soiree.nombreNouveaux = req.body.soiree.nombreNouveaux;

  soiree.save(function(err){
    if(err){
      return res.send(err);
    }
    else{
      res.json({
        message:"soiree noces enregistrée avec succès !"
      });
    }
  });
})
.get(function(req, res){
  var Soiree = req.app.get('SoireeFile');
	Soiree.find(function(err, soirees){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(soirees);
        }
    });
});

// One Evangelisation

router.route('/api/soireenoce/:soiree_id')
.delete(function(req, res){
  var Soiree = req.app.get('SoireeFile');
  Soiree.remove(
    {_id:req.params.soiree_id}, function(err, soiree){
      if(err){
        res.send(err);
      }
      else {
        res.json({message:"Suppression réussie"});
      }
    })
})
.put(function(req, res){
  var Soiree = req.app.get('SoireeFile');
  Soiree.findById(req.params.soiree_id, function(err, soiree){

    console.log("REQ BODY :", req.body);

    if(err){
      res.send(err);
    }

    if(req.body.nombreParticipants){
      soiree.nombreParticipants = req.body.nombreParticipants;
    }
    if(req.body.nombreNouveaux){
      soiree.nombreNouveaux = req.body.nombreNouveaux;
    }
    if(req.body.dateCellule){
      soiree.dateCellule = req.body.dateCellule;
    }
    if(req.body.nombreVieAbondance){
      soiree.nombreVieAbondance = req.body.nombreVieAbondance;
    }
    if(req.body.lieuCellule){
      soiree.lieuCellule = req.body.lieuCellule;
    }
    if(req.body.cycle){
      soiree.cycle = req.body.cycle;
    }

    soiree.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        console.log("soiree === ", soiree);
        res.json({message: "Soiree Noces modifiée avec succès !"});
      }
    });

  });
});

module.exports = router;
