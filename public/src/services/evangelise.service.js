angular.module('AEC')
.service('evangeliseService', evangeliseService);

evangeliseService.inject = ['$http'];

function evangeliseService($http){
  var service = this;

  service.enregistreEvangelise = function(donnees){
    return $http.post('api/evangelise', donnees)
    .then(function success(result){
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };

  service.modifieEvangelise = function(evangelise_id, donneesEvangelise){
    return $http.put('api/evangelise/' + evangelise_id, donneesEvangelise)
    .then(function success(result){
      console.log('TOUT EST OK');
      return result;
    });
  };
  service.recupereListeEvangelises = function(){
    return $http.get('/api/evangelise')
    .then(function succes(reponse){
      service.listeEvangelises = reponse.data;
      console.log("LISTE DES CELLULES :", service.listeEvangelises);
    })
    .catch(function(){
      console.log("OUPS, UNE ERREUR EST SURVENUE...");
    });
  };
  service.supprimeEvangelise = function(evangelise_id){
    return $http.delete('api/evangelise/'+ evangelise_id)
    .then(function success(reponse){
      service.message = reponse;
      return service.message;
    }, function error(){
      console.log('OUPS, UNE ERREUR EST SURVENUE');
    });
  };

};


