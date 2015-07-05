var app = angular.module('app', []);

function PersonCtrl(){
  var self = this;
  self.friends = [
  {
    name: 'Andrew'
  }, 
  {
    name: 'Will'
  }, 
  {
    name: 'Mark'
  }, 
  {
    name: 'Alice'
  }, 
  {
    name: 'Todd'
  }]
  ;
}

function startswithLetter(){
  return function (items, letter) {
    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.name.substring(0,1))){
        filtered.push(item);
      }
    }
    return filtered;
  };
}

app.controller('PersonCtrl', PersonCtrl);
app.filter('startswithLetter', startswithLetter);