var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: "app.html",
    controller: "AppCtrl",
      resolve: {
        loadData: appCtrl.loadData,
        prepData: appCtrl.prepData
      }
  });
});

var appCtrl = app.controller("AppCtrl", function ($scope){
  $scope.model = {
    message: "I'm a great app!"
  };
});

appCtrl.loadData = function($q, $timeout){
  var defer = $q.defer();
  $timeout(function (){
    defer.resolve();
  }, 2000);
  return defer.promise;
};

appCtrl.prepData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve();
  }, 2000);
  return defer.promise;
};

// resolve property is a list of promises: Things that need to happen before the controller instanties and the view loads

