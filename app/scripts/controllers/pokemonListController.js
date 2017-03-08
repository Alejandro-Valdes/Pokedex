(function(){
	'use strict';

	angular
		.module('pkApp.pokemonlist', [])
		.controller('Pokemonlist', ['$scope', 'Pokemon', function ($scope, Pokemon){
			var self = this;

			console.log('Pokemonlist controller');

			Pokemon.all().success(function(data){
				console.log('success');
				$scope.pokemons = data.results;
			})
		}]);
})();