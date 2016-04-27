/**
 * App-wide essential helper functions
 */
(function() {
    'use strict';

    angular.module('app.main')
        .factory('requestFactory', ['$resource', '$timeout', requestFactory]);

    function requestFactory($resource, $timeout) {

        return {
             
            sasi : sasi
                /*-- include helper functions references here--*/
        };

        function sasi(data) {
           
                alert();
           
            
        }

        /*-- include helper functions and private functions here--*/
    }

})();
