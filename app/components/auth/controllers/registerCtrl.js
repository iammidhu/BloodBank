(function() {
  'use strict';

  angular.module('app.register')
    .controller('RegisterCtrl', RegisterCtrl);

  function RegisterCtrl() {

    /* private vars */
    var vm = this;

    vm.genderList = [
      'male',
      'female'
    ];

    vm.groups = [
      'A+',
      'O+',
      'B+',
      'AB+',
      'A-',
      'O-',
      'B-',
      'AB-'
    ];
    /* view-model methods (put references) */
    vm.submitRegisterForm = submitRegisterForm;
    vm.reset = reset;

    function submitRegisterForm(form) {
      console.log(form);
    }

    function reset(registerForm) {
      if (registerForm) {
        registerForm.$setPristine();
        registerForm.$setUntouched();

      }
    };

  }
})();
