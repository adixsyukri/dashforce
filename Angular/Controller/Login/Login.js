(function () {
	'use strict';

	angular
		.module('dashApp')
		.controller('loginController',loginController)

	loginController.$inject = ['User','$location','UserService','$cookies','loginState'];
	function loginController(User,$location,UserService,$cookies,loginState){
		var lc = this;
		lc.loginError = false;
		lc.user = null;
		lc.submit = submit;
		init();

		function init(){
			if (loginState.loggedIn == 'true' ){
				$location.path('/home');
			}
		}

		function submit() {
			lc.loginError = false;
			if(lc.user != null){
				UserService.Login(lc.user).then(function (obj){
					if(obj.data[0].status == 'true'){
						User.Initialize(obj.data[0]);
						$location.path('/home');
					} else {
						lc.loginError = true;
					}
				})
			}
		}
	}
})();