angular.module('AEC')
.controller('participantController', participantController);

participantController.inject = ['participantService'];

function participantController(participantService){
  var ctrl = this;

  ctrl.nom = "";
  ctrl.cycle = "";
  ctrl.contact = {};
  ctrl.dateArrivee = "";
  ctrl.lieuFormation = "";
  ctrl.typeFormation = "";
  ctrl.invitePar = "";
  ctrl.religion = "";
  ctrl.sexe = "";
  ctrl.statutMatrimonial = "";

  ctrl.enregistreParticipant = function(){
    participantService.enregistreParticipant(ctrl)
    .then(function success(result){
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });
  };

};
