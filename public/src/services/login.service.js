(function(){
'use strict';

angular.module('AEC')
.service('loginService', loginService);

loginService.$inject = ['$http', '$window', '$q', '$location'];
function loginService($http, $window, $q, $location){
	var service = this;

	service.getToken = function(){
		return $window.localStorage.getItem('token');
	};

	service.setToken = function(token){
		if (token){
	    	$window.localStorage.setItem('token', token);
	    	console.log("service setToken localStorage :", $window.localStorage);
		}
        else{
            $window.localStorage.removeItem('token');
        }
	};

	service.login = function(login, mot_de_passe){
		return $http.post("/api/authentifier", {login:login, mot_de_passe:mot_de_passe})
		.then(function succes(reponse){
			console.log("REPONSE DE LOGIN.TOKEN :", reponse.data.token);
			service.setToken(reponse.data.token);
			service.surnom = "reponse.data";
			return reponse.data;
		});
	};

	service.logout = function(){
		service.setToken();
	};

	service.estConnecte = function(){
		if(service.getToken()){
			return true;
		}
		else{
			return false;
		}
		console.log("estConnecte EST :", estConnecte);
	};

	service.getPersonnel = function(){
		if(service.getToken()){
			return $http.get('/api/me');
		}
		else{
			return $q.reject({
				message:'Personnel n a pas de token'
			});
		}
	};

};

})();