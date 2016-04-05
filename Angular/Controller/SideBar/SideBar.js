(function (){
	'use strict';

	angular
		.module('dashApp')
		.controller('sidebarController',sidebarController)

	sidebarController.$inject = ['$location','navigation'];
	function sidebarController($location,navigation) {
		var sc = this;
		sc.toggle = toggle;
		sc.listUrl = navigation.listUrl();
		$('div.navbar-collapse').addClass('collapse');

		function toggle(index){
			sc.listUrl[index].active = !sc.listUrl[index].active;
		}
	}
	
})();