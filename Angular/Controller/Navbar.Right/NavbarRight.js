(function (){
	'use strict';

	angular
		.module('dashApp')
		.controller('navbarRightController',navbarRightController)

	navbarRightController.$inject = ['User','$state'];

	function navbarRightController(User,$state){
		var nrc = this;

		nrc.User = User.GetUser();
		nrc.go = go;

		function go(state){
			$state.go(state);
		}

	}
})();