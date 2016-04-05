(function (){
	'use strict';

	angular
		.module('dashApp')
		.config(route);

	var state = 'home',
		state_url = '/home',
		navbar_template_url = 'template/nav.html',
		body_template_url = 'Angular/Controller/Home/Home.html',
		controller_name_as = 'homeController as hc',
		permission_array = ['Staff','Management','Finance','Admin'],
		redirect_if_no_permission = 'logout';


	route.$inject = ['$stateProvider'];
	function route($stateProvider){

		$stateProvider
			.state(state, {
				url: state_url,
				views: {
					'navbar': {
						templateUrl:navbar_template_url
					},
					'body': {
						templateUrl: body_template_url,
						controller: controller_name_as
					}
				},
				data: {
					permissions: {
						only: permission_array,
						redirectTo: redirect_if_no_permission
					}
				}
			})

	}

})();