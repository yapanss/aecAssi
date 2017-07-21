var express = require('express');
var router = express.Router();

router.get('/admin/cellule/participant/ajout', function(req, res){
  res.render('participant_ajout', {
    pageId:'formationPage'

  });
});

module.exports = router;
