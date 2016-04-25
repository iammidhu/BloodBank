(function() {
    'use strict';

    var ROOT = 'main';

    angular.module('app.main', [])
        .config(['$ocLazyLoadProvider', lazyLoadConfig])
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    function lazyLoadConfig($ocLazyLoadProvider) {
        var PATHS = {
            mainCtrl: ROOT + '/controllers/appCtrl.js',

            helpersFactory: ROOT + '/services/helpersFactory.js',
            appConstants: ROOT + '/services/appConstants.js',

            commonDirectives: ROOT + '/directives/commonDirectives.js'
        };

        $ocLazyLoadProvider.config({
            modules: [{
                name: 'main',
                files: [
                    PATHS.mainCtrl,

                    PATHS.helpersFactory,
                    PATHS.appConstants,

                    PATHS.commonDirectives
                ]
            }]
        });
    }

    function routeConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: ROOT + '/views/main.html',
                controller: 'AppCtrl as app'
            })
            .state('app.main', {
                abstract: true,
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load('main');
                        }
                    ]
                },
                views: {
                    'header': {
                        templateUrl: ROOT + '/views/header.html'
                    },

                    'footer': {
                        templateUrl: ROOT + '/views/footer.html'
                    }
                }
            })

        $urlRouterProvider.otherwise('/home');

    }
})();
