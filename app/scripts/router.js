(function(){
	angular
		.module('pkApp')
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/scripts/components/pokemonlist/pokemonlist.html'			})
			.when('/pokemon/:id', {
				templateUrl : '/scripts/components/description/description.html'			})
			.when('/caught', {
				templateUrl : '/scripts/components/caught/caught.html'			})
			.when('/fightbox', {
				templateUrl : '/scripts/components/fightbox/fightbox.html'			})
			.otherwise({
				redirectTo : '/'
			});
		}]);
})();

