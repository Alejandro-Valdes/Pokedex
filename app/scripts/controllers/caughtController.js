(function(){
	'use strict';

	angular
		.module('pkApp.caught', [])
		.controller('CaughtController', pokemonCaught);

		/* @ngInject */
		function pokemonCaught($scope, Pokemon){
			var self = this;
			console.log('caught Controller');
			$scope.caughtPokemons = Pokemon.getCaughtPokemons();
		}

})();