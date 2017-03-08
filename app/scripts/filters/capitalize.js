(function(){
	angular.module('pkApp')
		.filter('capitalize', function(){
			return function(input){
				if(isNaN(input)){
					return input.charAt(0).toUpperCase() + input.slice(1);
				}
				
				return input;
			};
		})
})()