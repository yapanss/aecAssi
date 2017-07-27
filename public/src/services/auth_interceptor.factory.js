(function(){
'use strict';

angular.module('AEC')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['$q','$location', 'AuthToken'];

function AuthInterceptor($q, $location, AuthToken){

var factory = {};


	factory.request = function(config){
		var token = AuthToken.getToken();
        // var token = $window.localStorage.getItem('token');

 // if the token exists, add it to the header as x-access-token
        if (token){
            config.headers['x-access-token'] = token;
        }

        return config;
    };



    // happens on response errors
    factory.responseError = function(response) {

 // if our server returns a 403 forbidden response
        if (response.status == 403) {

            $location.path('/login');
        }

 // return the errors from the server as a promise
        return $q.reject(response);
    };

   return factory;
};

})();