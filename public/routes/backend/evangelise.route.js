var express = require('express');
var router = express.Router();

// All the Evangelises

router.route('/api/evangelise')
.post(function(req, res){
  var Evangelise = req.app.get('EvangeliseFile');
  var evangelise = new Evangelise;

  evangelise.nom = req.body.nom;
  evangelise.contact = req.body.contact;
  evangelise.dateEvangelisation = req.body.dateEvangelisation;
  evangelise.lieuEvangelisation = req.body.lieuEvangelisation;

  evangelise.save(function(err){
    if(err){
      return res.send(err);
    }
    else{
      res.json({
        message:"Evangelise enregistré avec succès !"
      });
    }
  });
})
.get(function(req, res){
  var Evangelise = req.app.get('EvangeliseFile');
	Evangelise.find(function(err, evangelises){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(evangelises);
        }
    });
});

// One evangelise

router.route('/api/evangelise/:evangelise_id')
.delete(function(req, res){
  var Evangelise = req.app.get('EvangeliseFile');
  Evangelise.remove(
    {_id:req.params.evangelise_id}, function(err, evangelise){
      if(err){
        res.send(err);
      }
      else {
        res.json({message:"Suppression réussie"});
      }
    })
})
.put(function(req, res){
  var Evangelise = req.app.get('EvangeliseFile');
  Evangelise.findById(req.params.evangelise_id, function(err, evangelise){
    if(err){
      res.send(err);
    }

    if(req.body.nom){
      evangelise.nom = req.body.nom;
    }
    
    if(req.body.dateEvangelisation){
      evangelise.dateEvangelisation = req.body.dateEvangelisation;
    }
    
    if(req.body.lieuEvangelisation){
      evangelise.lieuEvangelisation = req.body.lieuEvangelisation;
    }
    if(req.body.contact){
      evangelise.contact = req.body.contact;
    }
    evangelise.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        res.json({message : "Evangelise modifié avec succès !"});
      }
    });

  });
});

module.exports = router;
