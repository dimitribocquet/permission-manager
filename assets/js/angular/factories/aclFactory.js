var app = angular.module('permissionManagerApp');

app.factory('AclFactory', function ($http, $q, $localStorage, $sessionStorage){

	var f = {};

	f.isAllowed = function(fromState, toState){
		console.log('isAllowed',$localStorage.user, fromState, toState);
		var permissionNameRequired = toState.data ? toState.data['permission'] : null;
		if(!permissionNameRequired) return $q.resolve(true);

		if($localStorage.user && $localStorage.user.category && $localStorage.user.category.permissions && toState.data['permission']){	
			if($localStorage.user.category.permissions.find(function(permission){
				return permission.name == permissionNameRequired;
			})){
				return $q.resolve(true);
			}else{
				return $q.reject(false)
			}
		}else{
			return $q.reject(false);
		}
	}

	return f;
});