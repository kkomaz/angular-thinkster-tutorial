var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/:firstName/:middleName/:lastName",
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

app.controller('AppCtrl', function ($routeParams){
  var self = this;
  self.message = $routeParams.firstName + " " + $routeParams.middleName + " " + $routeParams.lastName;
});

//controller is not responsible for defining routes
//routeParams - takes into account the dynamic routes