var app = angular.module('myReverseFilterApp', []);

function MyController() {
  var self = this;
  this.greeting = 'hello';
}

function Reverse() {
  return function(input, uppercase) {
    input = input || '';
    var out = ""; 
    // need to define out as a string
    for (var i = 0; i < input.length; i++){
      out = input.charAt(i) + out;
    }
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
}

app.controller('MyController', MyController);
app.filter('reverse', Reverse);