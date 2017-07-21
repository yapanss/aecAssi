(function(){
'use strict';

angular.module('AEC')
.controller('formationDetailController', formationDetailController);

formationDetailController.$inject = ['detailFormation'];
function formationDetailController(detailFormation){
	var ctrl = this;
	ctrl.detailFormation = detailFormation;

	console.log("detailFormation :", ctrl.detailFormation);

};

})();