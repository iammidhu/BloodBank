(function() {	
    'use strict';

    angular.module('app.request-blood')
        .controller('RequestCtrl', ['requestFactory', RequestCtrl]);

    function RequestCtrl(requestFactory) {

        /* private vars */
        var vm = this;

        /* initializations */
        vm.test = "From Root Controller"
        vm.data = {

        }

        /* view-model methods (put references) */
        vm.groups = [
            'A+',
            'O+',
            'B+',
            'AB+',
            'A-',
            'O-',
            'B-',
            'AB-'
        ];
        vm.requestBlood = requestBlood;
        vm.reset = reset;

        /*functions*/
        function requestBlood(data) { 
            if (data) {
                requestFactory.sasi(data)
            }
        }
        function reset(rbform) {
            rbform.$setPristine();
            rbform.$setUntouched();
            vm.rb = {};
        }

    }
})();
