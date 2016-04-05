(function () {
	'use strict';

	angular
		.module('dashApp')
		.factory('UserService',UserService);

	UserService.$inject = ['$http'];
	function UserService($http){
		return {
			Login:Login
		}

		function Login(obj){
			return $http.post('script/login.php',obj);
		}
	}
})();