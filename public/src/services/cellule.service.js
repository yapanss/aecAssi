(function(){
  'use strict';
angular.module('AEC')
.service('celluleService', celluleService);

celluleService.inject = ['$http'];

function celluleService($http){
  var service = this;

// Formations

  service.enregistreFormation = function(donnees){
    console.log("donnees :", donnees);
    return $http.post('/api/formation', donnees)
    .then(function success(result){
      console.log("resultat :", result);
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };
  service.modifieFormation = function(formation_id, donneesFormation){
    return $http.put('api/formation/' + formation_id, donneesFormation)
    .then(function success(result){
      console.log('TOUT EST OK');
      return result;
    });
  };
  service.recupereListeFormations = function(){
    return $http.get('api/formation')
    .then(function succes(reponse){
      service.listeFormations = reponse.data;
      console.log("LISTE DES CELLULES :", service.listeFormations);
    })
    .catch(function(){
      console.log("OUPS, UNE ERREUR EST SURVENUE...");
    });
  };
  service.supprimeFormation = function(formation_id){
    return $http.delete('api/formation/'+ formation_id)
    .then(function success(reponse){
      service.message = reponse;
      return service.message;
    }, function error(){
      console.log('OUPS, UNE ERREUR EST SURVENUE');
    });
  };
// Soirées Noces
  service.enregistreSoiree = function(donnees){
    console.log("donnees :", donnees);
    return $http.post('/api/soireenoce', donnees)
    .then(function success(result){
      console.log("resultat :", result);
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };
  
  service.recupereListeSoirees = function(){
    return $http.get('api/soireenoce')
    .then(function succes(reponse){
      service.listeSoirees = reponse.data;
      console.log("LISTE DES CELLULES :", service.listeSoirees);
    })
    .catch(function(){
      console.log("OUPS, UNE ERREUR EST SURVENUE...");
    });
  };

  service.modifieSoiree = function(soiree_id, donneesSoiree){
    return $http.put('api/soireenoce/' + soiree_id, donneesSoiree)
    .then(function success(result){
      console.log('TOUT EST OK');
      return result;
    });
  };

  service.supprimeSoiree = function(soiree_id){
    return $http.delete('api/soireenoce/'+ soiree_id)
    .then(function success(reponse){
      service.message = reponse;
      return service.message;
    }, function error(){
      console.log('OUPS, UNE ERREUR EST SURVENUE');
    });
  };

};
})();