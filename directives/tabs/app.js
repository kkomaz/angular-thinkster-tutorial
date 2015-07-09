(function(window) {

app = angular.module('app', []);
app.directive('tab', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
    require: '^tabset',
    scope: {
      heading: '@'
    },
    // link is like the controller of the directive
    // any tab directive will register themselves with the tabset driective
    // scope is the tab goes through two iterations via the ng-repeat
    link: function(scope, elem, attr, tabsetCtrl){
      scope.active = false;
      tabsetCtrl.addTab(scope);
    }
  };
});

app.directive('tabset', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
      var self = this;
      self.tabs = [];
      
      self.addTab = function addTab(tab) {
        self.tabs.push(tab);
        if (self.tabs.length == 1) {
          tab.active = true;
        }
      };
      
      self.select = function(selectedTab){
        angular.forEach(self.tabs, function(tab){
          if (tab.active && tab !== selectedTab){
            tab.active = false;
          }
        });
        selectedTab.active = true;
      };


    }
  };
});
})(window);