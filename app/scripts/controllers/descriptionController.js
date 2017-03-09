(function(){
	'use strict';

	angular
		.module('pkApp.description', [])
		.controller('Description', descriptionController);

		 /* @ngInject */
		function descriptionController($scope){
			var self = this;

			console.log('Description controller');
			
			$scope.pokemon = {
				name: 'Bulbasaur',
				number: '001',
				description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun´s rays, the seed grows progressively larger.',
			};

		};
})();