(function () {
	'use strict';

	angular
		.module('dashApp')
		.controller('homeController',Controller)

	Controller.$inject = ['loginState','$location']
	function Controller(loginState,$location){
		init();

		function init(){
			if(loginState.loggedIn == 'false'){
				$location.path('/login');
			}
		}
		var hc = this;
        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
        var today = dd+'/'+mm+'/'+yyyy;

        hc.currentdate = today;
        
    }
})(); 