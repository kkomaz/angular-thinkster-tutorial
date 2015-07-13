var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
  {
    template: "THIS IS THE HOME PAGE"
  })
  .when('/cookies',{
    template: "NOM NOM NOM"
  })
  .when('/:firstName/:middleName/:lastName',{
    templateUrl: 'app.html',
    controller: "AppCtrl",
    controllerAs: "app"
  })
  .otherwise({
    redirectTo: "/"
  });
});

app.controller('AppCtrl', function ($routeParams){
  var self = this;
  self.message = $routeParams.firstName + " " + $routeParams.middleName + " " + $routeParams.lastName;
});

//controller is not responsible for defining routes
//routeParams - takes into account the dynamic routes