angular.module('AEC')
.service('participantService', participantService);

participantService.inject = ['$http'];

function participantService($http){
  var service = this;

  service.enregistreParticipant = function(donnees){
    return $http.post('/api/participant', donnees)
    .then(function success(result){
      return result;
    }, function error(){
      console.log('OOPS, UNE ERREUR EST SURVENUe !');
    });

  };
  service.modifieParticipant = function(participant_id, donneesParticipant){
    return $http.put('api/participant/' + participant_id, donneesParticipant)
    .then(function success(result){
      console.log('TOUT EST OK');
      return result;
    });
  };
  service.recupereListeParticipants = function(){
    return $http.get('api/participant')
    .then(function succes(reponse){
      service.listeParticipants = reponse.data;
      console.log("LISTE DES CELLULES :", service.listeParticipants);
    })
    .catch(function(){
      console.log("OUPS, UNE ERREUR EST SURVENUE...");
    });
  };
  service.supprimeParticipant = function(participant_id){
    return $http.delete('api/participant/'+ participant_id)
    .then(function success(reponse){
      service.message = reponse;
      return service.message;
    }, function error(){
      console.log('OUPS, UNE ERREUR EST SURVENUE');
    });
  };

};
