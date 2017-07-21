angular.module('AEC')
.service('evangeliseService', evangeliseService);

evangeliseService.inject = ['$http'];

function evangeliseService($http){
  var service = this;

  service.enregistreEvangelise = function(donnees){
    return $http.post('/api/evangelise', donnees)
    .then(function success(result){
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };

};
