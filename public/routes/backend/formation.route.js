var express = require('express');
var router = express.Router();
var moment = require('moment');
//var Formation = require('./public/models/formation_model');

// All the formations

router.route('/api/formation')
.post(function(req, res){
  var Formation = req.app.get('FormationFile');
  var formation = new Formation;

  formation.fpn = req.body.fpn;
  formation.cdn = req.body.cdn;
  formation.vea = req.body.vea;
  formation.dateCellule = req.body.dateCellule;
  formation.lieuCellule = req.body.lieuCellule;

  formation.save(function(err){
    if(err){
      return res.send(err);
    }
    else{
      res.json({
        message:"Formation enregistrée avec succès !"
      });
    }
  });
})
.get(function(req, res){
  var Formation = req.app.get('FormationFile');
	Formation.find(function(err, formations){
        if(err){
        	res.send(err);
        }
        else{
        	res.json(formations);
        }
    });
});

// One Formation

router.route('/api/formation/:formation_id')
.delete(function(req, res){
  var Formation = req.app.get('FormationFile');
  Formation.remove(
    {_id:req.params.formation_id
    }, function(err, formation){
      if(err){
        res.send(err);
      }
      else {
        res.json({message:"Suppression réussie"});
      }
    });
})
.put(function(req, res){
  var Formation = req.app.get('FormationFile');
  Formation.findById(req.params.formation_id, function(err, formation){
    if(err){
      res.send(err);
    }

    if(req.body.fpn){
      formation.fpn = req.body.fpn;
    }
    if(req.body.cdn){
      formation.cdn = req.body.cdn;
    }
    if(req.body.vea){
      formation.vea = req.body.vea;
    }
    if(req.body.dateCellule){
      formation.dateCellule = req.body.dateCellule;
    }
    if(req.body.lieuCellule){
      formation.lieuCellule = req.body.lieuCellule;
    }

    formation.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        res.json({message : "formation modifiée avec succès"});
      }
    });

  });
});

module.exports = router;
