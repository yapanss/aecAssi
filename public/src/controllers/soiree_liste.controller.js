(function(){
'use strict';

angular.module('AEC')
.controller('soireeListeController', soireeListeController);

soireeListeController.$inject = ['listeSoirees', 'celluleService'];
function soireeListeController(listeSoirees, celluleService){
  var ctrl = this;
  ctrl.edite = [];
  ctrl.listeSoirees = listeSoirees;

  for (var i = 0; i < ctrl.listeSoirees.length; i++) {
      ctrl.edite[i]=false;
    };

  console.log("listeSoirees :", ctrl.listeSoirees);

  ctrl.editeSoiree = function(itemIndex){
    console.log('ctrl.edite = ', ctrl.edite);
    ctrl.edite[itemIndex] = true;
    ctrl.soireeEdite = listeSoirees[itemIndex];
    console.log("SOIREE a EDITER :", ctrl.soireeEdite);
  };

  ctrl.supprimeSoiree = function(itemIndex){

    console.log("SOIREE SUPPRIMEE :", ctrl.listeSoirees[itemIndex]);
    console.log("ID SUPPRIMEE :", ctrl.listeSoirees[itemIndex]._id);

    celluleService.supprimeSoiree(ctrl.listeSoirees[itemIndex]._id)
    .then(function success(response){
      console.log("MESSAGE :", response);
      ctrl.listeSoirees.splice(itemIndex,1);
    });
  };

  ctrl.modifieSoiree = function(itemIndex){
    console.log("SOIREE EDITEE", ctrl.soireeEdite);
    ctrl.edite[itemIndex]=false;
    // celluleService.modifieSoiree(ctrl.SoireeEdite._id, ctrl.SoireeEdite)
    celluleService.modifieSoiree(ctrl.soireeEdite._id, ctrl.soireeEdite)
    .then(function success(result){
      console.log('RESULTAT :', result.data);
      // ctrl.edite = false;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUE...');
    });
  };
  ctrl.neModifiePasSoiree = function(itemIndex){
    ctrl.edite[itemIndex]=false;
  };

};

})();