var simpleForm = angular.module('formExample', []);

simpleForm.controller('ExampleController', function (){
  var self = this;
  self.master = {};

  self.update = function(user) {
    self.master = angular.copy(user);
  };

  self.reset = function() {
    self.user = angular.copy(self.master);
  };
});