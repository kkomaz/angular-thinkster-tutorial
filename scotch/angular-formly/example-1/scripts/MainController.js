(function() {
  'use strict';

  var app = angular.module('formlyApp');

  app.controller('MainController', MainController);

  function MainController(province){
    var vm = this;

    vm.rental = {};

    vm.rentalFields = [
      {
        key: 'first_name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true,
          minlength: 3,
          maxlength: 10
        }
      },
      {
        key: 'last_name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
      },
      {
        key: 'under25',
        type: 'checkbox',
        templateOptions: {
          label: 'Are you under 25?',
        },
        //Hide this field if we dont have any valid input in the email field
        hideExpression: '!model.email'
      },
      {
        key: 'province',
        type: 'select',
        templateOptions: {
          label: 'Province/Territory',
          //call our province service to get a list of provinces and territories
          options: province.getProvinces()
        },
        hideExpression: '!model.email'
      },
      {
        key: 'insurance',
        type: 'input',
        templateOptions: {
          label: 'Insurance Policy Number',
          placeholder: 'Enter your insurance policy number'
        },
        hideExpression: '!model.under25 || !model.province',
      },
      {
        key: 'license',
        type: 'input',
        templateOptions: {
          label: 'Driver\'s License Number',
          placeholder: 'Enter your driver\'s license number'
        },
        hideExpression: '!model.province',
        validators: {
          driversLicense: function($viewValue, $modelValue, scope){
            var value = $modelValue || $viewValue;
            if (value){
              return validateDriversLicense(value);
            }
          }
        },
        expressionProperties: {
         'templateOptions.disabled': function($viewValue, $modelValue, scope){
          if (scope.model.province == 'ontario') {
            return false;
          }
          return true;
         } 
        }
      },
      
      function validateDriversLicence(value) {
        return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
      }
    ];
  }
})();