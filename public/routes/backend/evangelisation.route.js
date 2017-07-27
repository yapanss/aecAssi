var express = require('express');
var router = express.Router();

// All the Evanelisations

router.route('/api/evangelisation')
.post(function(req, res){
  var Evangelisation = req.app.get('EvangelisationFile');
  var evangelisation = new Evangelisation;

  evangelisation.nombreContacts = req.body.nombreContacts;
  evangelisation.prospectusDistribues = req.body.prospectusDistribues;
  evangelisation.dateEvangelisation = req.body.dateEvangelisation;
  evangelisation.evangelistes = req.body.evangelistes;
  evangelisation.lieuEvangelisation = req.body.lieuEvangelisation;

  evangelisation.save(function(err){
    if(err){
      return res.send(err);
    }
    else{
      res.json({
        message:"Evangelisation enregistrée avec succès !"
      });
    }
  });
})
.get(function(req, res){
  var Evangelisation = req.app.get('EvangelisationFile');
	Evangelisation.find(function(err, evangelisations){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(evangelisations);
        }
    });
});

// One Evangelisation

router.route('/api/evangelisation/:evangelisation_id')
.delete(function(req, res){
  var Evangelisation = req.app.get('EvangelisationFile');
  Evangelisation.remove(
    {_id:req.params.evangelisation_id}, function(err, evangelisation){
      if(err){
        res.send(err);
      }
      else {
        res.json({message:"Suppression réussie"});
      }
    })
})
.put(function(req, res){
  var Evangelisation = req.app.get('EvangelisationFile');
  Evangelisation.findById(req.params.evangelisation_id, function(err, evangelisation){
    if(err){
      res.send(err);
    }

    if(req.body.nombreContacts){
      evangelisation.nombreContacts = req.body.nombreContacts;
    }
    if(req.body.prospectusDistribues){
      evangelisation.prospectusDistribues = req.body.prospectusDistribues;
    }
    if(req.body.dateEvangelisation){
      evangelisation.dateEvangelisation = req.body.dateEvangelisation;
    }
    if(req.body.evangelistes){
      evangelisation.evangelistes = req.body.evangelistes;
    }
    if(req.body.lieuEvangelisation){
      evangelisation.lieuEvangelisation = req.body.lieuEvangelisation;
    }

    evangelisation.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        res.json({message : "Evangelisation modifiée avec succès"});
      }
    });

  });
});

module.exports = router;
