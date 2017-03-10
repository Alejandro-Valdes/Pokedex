(function(){
	'use strict';

	angular
		.module('pkApp.battle', [])
		.controller('BattleController', pokemonBattle);

		/* @ngInject */
		function pokemonBattle($scope, Pokemon){
			var self = this;
			console.log('battle Controller');
			$scope.battlePokemons = Pokemon.getBattlePokemons();
			console.log($scope.battlePokemons)
		}

})();