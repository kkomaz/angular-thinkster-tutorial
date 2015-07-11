var app = angular.module('app', ['ngAnimate']);

function TestCtrl(){
  var self = this;

  self.showBoxOne = false;
  self.showBoxTwo = false;
  self.people = [{name: "Alex"}, {name: "Brian"}, {name: "Mike"}];

  self.bigger = false;
  self.lightTheme = false;
}


app.controller('TestCtrl', TestCtrl);