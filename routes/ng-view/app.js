var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
  {
    templateUrl: 'app.html',
    controller: "AppCtrl",
    controllerAs: "app"
  }
    );
});

app.controller('AppCtrl', function (){
  var self = this;
  this.message = "The app routing is working!";
});

