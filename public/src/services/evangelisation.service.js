angular.module('AEC')
.service('evangelisationService', evangelisationService);

evangelisationService.inject = ['$http'];

function evangelisationService($http){
  var service = this;

  service.enregistreEvangelisation = function(donnees){
    return $http.post('api/evangelisation', donnees)
    .then(function success(result){
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };

  service.modifieEvangelisation = function(evangelisation_id, donneesEvangelisation){
    return $http.put('api/evangelisation/' + evangelisation_id, donneesEvangelisation)
    .then(function success(result){
      console.log('TOUT EST OK');
      return result;
    });
  };
  service.recupereListeEvangelisations = function(){
    return $http.get('api/evangelisation')
    .then(function succes(reponse){
      service.listeEvangelisations = reponse.data;
      console.log("LISTE DES CELLULES :", service.listeEvangelisations);
    })
    .catch(function(){
      console.log("OUPS, UNE ERREUR EST SURVENUE...");
    });
  };
  service.supprimeEvangelisation = function(evangelisation_id){
    return $http.delete('api/evangelisation/'+ evangelisation_id)
    .then(function success(reponse){
      service.message = reponse;
      return service.message;
    }, function error(){
      console.log('OUPS, UNE ERREUR EST SURVENUE');
    });
  };

};
