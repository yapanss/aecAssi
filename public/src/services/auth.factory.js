(function(){
'use strict';
angular.module('AEC')
.factory('AuthFactory', AuthFactory);

AuthFactory.$inject = ['$http', '$q', 'AuthToken'];
function AuthFactory($http, $q, AuthToken){

 	// create auth factory object
 	var factory = {};

 	// log a user in
 	factory.login = function(login, mot_de_passe){
 	// return the promise object and its data
 		return $http.post('/api/authentifier', {
 			login: login,
 			mot_de_passe:mot_de_passe
 		})
 		.then(function success(response){
 			AuthToken.setToken(response.data.token);
 			 return response;
 		})
 		.then(function(){
 			return $http.get('api/me');
 		});
	};

 	// log a user out by clearing the token
	factory.logout = function(){
 	// clear the token
 	AuthToken.setToken();

 	};

 	// check if a user is logged in
 	// checks if there is a local token
 	factory.isLoggedIn = function(){
 		if (AuthToken.getToken()){
 			return true;
 		}
 		else{
 			return false;
 		}
	};

 	// get the logged in user
 	factory.getUser = function(){
 		if (AuthToken.getToken()){
 			return $http.get('/api/me');
 		}
 		else{
 			return $q.reject({ message: 'User has no token.' });
 		}
 	};

 // return auth factory object
return factory;
};

})();