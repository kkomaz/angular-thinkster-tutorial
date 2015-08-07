var app = angular.module('app', []);

function testService($http){
  this.get = function() {
    return $http.get('http://test-routes.herokuapp.com/test/hello')
      .then(function(res) {
        // return the enveloped data
        return res.data.message;
      });
  };
  this.upperCase = function(data) {
    return $http.post('http://test-routes.herokuapp.com/test/uppercase', data);
  };
}

function TestCtrl(testService){
  var self = this;
  self.getMessage = function() {
    testService.get()
      .success(function(res) {
        self.messages = res.records;
      });
    };
  self.postData = function(message){
    testService.upperCase({message: message})
      .success(function(body){
        self.sendMessage = body.message;
      });
  };
}

app.service('testService', testService);
app.controller('TestCtrl', TestCtrl);

