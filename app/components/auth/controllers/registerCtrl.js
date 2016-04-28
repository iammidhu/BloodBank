(function() {
  'use strict';

  angular.module('app.register')
    .controller('RegisterCtrl',['signupService', RegisterCtrl]);

  function RegisterCtrl(signupService) {

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
      if(form){
        debugger;
        console.log(form);
        signupService.saveRegisterData();
      }
    }

    function reset(registerForm) {
      if (registerForm) {
        registerForm.$setPristine();
        registerForm.$setUntouched();
        vm.rc = {};
      }
    };

  }
})();
