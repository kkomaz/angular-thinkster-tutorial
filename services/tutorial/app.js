var messageApp = angular.module('app', []);

messageApp.factory('messages', function (){
  var messages = {};
  messages.list = [];
  messages.add = function(message){
    messages.list.push({id: messages.list.length, text: message});
  };
  return messages;
});

messageApp.controller('ListCtrl', function (messages){
  // messages in the controller calling the factory
  var self = this;
  self.messageList = messages.list;
});

messageApp.controller('PostCtrl', function (messages){
  // messages in the controller calling the factory
  var self = this;
  self.newMessage = 'Hello World';
  self.addMessage = function(message){
    messages.add(message);
    self.newMessage = '';
  };
});


