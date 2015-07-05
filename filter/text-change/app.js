
  var self = this;
  self.myString = "hello world";
}

function CapitalizeFilter() {
  return function(text) {
    return text.toUpperCase();
  };
}

function DowncaseFilter() {
  return function(text) {
    return text.toLowerCase();   
  };
}

var cap = angular.module('app', []);
cap.controller('TestCtrl', TestCtrl);
cap.filter('capitalize', CapitalizeFilter);
cap.filter('downcase', DowncaseFilter);