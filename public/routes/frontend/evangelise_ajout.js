var express = require('express');
var router = express.Router();

router.get('/admin/evangelisation/evangelise/ajout', function(req, res){
  res.render('evangelise_ajout', {
    pageId:'evangelisationPage'

  });
});

module.exports = router;
