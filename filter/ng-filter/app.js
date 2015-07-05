function TestCtrl() {
  var self = this;
    self.people = [
      {
        name: "Eric Simons",
        born: "Chicago"
      },
      {
        name: "Albert Pai",
        born: "Taiwan"
      },
      {
        name: "Matthew Greenster",
        born: "Virginia"
      },
      {
        name: "Alex Lee",
        born: "California"
      },
      {
        name: "Dino Yoon",
        born: "New York"
      },
      {
        name: "Seiji Naganuma",
        born: "Seattle"
      }
    ];
}

angular.module('app', [])
.controller('TestCtrl', TestCtrl);