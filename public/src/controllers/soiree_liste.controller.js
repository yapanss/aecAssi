(function(){
'use strict';

angular.module('AEC')
.controller('soireeListeController', soireeListeController);

soireeListeController.$inject = ['listeSoirees', 'celluleService'];
function soireeListeController(listeSoirees, celluleService){
  var ctrl = this;
  ctrl.listeSoirees = listeSoirees;

  console.log("listeSoirees :", ctrl.listeSoirees);

  ctrl.supprimeSoiree = function(itemIndex){
    console.log("SUPPRESSION ");

    console.log("SOIREE SUPPRIMEE :", ctrl.listeSoirees[itemIndex]);
    console.log("ID SUPPRIMEE :", ctrl.listeSoirees[itemIndex]._id);

    celluleService.supprimeCellule(ctrl.listeSoirees[itemIndex]._id)
    .then(function success(response){
      console.log("MESSAGE :", response);
      ctrl.listeSoirees.splice(itemIndex,1);
    });
  };
};




})();