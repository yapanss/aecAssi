(function(){

'use strict';

angular.module('AEC')
.controller('celluleController', celluleController);

celluleController.$inject = ['celluleService'];

function celluleController(celluleService){
  var ctrl = this;

  ctrl.fpn = {};
  ctrl.cdn = {};
  ctrl.vea = {};
  ctrl.dateCellule = "";
  ctrl.lieuCellule = "";
  ctrl.natureCellule = "";
  ctrl.soiree = {};

  ctrl.enregistreFormation = function(){
    console.log("BONJOUR: ", ctrl);
    celluleService.enregistreFormation(ctrl)
    .then(function success(result){
      console.log("MERCI...");
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });
  };

  ctrl.enregistreSoiree = function(){
    console.log("BONJOUR: ", ctrl);
    celluleService.enregistreSoiree(ctrl)
    .then(function success(result){
      console.log("MERCI...");
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });

};


};
})();
