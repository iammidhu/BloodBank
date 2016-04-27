(function() {
  'use strict';

  var ROOT = 'components/auth';

  angular.module('app.register', ['ngMessages'])
    .config(['$ocLazyLoadProvider', lazyLoadConfig])
    .config(['$stateProvider', routeConfig]);


  var PATHS = {
    regCtrl: ROOT + '/controllers/registerCtrl.js',
  };

  $ocLazyLoadProvider.config({
    modules: [{
      name: 'main',
      files: [
        PATHS.regCtrl,
      ]
    }]
  });

  function routeConfig($stateProvider) {

    $stateProvider
      .state('app.main.register', {
        url: '/register',
        views: {
          'header@app': {
            templateUrl: ROOT + '/views/header.html'
          },
          'content@app': {
            templateUrl: ROOT + '/views/register.html'
          }
        }
      })
  }
})()
