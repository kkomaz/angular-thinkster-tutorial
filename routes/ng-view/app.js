var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
  {
    templateUrl: 'app.html',
    controller: "AppCtrl",
    controllerAs: "app"
  })
  .when('/cookies',{
    template: "NOM NOM NOM"
  })
  .otherwise({
    template: "This route isn't set!"
  });
});

app.controller('AppCtrl', function (){
  var self = this;
  this.message = "The app routing is working!";
});

//controller is not responsible for defining routes