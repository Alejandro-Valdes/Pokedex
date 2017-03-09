(function(){
    angular.module('pkApp')
        .filter('leadingZeros', function () {
            return function (num, len) {
                
                var number = parseInt(num, 10);
                len = parseInt(len, 10);

                if(isNaN(number) || isNaN(len)){
                    return num;
                }

                number = ''+number;

                while(number.length < len){
                    number = '0'+number;
                }

                return number;
            };
        });
})();