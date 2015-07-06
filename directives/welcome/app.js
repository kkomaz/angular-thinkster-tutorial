var app = angular.module('greetings', []);

function welcome (){
  return {
    restrict: "E",
    template: "<div>Howdy there! You Look Splendid!</div>"
  };
}

function welcome2 (){
  return {
    restrict: "A",
    link: function(){
      alert("Howdy!");
    }
  };
}

function welcome3 (){
  return {
    restrict: "C",
    link: function(){
      alert("Howdy from class!");
    }
  };
}

function goodbye (){
  return {
    restrict: "A",
    link: function(){
      alert("Adios Amigo");
    }
  };
}

app.directive("welcome", welcome);
app.directive("welcome2", welcome2);
app.directive("welcome3", welcome3);
app.directive("goodbye", goodbye);