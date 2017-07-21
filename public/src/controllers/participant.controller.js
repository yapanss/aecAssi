angular.module('AEC')
.controller('participantController', participantController);

participantController.inject = ['participantService'];

function participantController(participantService){
  var ctrl = this;

  ctrl.nombreContacts = "";
  ctrl.prospectusDistribues = "";
  ctrl.evangelistes = [];
  ctrl.date = "";
  ctrl.lieu = "";

  ctrl.enregistreParticipant = function(){
    participantService.enregistreParticipant(ctrl)
    .then(function success(result){
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });
  };

};
