(function(){
'use strict';

angular.module('AEC')
.controller('evangelisationListeController', evangelisationListeController);

evangelisationListeController.$inject = ['listeEvangelisations', 'evangelisationService'];
function evangelisationListeController(listeEvangelisations, evangelisationService){
	var ctrl = this;
	ctrl.edite = [];
	ctrl.listeEvangelisations = listeEvangelisations;
	// ctrl.itemModifie = listeevangelisations;
	ctrl.aDetailler = false;

	for (var i = 0; i < ctrl.listeEvangelisations.length; i++) {
    	ctrl.edite[i]=false;
    };

	console.log("listeEvangelisations :", ctrl.listeEvangelisations);
	
	ctrl.supprimeEvangelisation = function(itemIndex){
		console.log("SUPPRESSION ");

		console.log("evangelisation SUPPRIMEE :", ctrl.listeEvangelisations[itemIndex]);
		console.log("ID SUPPRIMEE :", ctrl.listeEvangelisations[itemIndex]._id);

		evangelisationService.supprimeEvangelisation(ctrl.listeEvangelisations[itemIndex]._id)
		.then(function success(response){
			console.log("MESSAGE :", response);
			ctrl.listeEvangelisations.splice(itemIndex,1);
		});
	};

	ctrl.detailleEvangelisation = function(itemIndex){
		console.log("DETAILLE ");
		ctrl.aDetailler = true;
		ctrl.detailEvangelisation = ctrl.listeEvangelisations[itemIndex];
		console.log("DETAIL evangelisation EST :", ctrl.detailEvangelisation);
	};
	ctrl.retourListeEvangelisations = function(){
		console.log("RETOUR ");
		ctrl.aDetailler = false;		
	};
	ctrl.editeEvangelisation = function(itemIndex){
		console.log('ctrl.edite = ', ctrl.edite);
		ctrl.edite[itemIndex] = true;
		ctrl.evangelisationEdite = listeEvangelisations[itemIndex];
		console.log("evangelisation a EDITER :", ctrl.evangelisationEdite);
	};
	ctrl.modifieEvangelisation = function(itemIndex){
		console.log("evangelisation EDITEE", ctrl.evangelisationEdite);
		ctrl.edite[itemIndex]=false;
		// evangelisationService.modifieevangelisation(ctrl.evangelisationEdite._id, ctrl.evangelisationEdite)
		evangelisationService.modifieEvangelisation(ctrl.evangelisationEdite._id, ctrl.evangelisationEdite)
		.then(function success(result){
			console.log('RESULTAT :', result.data);
			// ctrl.edite = false;
		}, function error(){
			console.log('OOPS, UNE ERREUR EST SURVENUE...');
		});
	};
	ctrl.neModifiePasEvangelisation = function(itemIndex){
		ctrl.edite[itemIndex]=false;
	};
	ctrl.retourne = function(){
		ctrl.edite[itemIndex]=false;
	};
};

})();