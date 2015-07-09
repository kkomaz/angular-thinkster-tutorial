var app = angular.module('functionalities', []);

function entering(){
  return function(scope, element, attrs) {
    element.bind("mouseenter", function(){
      element.addClass(attrs.entering);
    });
  };
}

function leaving (){
  return function(scope, element, attrs) {
    element.bind("mouseleave", function(){
      element.removeClass(attrs.entering);
    });
  };
}

app.directive("leaving", leaving);
app.directive("entering", entering);