(function(){
'use strict';

angular.module('AEC')
.controller('loginController', loginController);

loginController.$inject = ['loginService', '$rootScope', '$location', '$window'];
function loginController(loginService, $rootScope, $location, $window){
	var ctrl = this;
	ctrl.donneesDeLogin = {
		login:"",
		mot_de_passe:""
	};
	ctrl.verifEnCours = false;

	ctrl.connecte = loginService.estConnecte();
	$rootScope.$on('$routeChangeStart', function() {
        ctrl.connecte = loginService.estConnecte();


 // get user information on route change
        loginService.getPersonnel()
        .then(function succes(data){
            ctrl.personnel = data;
        });
    });

	ctrl.seConnecte = function(){
		loginService.login(ctrl.donneesDeLogin.login, ctrl.donneesDeLogin.mot_de_passe)
		.then(function succes(data){
			ctrl.connecte = loginService.estConnecte();
			console.log("DATA :", data);
			console.log("connecte :", ctrl.connecte);
			if (ctrl.connecte){
			    $location.path('/Admin');
			}
			else{
				$location.path('/login');
			}
		});
		
	};
	ctrl.seDeconnecte = function(){
		loginService.logout();
		ctrl.personnel = {};
		$location.path('/login');
	};
};

})();