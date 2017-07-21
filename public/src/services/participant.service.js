angular.module('AEC')
.service('participantService', participantService);

participantService.inject = ['$http'];

function participantService($http){
  var service = this;

  service.enregistreParticipant = function(donnees){
    return $http.post('/participant', donnees)
    .then(function success(result){
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };

};
