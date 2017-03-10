(function(){
	angular.module('pkApp')
		.factory('Pokemon', ['$http', function($http){
			var caught = {};
			var battle = {};

			return {
				all: function(){
					return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=151', {cache: true});
				},
				byNum: function(num){
					return $http({method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon/' + num +'/'});
				},
				getBattlePokemons: function(pokemon){
					return battle;
				},
				getCaughtPokemons: function(pokemon){
					return caught;
				},
				addCaught: function(pokemon){
					caught[pokemon.name] = pokemon;
				},
				removeCaught: function(pokemon){
					if(caught[pokemon]){
						delete caught[pokemon];
					}
				},
				isCaught: function(pokemon){
					return (typeof(caught[pokemon]) !== 'undefined');
				},
				addBattle: function(pokemon){
					battle[pokemon.name] = pokemon;
				},
				removeBattle: function(pokemon){
					if(battle[pokemon]){
						delete battle[pokemon];
					}
				},
				isBattle: function(pokemon){
					return (typeof(battle[pokemon]) !== 'undefined');
				}

			};
		}]);
})();