(function(){
'use strict';

angular.module('AEC')
.controller('personnelListeController', personnelListeController);

personnelListeController.$inject = ['listePersonnel', 'personnelService'];
function personnelListeController(listePersonnel, personnelService){
	var ctrl = this;
	ctrl.edite = [];	
	ctrl.listePersonnel = listePersonnel;

	for (var i = 0; i < ctrl.listePersonnel.length; i++) {
    	ctrl.edite[i]=false;
    };
    
    ctrl.supprimePersonnel = function(itemIndex){
		console.log("SUPPRESSION ");

		console.log("PERSONNEL SUPPRIME :", ctrl.listePersonnel[itemIndex]);
		console.log("ID SUPPRIMEE :", ctrl.listePersonnel[itemIndex]._id);

		personnelService.supprimePersonnel(ctrl.listePersonnel[itemIndex]._id)
		.then(function success(response){
			console.log("MESSAGE :", response);
			ctrl.listePersonnel.splice(itemIndex,1);
		});		
	};

	ctrl.editePersonnel = function(itemIndex){
		console.log('ctrl.edite = ', ctrl.edite);
		ctrl.edite[itemIndex] = true;
		ctrl.personnelEdite = ctrl.listePersonnel[itemIndex];
		// console.log("ID a EDITER :", ctrl.classeEdite);
	};
	ctrl.neModifiePasPersonnel = function(itemIndex){
		ctrl.edite[itemIndex]=false;
	};
	ctrl.modifiePersonnel = function(itemIndex){
		console.log(" CONTACT personnel EDITE", ctrl.personnelEdite.contact);
		ctrl.edite[itemIndex]=false;

		personnelService.modifiePersonnel(ctrl.personnelEdite._id, ctrl.personnelEdite)
		.then(function success(result){
			console.log('RESULTAT :', result.data);

			console.log("REUSSI ???");
			// ctrl.edite = false;
		}, function error(){
			console.log('OOPS, UNE ERREUR EST SURVENUE...');
		});
	};
	
};
})();