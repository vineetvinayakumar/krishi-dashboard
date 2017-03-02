	
(function () {
  'use strict';

 var app =  angular.module('MyApp', ['ngMaterial', 'ui.router'])
	  .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
	$scope.currentNavItem = 'page1';
  }

	app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/dashboard');

		$stateProvider
			.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard.html'
		})
	
			.state('agent_report', {  
			url: '/agent_report',
			templateUrl: 'views/agent_report.html'
		})
		
			.state('ivr_report', {  
				url: '/ivr_report',
				templateUrl: 'views/ivr_report.html'
		})
		
	});

})();