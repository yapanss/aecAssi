var express = require('express');
var router = express.Router();

// All the Evanelisations

router.route('/api/evangelise')
.post(function(req, res){
  var Evangelise = req.app.get('EvangeliseFile');
  var evangelise = new Evangelise;

  Evangelisation.nombreContacts = req.body.nombreContacts;
  Evangelisation.prospectusDistribues = req.body.prospectusDistribues;
  Evangelisation.date = req.body.date;
  Evangelisation.evangelistes = req.body.evangelistes;
  Evangelisation.lieu = req.body.lieu;

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
	Evangelise.find(function(err, evangelises){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(evangelises);
        }
    });
});

// One Evangelisation

router.route('/evangelise/:id')
.delete(function(req, res){
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
  Evangelise.findById(req.params.evangelise_id, function(err, evangelise){
    if(err){
      res.send(err);
    }

    if(req.body.nombreContacts){
      evangelisation.nombreContacts = req.body.nombreContacts;
    }
    if(req.body.prospectusDistribues){
      evangelisation.prospectusDistribues = req.body.prospectusDistribues;
    }
    if(req.body.date){
      evangelisation.date = req.body.date;
    }
    if(req.body.evangelistes){
      evangelisation.evangelistes = req.body.evangelistes;
    }
    if(req.body.lieu){
      evangelisation.lieu = req.body.lieu;
    }
  });
});

module.exports = router;
