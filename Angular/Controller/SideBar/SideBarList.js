(function () {
	'use strict';

	angular
		.module('dashApp')
		.factory('navigation',navigation)

	navigation.$inject = ['$cookies'];
	function navigation($cookies){

		var dashboard = {
						'class':'fa fa-dashboard fa-fw',
						'title':'Dashboard',
						'active':false,
						'link': [{
							'state':'graph',
							'title':'All Graph'
						}]
					};

		var _staff = [
						dashboard
					],
			_finance = [
						dashboard
					],
			_management = [
						dashboard
					];

		return {
			'listUrl': listUrl
		}

		function listUrl(){
			if(typeof $cookies.get('user') !== 'undefined'){
                var user = JSON.parse($cookies.get('user'));
                 if(user.permission == 'Staff'){
                        return _staff		
                    } 

                    // admin view permission
                    else if (user.permission == 'Admin') {
                        return _admin;
                    } 

                    // management view permission
                    else if (user.permission == 'Management') {
                        return _management;
                    } 

                    // finance view permission
                    else if (user.permission == 'Finance') {
                        return _finance;
                    } 

                    // anonymous permission
                    else {
                        //
                    }
            }
		}
	}

})();
