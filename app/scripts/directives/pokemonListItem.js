(function(){
	angular.module('pkApp')
		.directive('pokemonListItem', function pokemonListItem(){
		return {
			restrict : 'AE',
			replace : 'true',
			templateUrl : '/views/directives/pokemonListItem.html'
		};
	});
})();