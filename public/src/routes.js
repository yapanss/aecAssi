(function(){

'use strict';

angular.module('AEC')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url:'/home',
		templateUrl:'src/templates/home.html'
	})
	.state('login',{
		url:'/login',
		templateUrl:'src/templates/login.html',
		controller:'mainController as login'
	})
	
	// Admin-Cellules
	.state('Ajout_Cellule',{
		url:'/Admin/cellule/ajout_cellule',
		templateUrl:'src/templates/ajout.cellule.html',
		controller:'celluleController as cellule'
	})
	.state('Liste_Formations',{
		url:'/Admin/cellule/liste_formations',
		templateUrl:'src/templates/liste.formations.html',
		controller:'formationListeController as formation',
		resolve:{
				listeFormations:['celluleService', function(celluleService){
					   return celluleService.recupereListeFormations()
					    .then(function(){
					    	
					    	return celluleService.listeFormations;
					    })								
				}]
			}

	})
	.state('Detail_liste_Formations',{
		url:'/Admin/cellule/liste_formations/{lieuCellule}',
		templateUrl:'src/templates/liste.formations.detail.html',
		controller:'formationDetailController as formationDetail',
		resolve:{
			detailFormation:['$stateParams','celluleService', function($stateParams, celluleService){
				return celluleService.recupereListeFormations()
					    .then(function(){
					    	
					    	return celluleService.listeFormations[$stateParams.lieuCellule];
					    })								
				}]
			}
	})
	.state('Liste_Soirees',{
		url:'/Admin/cellule/liste_soirees',
		templateUrl:'src/templates/liste.soirees.html',
		controller:'soireeListeController as soiree',
		resolve:{
				listeSoirees:['celluleService', function(celluleService){
					   return celluleService.recupereListeSoirees()
					    .then(function(){
					    	return celluleService.listeSoirees;
					    })								
				}]
			}

	})
	// Admin-Participants
	.state('Ajout_Participant',{
		url:'/Admin/cellule/ajout_participant',
		templateUrl:'src/templates/ajout.participant.html',
		controller:'participantController as participant'
	})
	.state('Liste_Participants',{
		url:'/Admin/cellule/liste_participants',
		templateUrl:'src/templates/liste.participants.html',
		controller:'participantListeController as participant',
		resolve:{
				listeParticipants:['participantService',function(participantService){
					   return participantService.recupereListeParticipants()
					    .then(function(){
					    	return participantService.listeParticipants;
					    })								
				}]
			}

	})
	
	// Admin-Evangelisation
	.state('Ajout_Evangelisation',{
		url:'/Admin/evangelisation/ajout_evangelisation',
		templateUrl:'src/templates/ajout.evangelisation.html',
		controller:'evangelisationController as evangelisation'
	})
	.state('Liste_Evangelisations',{
		url:'/Admin/evangelisation/liste_evangelisations',
		templateUrl:'src/templates/liste.evangelisations.html',
		controller:'evangelisationListeController as evangelisation',
		resolve:{
				listeEvangelisations:['evangelisationService',function(evangelisationService){
					   return evangelisationService.recupereListeEvangelisations()
					  	.then(function(){
					    	return evangelisationService.listeEvangelisations;
					    })	
					    							
				}]
			}

	})
	// Ajout-Evangelise
	.state('Ajout_Evangelise',{
		url:'/Admin/evangelisation/ajout_evangelise',
		templateUrl:'src/templates/ajout.evangelise.html',
		controller:'evangeliseController as evangelise'
	})
	.state('Liste_Evangelises',{
		url:'/Admin/evangelisation/liste_evangelises',
		templateUrl:'src/templates/liste.evangelises.html',
		controller:'evangeliseListeController as evangelise',
		resolve:{
				listeEvangelises:['evangeliseService',function(evangeliseService){
					   return evangeliseService.recupereListeEvangelises()
					    .then(function(){
					    	return evangeliseService.listeEvangelises;
					    })								
				}]
			}

	})
	// PERSONNEL

	.state('Ajout_Personnel',{
		url:'/Ajout_Personnel',
		templateUrl:'src/templates/ajout.personnel.html',
		controller:'personnelController as personnel'
	})
	.state('Liste_Personnel',{
		url:'/Liste_Personnel',
		templateUrl:'src/templates/liste.personnel.html',
		controller:'personnelListeController as personnel',
		resolve:{
				listePersonnel:['personnelService',function(personnelService){
					   return personnelService.recupereListePersonnel()
					    .then(function(){
					    	return personnelService.listePersonnel;
					    })								
				}]
			}

	})
	
	// Accueil
	.state('accueil',{
			url:'/Accueil',
			templateUrl:'src/lmkuser/templates/accueil.html',
		})
		.state('saisie',{
			url:'/Saisie Notes',
			templateUrl:'src/lmkuser/templates/saisie.html',
			controller: 'saisieController as saisie',
			resolve:{
				classes:['saisieService','loginService',function(saisieService, loginService){
					   return saisieService.connectBase(loginService.donnees.login)
					    .then(function(){
					    	return saisieService.rep;
					    })								
				}]
			}
		})
		.state('consultation',{
			url:'/consultation',
			templateUrl:'src/lmkuser/templates/consultation.html',
			controller: 'consultationController as consultation',
			resolve:{
				classes:['loginService',function(loginService){
					   return loginService.connectBase('consultation.php')
					    .then(function(){
					    	return loginService.rep;
					    })
									
				}]
			}
		})
		.state('profil',{
			url:'/profil',
			templateUrl:'src/lmkuser/templates/profil.html'
		});

		// $locationProvider.html5Mode(true);
};

 
})();
