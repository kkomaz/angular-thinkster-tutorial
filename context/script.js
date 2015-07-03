var test = angular.module('expressionExample', []);

test.controller('ExampleController', ['$window', '$scope', function($window, $scope) {
  $scope.name = 'World';
  $scope.greet = function() {
    $window.alert('Hello ' + $scope.name);
  };
  $scope.noGreet = function() {
    $window.alert("NAH NAH NAH");
  };
}]);