var express = require('express');
var router = express.Router();

router.get('/admin/evangelisation/ajout', function(req, res){
  res.render('evangelisation_ajout', {
    pageId:'evangelisationPage'

  });
});

module.exports = router;
