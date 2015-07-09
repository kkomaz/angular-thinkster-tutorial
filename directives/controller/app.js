var app = angular.module('coolApp', []);

function entering(){
  return function(scope, element, attrs) {
    element.bind("mouseenter", function(){
      scope.$apply(attrs.entering);
    });
  };
}

function FunCtrl(){
  var self = this;
  self.start = function(){
    console.log("Fun time have been started!");
  };
  self.end = function(){
    console.log("Fun time is over.");
  };
}

app.controller('FunCtrl', FunCtrl);
app.directive("entering", entering);