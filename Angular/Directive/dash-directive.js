(function (){
	'use strict';

	angular
		.module('dashApp')
		.directive('dfNav',dfNav)
		.directive('dfNavbar',dfNavbar)
		.directive('dfNavbarRight',dfNavbarRight)
		.directive('dfSidebar',dfSidebar)


	function dfNav(){
		return {
			controller: 'authController as ac',
			templateUrl: 'Angular/Directive/Template/nav.html'
		}
	}

	function dfNavbar() {
		return {
			templateUrl: 'Angular/Directive/Template/navbar.html'
		};
	}

	function dfNavbarRight() {
		return {
			templateUrl: 'Angular/Directive/Template/navbar.right.html',
			controller: 'navbarRightController as nrc'
		};
	}

	function dfSidebar() {
		return {
			templateUrl: 'Angular/Directive/Template/sidebar.html',
			controller: 'sidebarController as sc'
		};
	}
	
})();