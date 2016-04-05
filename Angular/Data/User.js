(function (){
	'use strict';

	angular
	.module('dashApp')
	.factory('User',User);

	User.$inject = ['loginState','$cookies','PermissionStore'];
	function User(loginState,$cookies,PermissionStore){
		var _user = {
			'email':null,
			'id':null,
			'permission': null,
            'firstname': null,
            'lastname': null,
			'loggedIn':null
		}

		return {
			'Initialize':Initialize,
			'GetUser':GetUser,
			'SetUser':SetUser
		}

		function Initialize(data){
			var now = new Date(),
				exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
			loginState.loggedIn = data.status;
			$cookies.put('user',JSON.stringify(data),{expires:exp});
			PermissionStore
				.definePermission(data.permission, function () {
					return true;
				});
			_user = data;
		}

		function GetUser(){
			return _user;
		}

		function SetUser(data){
			_user = data;
            loginState.loggedIn = data.status;

		}


	}
})();