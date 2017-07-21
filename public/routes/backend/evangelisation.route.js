var express = require('express');
var router = express.Router();

// All the Evanelisations

router.route('/api/evangelisation')
.post(function(req, res){
  var Evangelisation = req.app.get('EvangelisationFile');
  var evangelisation = new Evangelisation;

  Evangelisation.nombreContacts = req.body.nombreContacts;
  Evangelisation.prospectusDistribues = req.body.prospectusDistribues;
  Evangelisation.date = req.body.date;
  Evangelisation.evangelistes = req.body.evangelistes;
  Evangelisation.lieu = req.body.lieu;

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

router.route('/evangelisation/:id')
.delete(function(req, res){
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
