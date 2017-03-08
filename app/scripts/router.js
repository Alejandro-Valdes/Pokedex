(function(){
	angular
		.module('pkApp')
		.config(['$routeProvider', function($routeProvider){
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
			})
			.when('/fightbox', {
				templateUrl : '/views/fightbox.html',
			})
			.otherwise({
				redirectTo : '/'
			});
		}]);
})();

