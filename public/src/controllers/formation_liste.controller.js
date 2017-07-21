(function(){
'use strict';

angular.module('AEC')
.controller('formationListeController', formationListeController);

formationListeController.$inject = ['listeFormations', 'celluleService'];
function formationListeController(listeFormations, celluleService){
	var ctrl = this;
	ctrl.edite = [];
	ctrl.listeFormations = listeFormations;
	ctrl.aDetailler = false;

	for (var i = 0; i < ctrl.listeFormations.length; i++) {
    	ctrl.edite[i]=false;
    };

	console.log("listeFormations :", ctrl.listeFormations);
	
	ctrl.supprimeFormation = function(itemIndex){
		console.log("SUPPRESSION ");

		console.log("FORMATION SUPPRIMEE :", ctrl.listeFormations[itemIndex]);
		console.log("ID SUPPRIMEE :", ctrl.listeFormations[itemIndex]._id);

		celluleService.supprimeFormation(ctrl.listeFormations[itemIndex]._id)
		.then(function success(response){
			console.log("MESSAGE :", response);
			ctrl.listeFormations.splice(itemIndex,1);
		});
	};

	ctrl.detailleFormation = function(itemIndex){
		console.log("DETAILLE ");
		ctrl.aDetailler = true;
		ctrl.detailFormation = ctrl.listeFormations[itemIndex];
		console.log("DETAIL FORMATION EST :", ctrl.detailFormation);
	};
	ctrl.retourListeFormations = function(){
		console.log("RETOUR ");
		ctrl.aDetailler = false;		
	};
	ctrl.editeFormation = function(itemIndex){
		console.log('ctrl.edite = ', ctrl.edite);
		ctrl.edite[itemIndex] = true;
		ctrl.formationEdite = ctrl.listeFormations[itemIndex];
		// console.log("ID a EDITER :", ctrl.classeEdite);
	};
	ctrl.modifieFormation = function(itemIndex){
		console.log("CLASSE EDITEE", ctrl.formationEdite);
		ctrl.edite[itemIndex]=false;
		celluleService.modifieFormation(ctrl.formationEdite._id, ctrl.formationEdite)
		.then(function success(result){
			console.log('RESULTAT :', result.data);
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