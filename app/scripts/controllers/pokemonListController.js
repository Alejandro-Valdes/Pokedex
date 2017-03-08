(function(){
	'use strict';

	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	angular
		.module('pkApp.pokemonlist', [])
		.controller('Pokemonlist', ['$scope', 'Pokemon', function ($scope, Pokemon){
			var self = this;

			console.log('Pokemonlist controller');

			var pokemonList = [];

			Pokemon.all().success(function(data){
				var results = data.results; 

				console.log(results);
				var pokemon = {};
				var pokemonNum = 0;

				for(var i = 0; i < results.length; i++){
					
					pokemon = {};
					pokemonNum = i+1;
					pokemon.name = results[i].name.capitalize();
					pokemon.img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonNum + '.png'
					pokemon.number = pokemonNum;
					pokemonList.push(pokemon);
				}

				$scope.pokemons = pokemonList;
			});

		}]);
})();