(function(){
	angular.module('pkApp')
		.factory('Pokemon', ['$http', function($http){
			return {
				all: function(){
					return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=151', {cache: true});
				},
				byName: function(name){
					return $http({method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon/' + name});
				}
			};
		}]);
})();