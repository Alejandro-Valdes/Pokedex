(function(){
	angular
		.module('pkApp')
		.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/views/pokemonlist.html',
				controller : 'Pokemonlist'
			})
			.when('/pokemon/:id', {
				templateUrl : '/views/description.html',
				controller : 'Description'
			})
			.when('/caught', {
				templateUrl : '/views/caught.html',
				controller : 'CaughtController'
			})
			.when('/fightbox', {
				templateUrl : '/views/fightbox.html',
				controller : 'BattleController'
			})
			.otherwise({
				redirectTo : '/'
			});
			$locationProvider.html5Mode(true);
		}]);
})();

