angular.module('AEC')
.controller('evangelisationController', evangelisationController);

evangelisationController.inject = ['evangelisationService'];

function evangelisationController(evangelisationService){
  var ctrl = this;

  ctrl.nombreContacts = "";
  ctrl.prospectusDistribues = "";
  ctrl.evangelistes = [];
  ctrl.date = "";
  ctrl.lieu = "";

  ctrl.enregistreEvangelisation = function(){
    evangelisationService.enregistreEvangelisation(ctrl)
    .then(function success(result){
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });
  };

};
