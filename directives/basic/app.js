var app = angular.module('functionalities', []);

function entering(){
  return function(scope, element) {
    element.bind("mouseenter", function(){
      console.log("Mouse has entered the div");
    });
  };
}

function leaving (){
  return function(scope, element) {
    element.bind("mouseleave", function(){
      console.log("Mouse has left the div");
    });
  };
}
app.directive("leaving", leaving);
app.directive("entering", entering);