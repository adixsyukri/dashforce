(function (){
	'use strict';

	angular
	.module('dashApp',['permission','ui.router','ngCookies','toastr'])
	.run(dfPermission)

	dfPermission.$inject = ['Permission','PermissionStore','$cookies','User','$location'];
	function dfPermission(Permission,PermissionStore,$cookies,User,$location) {

        if(typeof $cookies.get('user') !== "undefined"){
            var user = JSON.parse($cookies.get('user'));
            User.SetUser(user);
            PermissionStore
                .definePermission(user.permission, function () {
                    return true;
                });
            
            $location.path('/home')
        }
		
	}


})();
