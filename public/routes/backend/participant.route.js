var express = require('express');
var router = express.Router();

// All the Participants

router.route('/api/participant')
.post(function(req, res){
  var Participant = req.app.get('ParticipantFile');
  var participant = new Participant;

  participant.nom = req.body.nom;
  participant.dateArrivee = req.body.dateArrivee;
  participant.contact = req.body.contact;
  participant.invitePar = req.body.invitePar;
  participant.religion = req.body.religion;
  participant.statutMatrimonial = req.body.statutMatrimonial;
  participant.cycle = req.body.cycle;
  participant.sexe = req.body.sexe;
  participant.lieuFormation = req.body.lieuFormation;
  participant.typeFormation = req.body.typeFormation;

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
  var Participant = req.app.get('ParticipantFile');
	Participant.find(function(err, participants){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(participants);
        }
    });
});

// One Participant

router.route('/api/participant/:participant_id')
.delete(function(req, res){
  var Participant = req.app.get('ParticipantFile');
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
  var Participant = req.app.get('ParticipantFile');
  Participant.findById(req.params.participant_id, function(err, participant){
    if(err){
      res.send(err);
    }
    console.log('Participant:', participant);
    if(req.body.nom){
      participant.nom = req.body.nom;
    }
    if(req.body.sexe){
      participant.sexe = req.body.sexe;
    }
    if(req.body.dateArrivee){
      participant.dateArrivee = req.body.dateArrivee;
    }
    if(req.body.lieuFormation){
      participant.lieuFormation = req.body.lieuFormation;
    }
    
    if(req.body.contact){
      participant.contact = req.body.contact;
    }
    if(req.body.invitePar){
      participant.invitePar = req.body.invitePar;
    }
    if(req.body.religion){
      participant.religion = req.body.religion;
    }
    if(req.body.statutMatrimonial){
      participant.statutMatrimonial = req.body.statutMatrimonial;
    }
    if(req.body.cycle){
      participant.cycle = req.body.cycle;
    }
    if(req.body.typeFormation){
      participant.typeFormation = req.body.typeFormation;
      console.log("typeFormation :", participant.typeFormation);
    }

    participant.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        res.json({message : "participant modifié avec succès"});
      }
    });

  });
});

module.exports = router;
