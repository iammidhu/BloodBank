(function() {	
    'use strict';

    angular.module('app.main')
        .controller('AppCtrl', ['helpersFactory', AppCtrl]);

    function AppCtrl(helpersFactory) {

        /* private vars */
        var vm = this;

        /* initializations */
        vm.test = "From Root Controller"
        vm.data = {

        }

        /* view-model methods (put references) */
        vm.clickActionTest = clickActionTest;

        /*functions*/
        function clickActionTest(e) {
            // handle event
        }

    }
})();
