(function(){
	angular.module('pkApp')
		.directive('pokemonListItem',['Pokemon', function pokemonListItem(Pokemon){
		return {
			restrict : 'AE',
			scope: true ,
			templateUrl : '/views/directives/pokemonListItem.html',
			link: function(scope, element, attr){

				var pokeball = element.find('.pokeball');
				var battle = element.find('.fav');

				var getPokemon = function(){
					var pokemon = {};
					pokemon.name = element.find('.name').html();
					pokemon.number = element.find('.number').html();
					pokemon.img = element.find('.list-img').attr('src');
					return pokemon;
				}

				pokeball.bind('click', function(){
					var pokemon = getPokemon();
					if(!Pokemon.isCaught(pokemon.name)){
						console.log('caught')
						pokeball.addClass('active');
						Pokemon.addCaught(pokemon)
					}
					else{
						console.log('uncaught')
						Pokemon.removeCaught(pokemon.name)
						pokeball.removeClass('active');
					}

				});

				battle.bind('click', function(){
					var pokemon = getPokemon();
					if(!Pokemon.isBattle(pokemon.name)){
						console.log('battle');
						battle.addClass('active');
						Pokemon.addBattle(pokemon);
					}
					else{
						console.log('unbattle')
						Pokemon.removeBattle(pokemon.name)
						battle.removeClass('active');
					}
				})
			}
		};
	}]);
})();