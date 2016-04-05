(function (){
	'use strict';

	angular
	.module('dashApp')
	.config(config)

	config.$inject = ['$stateProvider','$urlRouterProvider']

	function config($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise("/login");

		$stateProvider
		.state('login', {
			url: '/login',
			views: {
				'body': {
					templateUrl: 'Angular/Controller/Login/login.html',
					controller: 'loginController as lc'
				}
			}
		})
		.state('logout', {
			url: '/logout',
			views: {
				'body': {
					controller: 'logoutController as lOc'
				}
			}
		});
	}
})();