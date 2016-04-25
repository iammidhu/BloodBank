/**
 * App-wide essential helper functions
 */
(function() {
    'use strict';

    angular.module('app.main')
        .factory('helpersFactory', ['$timeout', helpersFactory]);

    function helpersFactory($timeout) {

        return {
            covertStrToDate: covertStrToDate
                /*-- include helper functions references here--*/
        };

        /**
         * Convert given string to date object
         */
        function covertStrToDate(toDateString) {
            return (toDateString && !isNaN(new Date(toDateString).getTime())) ? new Date(toDateString) : '';
        }

        /*-- include helper functions and private functions here--*/
    }

})();
