(function(){
'use strict';

angular.module('AEC')
.controller('evangeliseListeController', evangeliseListeController);

evangeliseListeController.$inject = ['listeEvangelises', 'evangeliseService'];
function evangeliseListeController(listeEvangelises, evangeliseService){
	var ctrl = this;
	ctrl.edite = [];
	ctrl.listeEvangelises = listeEvangelises;
	ctrl.aDetailler = false;

	for (var i = 0; i < ctrl.listeEvangelises.length; i++) {
    	ctrl.edite[i]=false;
    };

	console.log("listeEvangelises :", ctrl.listeEvangelises);
	
	ctrl.supprimeEvangelise = function(itemIndex){
		console.log("SUPPRESSION ");

		console.log("evangelise SUPPRIME :", ctrl.listeEvangelises[itemIndex]);
		console.log("ID SUPPRIMEE :", ctrl.listeEvangelises[itemIndex]._id);

		evangeliseService.supprimeEvangelise(ctrl.listeEvangelises[itemIndex]._id)
		.then(function success(response){
			console.log("MESSAGE :", response);
			ctrl.listeEvangelises.splice(itemIndex,1);
		});
	};

	ctrl.detailleEvangelise = function(itemIndex){
		console.log("DETAILLE ");
		ctrl.aDetailler = true;
		ctrl.detailEvangelise = ctrl.listeEvangelises[itemIndex];
		console.log("DETAIL evangelise EST :", ctrl.detailEvangelise);
	};
	ctrl.retourListeEvangelises = function(){
		console.log("RETOUR ");
		ctrl.aDetailler = false;		
	};
	ctrl.editeEvangelise = function(itemIndex){
		console.log('ctrl.edite = ', ctrl.edite);
		ctrl.edite[itemIndex] = true;
		ctrl.evangeliseEdite = ctrl.listeEvangelises[itemIndex];
		// console.log("ID a EDITER :", ctrl.classeEdite);
	};
	ctrl.neModifiePasEvangelise = function(itemIndex){
		ctrl.edite[itemIndex]=false;
	};
	ctrl.modifieEvangelise = function(itemIndex){
		console.log(" CONTACT evangelise EDITE", ctrl.evangeliseEdite.contact);
		ctrl.edite[itemIndex]=false;

		evangeliseService.modifieEvangelise(ctrl.evangeliseEdite._id, ctrl.evangeliseEdite)
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