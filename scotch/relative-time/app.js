var app = angular.module('timeApp', ['angularMoment']);

app.controller('mainController', function (){
	var vm = this;
	vm.time = new Date();
});