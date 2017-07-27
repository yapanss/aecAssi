(function(){
'use strict';

angular.module('AEC')
.factory('AuthToken', AuthToken);

AuthToken.$inject = ['$window'];

function AuthToken($window){

 	var factory = {};

 	// get the token out of local storage
 	factory.getToken = function() {
 		return $window.localStorage.getItem('token');
 	};
 	// function to set token or clear token
 	// if a token is passed, set the token
 	// if there is no token, clear it from local storage
 	factory.setToken = function(token) {
 		if (token){
 			$window.localStorage.setItem('token', token);
 		}
 		else{
			 $window.localStorage.removeItem('token');
		}
 
	};
 return factory;
};

})();