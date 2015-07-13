(function(){
  function TestCtrl() {
    this.user = {name: 'Blake'};
  }

  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'TestCtrl as test',
      templateUrl: 'test.html'
    })
    .otherwise('/');
  })
  .controller('TestCtrl', TestCtrl);

  angular.module('app').run(function ($templateCache){
    $templateCache.put('test.html');
  });

})();


// Since $templateCache is a service, 
// we won't be able to access it in the config phase of our app. 
// The earliest we can access $templateCache is in the run phase for our app. 
// Angular modules can have as many run blocks as needed.