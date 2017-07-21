var express = require('express');
var router = express.Router();

router.get('/admin/cellule/ajout', function(req, res){
  res.render('cellule_ajout', {
    pageId:'formationPage'

  });
});

module.exports = router;
