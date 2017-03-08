(function(){
	angular.module('pkApp')
		.factory('Pokemon', ['$http', function($http){
			return {
				all: function(){
					return $http({method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon/?limit=151'});
				}
			};
		}]);
})();