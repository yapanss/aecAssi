angular.module('AEC')
.controller('personnelController', personnelController);

personnelController.inject = ['personnelService'];

function personnelController(personnelService){
  var ctrl = this;

  ctrl.nom = "";
  ctrl.titre = "";
  ctrl.login = "";
  ctrl.mot_de_passe = "";

  ctrl.enregistrePersonnel = function(){
    personnelService.enregistrePersonnel(ctrl)
    .then(function success(result){
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });
  };

};
