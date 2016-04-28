(function() {
  'use strict';

  angular.module('app.register')
    .factory('signupService',['$resource', signupService]);

  function signupService($resource) {
    return {
      saveRegisterData: saveRegisterData
    }
    function saveRegisterData(formData){
      return $resource('api/resource/:id', {}, {
        save: {method: 'POST'}
      })
    }
  }
})();
