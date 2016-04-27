(function() {
    'use strict';

    var ROOT = 'components/request-blood';

    angular.module('app.request-blood', [])
        .config(['$ocLazyLoadProvider', lazyLoadConfig])
        .config(['$stateProvider', routeConfig]);


    function lazyLoadConfig($ocLazyLoadProvider) {
        // define file modules
        var PATHS = {
            mainCtrl: ROOT + '/controllers/requestCtrl.js',
            requestFactory: ROOT + '/services/requestFactory.js'
            
        };

        $ocLazyLoadProvider.config({
            modules: [{
                name: 'request-blood',
                files: [
                    PATHS.mainCtrl,

                    PATHS.requestFactory
                ]
            }]
        });
    }

    function routeConfig($stateProvider) {

        $stateProvider
            .state('app.main.request-blood', {
                url: '/request-blood',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load('request-blood');
                        }
                    ]
                },
                views: {
                    'content@app': {
                        templateUrl: ROOT + '/views/request-blood.html',
                        controller: 'RequestCtrl as request'
                    }
                }
            });

    }
    
})()
