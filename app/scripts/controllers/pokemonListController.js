(function(){
	'use strict';

	angular
		.module('pkApp.pokemonlist', [])
		.controller('Pokemonlist', ['$scope', 'Pokemon', function ($scope, Pokemon){
			var self = this;

			console.log('Pokemonlist controller');

			var pokemonList = [];

			Pokemon.all().then(function(obj){
				var results = obj.data.results; 
				var pokemon = {};
				var pokemonNum = 0;

				for(var i = 0; i < results.length; i++){
					
					pokemon = {};
					pokemonNum = i+1;
					pokemon.name = results[i].name;
					pokemon.img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonNum + '.png'
					pokemon.number = pokemonNum;
					pokemonList.push(pokemon);
				}

				$scope.pokemons = pokemonList;
			});

		}]);
})();