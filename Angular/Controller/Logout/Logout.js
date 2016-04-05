(function (){
	'use strict';

	angular
		.module('dashApp')
		.controller('logoutController',logoutController)


	logoutController.$inject = ['loginState','$location','$cookies','Permission','PermissionStore','$state'];
	function logoutController(loginState,$location,$cookies,Permission,PermissionStore,$state) {
		PermissionStore.clearStore();
		loginState.loggedIn = 'false';

		$cookies.remove('user');

		$state.go('login') 
	}
	
})();