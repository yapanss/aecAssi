var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
	mongoose.Promise = require('bluebird');

var bodyParser = require('body-parser');

var Formation = require('./public/models/formation.model');
var Evangelisation = require('./public/models/evangelisation.model');
var Soiree = require('./public/models/soireenoce.model');
var Participant = require('./public/models/participant.model');
var Evangelise = require('./public/models/evangelise.model');


// Frontend Routes
// var ajoutEvangelisationRoute = require('./public/routes/frontend/evangelisation_ajout');
// var indexRoute = require('./public/routes/frontend/indexroute');
// var ajoutCelluleRoute = require('./public/routes/frontend/cellule_ajout');
// var ajoutParticipantRoute = require('./public/routes/frontend/participant_ajout');
// var ajoutEvangeliseRoute = require('./public/routes/frontend/evangelise_ajout');

// Backend Routes
var apiFormation = require('./public/routes/backend/formation.route.js');
var apiEvangelisation = require('./public/routes/backend/evangelisation.route.js');
var apiSoiree = require('./public/routes/backend/soireenoce.route.js');
var apiParticipant = require('./public/routes/backend/participant.route.js');
var apiEvangelise = require('./public/routes/backend/evangelise.route.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/aecDB');


app.set ('port', process.env.PORT || 4000);
// app.set('view engine', 'ejs');
// app.set('views', 'public/views');

app.set('FormationFile', Formation);
app.set('EvangelisationFile', Evangelisation);
app.set('SoireeFile', Soiree);
app.set('EvangeliseFile', Evangelise);
app.set('PartcipantFile', Participant);


app.locals.siteName = "Arc En Christ";

app.use(express.static(__dirname + '/public'));

// app.use(ajoutEvangelisationRoute);
// app.use(indexRoute);
// app.use(ajoutCelluleRoute);
// app.use(ajoutEvangeliseRoute);
// app.use(ajoutParticipantRoute);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.use(apiFormation);
app.use(apiSoiree);

app.listen(app.get('port'), function(){
  console.log('Listening on port :' , app.get('port'));
});
