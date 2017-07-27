(function(){
'use strict';

angular.module('AEC')
.service('personnelService', personnelService);

personnelService.$inject = ['$http'];
function personnelService($http){
	var service = this;

	service.enregistrePersonnel = function(donneesPersonnel){
	return $http.post('api/personnel', donneesPersonnel)
		.then(function(){
			console.log("LES DONNEES DU PERSONNEL SONT : ", donneesPersonnel);
			console.log("ENREGISTRE !");
		})
		.catch(function erreur(){
			console.log("OUPS, UNE ERREUR EST SURVENUE...");
		});
	};
	
	service.recupereListePersonnel = function(){
		return $http.get('api/personnel')
		.then(function succes(reponse){
			service.listePersonnel = reponse.data;
			console.log("LISTE DU PERSONNEL :", service.listePersonnel);
		})
		.catch(function(){
			console.log("OUPS, UNE ERREUR EST SURVENUE...");
		});
	};

	service.supprimePersonnel = function(personnel_id){
		return $http.delete('api/personnel/'+ personnel_id)
		.then(function success(reponse){
			service.message = reponse;
			return service.message;
		})
		.catch(function(){
			console.log('OUPS, UNE ERREUR EST SURVENUE');
		});
	};

	service.modifiePersonnel = function(personnel_id, donneesPersonnel){
    return $http.put('api/personnel/' + personnel_id, donneesPersonnel)
    .then(function success(result){
      console.log('TOUT EST OK');
      return result;
    });

    
  };

};
})();