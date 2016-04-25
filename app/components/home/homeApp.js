(function() {
    'use strict';

    var ROOT = 'components/home';

    angular.module('app.home', [])
        .config(['$ocLazyLoadProvider', lazyLoadConfig])
        .config(['$stateProvider', routeConfig]);


    function lazyLoadConfig($ocLazyLoadProvider) {
        // define file modules
    }

    function routeConfig($stateProvider) {

        $stateProvider
            .state('app.main.home', {
                url: '/home',
                views: {
                    'content@app': {
                        templateUrl: ROOT + '/views/home.html'
                    }
                }
            });

    }
    
})()
