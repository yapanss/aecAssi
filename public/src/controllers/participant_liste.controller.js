(function(){
'use strict';

angular.module('AEC')
.controller('participantListeController', participantListeController);

participantListeController.$inject = ['listeParticipants', 'participantService'];
function participantListeController(listeParticipants, participantService){
	var ctrl = this;
	ctrl.edite = [];
	ctrl.listeParticipants = listeParticipants;
	ctrl.aDetailler = false;

	for (var i = 0; i < ctrl.listeParticipants.length; i++) {
    	ctrl.edite[i]=false;
    };

	console.log("listeParticipants :", ctrl.listeParticipants);
	
	ctrl.supprimeParticipant = function(itemIndex){
		console.log("SUPPRESSION ");

		console.log("PARTICIPANT SUPPRIME :", ctrl.listeParticipants[itemIndex]);
		console.log("ID SUPPRIMEE :", ctrl.listeParticipants[itemIndex]._id);

		participantService.supprimeParticipant(ctrl.listeParticipants[itemIndex]._id)
		.then(function success(response){
			console.log("MESSAGE :", response);
			ctrl.listeParticipants.splice(itemIndex,1);
		});
	};

	ctrl.detailleParticipant = function(itemIndex){
		console.log("DETAILLE ");
		ctrl.aDetailler = true;
		ctrl.detailParticipant = ctrl.listeParticipants[itemIndex];
		console.log("DETAIL PARTICIPANT EST :", ctrl.detailParticipant);
	};
	ctrl.retourListeParticipants = function(){
		console.log("RETOUR ");
		ctrl.aDetailler = false;		
	};
	ctrl.editeParticipant = function(itemIndex){
		console.log('ctrl.edite = ', ctrl.edite);
		ctrl.edite[itemIndex] = true;
		ctrl.participantEdite = ctrl.listeParticipants[itemIndex];
		// console.log("ID a EDITER :", ctrl.classeEdite);
	};
	ctrl.neModifiePasParticipant = function(itemIndex){
		ctrl.edite[itemIndex]=false;
	};
	ctrl.modifieParticipant = function(itemIndex){
		console.log(" CONTACT PARTICIPANT EDITE", ctrl.participantEdite.contact);
		ctrl.edite[itemIndex]=false;

		participantService.modifieParticipant(ctrl.participantEdite._id, ctrl.participantEdite)
		.then(function success(result){
			console.log('RESULTAT :', result.data);

			console.log("REUSSI ???");
			// ctrl.edite = false;
		}, function error(){
			console.log('OOPS, UNE ERREUR EST SURVENUE...');
		});
	};
	ctrl.retourne = function(){
		ctrl.edite[itemIndex]=false;
	};
};

})();