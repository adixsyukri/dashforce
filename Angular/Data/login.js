(function (){
	'use strict';

	angular
		.module('dashApp')
		.factory('loginState',loginState)

	loginState.$inject = ['$cookies'];
	function loginState($cookies){
		var bool = $cookies.get('login_status');
		return {
			loggedIn: bool
		}
	}
	
})();