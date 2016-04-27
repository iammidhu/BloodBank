(function() {
    'use strict';

    angular.module('app.register')
        .controller('RegisterCtrl', RegisterCtrl);

    function RegisterCtrl() {

        /* private vars */
        var vm = this;

        /* initializations */
        vm.genderList = [
          'male',
          'female'
        ];

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
        /* view-model methods (put references) */
        vm.clickActionTest = clickActionTest;

        /*functions*/
        function clickActionTest(e) {
            // handle event
        }

    }
})();
