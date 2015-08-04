var app = angular.module('app', []);


app.controller('TestCtrl', function($scope) {
  console.log($scope)
})

app.directive('testDirective', function() {
  return {
  	scope: {},
    link: function(scope) {
      console.log(scope)
    }
  }
})