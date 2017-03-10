/**
 * CodeChallenge Main Class
 */
(function(){
	'use strict';
	
	angular
	.module('pkApp', ['ngRoute', 
		'pkApp.description', 
		'pkApp.pokemonlist',
		'pkApp.battle',
		'pkApp.caught']);
	
})();