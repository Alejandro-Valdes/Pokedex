(function(){
    angular.module('pkApp')
        .filter('leadingZeros', function () {
            return function (num) {
                //parseInt to base 10
                var len = 3;
                var number = parseInt(num, 10);
                len = parseInt(len, 10);

                //check
                if (isNaN(number) || isNaN(len)) {
                    return num;
                }

                //convert to string and add zeros
                number = ''+number;
                while (number.length < len) {
                    number = '0'+number;
                }
                return number;
            };
        });
})();