(function (){
	'use strict';

	angular
		.module('dashApp')
		.config(cgConfig)
		.controller('profileController',profileController)
	
	cgConfig.$inject = ['$stateProvider'];
	function cgConfig($stateProvider){
		$stateProvider
			.state('profile', {
				url: '/profile',
				views: {
					'navbar': {
						templateUrl:'template/nav.html'
					},
					'body': {
						templateUrl: 'Angular/Controller/Profile/profile.html',
						controller: 'profileController as pc'
					}
				},
				data: {
					permissions: {
						only: ['Staff','Management','Finance','Admin'],
						redirectTo: 'home'
					}
				}
			})
	}

	profileController.$inject = ['loginState','$location'];
	function profileController(loginState,$location) {
		init();

		function init(){
			if(loginState.loggedIn == 'false'){
				$location.path('/login');
			}
		}

	}
})();