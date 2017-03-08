(function(){
	'use strict';

	angular
		.module('app.description')
		.controller('Description', Description);

		function Description(){
			var self = this;

			console.log('that');
			self.pokemon = [];

			activate();

			function activate(){
				return getPokemon();
			}
		}

		function getPokemon(){
			return ;
			//TODO data service
		}
})();