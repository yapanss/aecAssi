var express = require('express');
var router = express.Router();

// All the Evanelisations

router.route('/api/participant')
.post(function(req, res){
  var Participant = req.app.get('ParticipationFile');
  var participant = new Evangelisation;

  Evangelisation.nombreContacts = req.body.nombreContacts;
  Evangelisation.prospectusDistribues = req.body.prospectusDistribues;
  Evangelisation.date = req.body.date;
  Evangelisation.evangelistes = req.body.evangelistes;
  Evangelisation.lieu = req.body.lieu;

  participant.save(function(err){
    if(err){
      return res.send(err);
    }
    else{
      res.json({
        message:"participant enregistré avec succès !"
      });
    }
  });
})
.get(function(req, res){
	Participant.find(function(err, participants){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(participants);
        }
    });
});

// One Evangelisation

router.route('/participant/:id')
.delete(function(req, res){
  Participant.remove(
    {_id:req.params.participant_id}, function(err, participant){
      if(err){
        res.send(err);
      }
      else {
        res.json({message:"Suppression réussie"});
      }
    })
})
.put(function(req, res){
  Participant.findById(req.params.participant_id, function(err, participant){
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
