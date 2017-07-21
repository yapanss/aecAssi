angular.module('AEC')
.service('evangelisationService', evangelisationService);

evangelisationService.inject = ['$http'];

function evangelisationService($http){
  var service = this;

  service.enregistreEvangelisation = function(donnees){
    return $http.post('/evangelisation', donnees)
    .then(function success(result){
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };

};
