angular.module('AEC')
.controller('evangeliseController', evangeliseController);

evangeliseController.inject = ['evangeliseService'];

function evangeliseController(evangeliseService){
  var ctrl = this;

  ctrl.nom = "Koffi";
  ctrl.contact = {};
  ctrl.date = "";
  ctrl.lieu = "port bouet";

   console.log("EH, CA MARCHE !");

  ctrl.enregistreEvangelise = function(){
   
    evangeliseService.enregistreEvangelise(ctrl)
    .then(function success(result){
      ctrl.message = result;
      console.log("MESSAGE :", ctrl.message);
    });
  };

};
