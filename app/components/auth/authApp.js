(function() {
  'use strict';

  var ROOT = 'components/auth';

  angular.module('app.auth', [])
  .config(['$ocLazyLoadProvider', lazyLoadConfig])
  .config(['$stateProvider', '$urlRouterProvider', routeConfig]);


  function lazyLoadConfig($ocLazyLoadProvider) {
    // define file modules
  }

  function routeConfig($stateProvider) {

    $stateProvider
      .state('app.main.auth', {
        url: '/login',
        views: {
          'header@app': {
            templateUrl: ROOT + '/views/header.html'
          },
          'content@app': {
            templateUrl: ROOT + '/views/login.html'
          }
        }
      })

  }

})()
