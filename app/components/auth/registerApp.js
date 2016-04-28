(function() {
  'use strict';

  var ROOT = 'components/auth';

  angular.module('app.register', ['ngResource'])
    .config(['$ocLazyLoadProvider', lazyLoadConfig])
    .config(['$stateProvider', '$urlRouterProvider', routeConfig]);


  function lazyLoadConfig($ocLazyLoadProvider) {
    var PATHS = {
      regCtrl: ROOT + '/controllers/registerCtrl.js',
      signupService: ROOT + '/services/signupService.js'
    };

    $ocLazyLoadProvider.config({
      modules: [{
        name: 'register',
        files: [
          PATHS.regCtrl,
          PATHS.signupService
        ]
      }]
    });
  }

  function routeConfig($stateProvider) {

    $stateProvider
      .state('app.main.register', {
        url: '/register',
        resolve: {
          deps: ['$ocLazyLoad',
            function($ocLazyLoad) {
              return $ocLazyLoad.load('register');
            }
          ]
        },
        views: {
          'header@app': {
            templateUrl: ROOT + '/views/header.html'
          },
          'content@app': {
            templateUrl: ROOT + '/views/register.html',
            controller: 'RegisterCtrl as register'
          }
        }
      })
  }
})()
