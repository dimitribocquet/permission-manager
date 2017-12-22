var app = angular.module('permissionManagerApp');

app.factory('PermissionFactory', function ($http, $q){
	var list = [];
	var f = {};

	f.getPermissions = function(){
		if(list.length == 0){
			return $http.get('/fakeData/permissions.json')
				.then(function(response){
					list = response.data;
					return list;
				})
			;
		}else{
			return $q.resolve(list);
		}
	}

	f.getPermissionsOfCategory = function(category){
		if(list.length == 0){
			return $http.get('/fakeData/permissions.json')
				.then(function(response){
					list = response.data;
					return list.filter(function(permission){
						return category.permissionIds.find(function(id){
							return id == permission.id;
						})
					});
				})
			;
		}else{
			return $q.resolve(list);
		}
	}

	f.getPermission = function(id){
		if(list.length == 0){
			return $http.get('/fakeData/permissions.json')
				.then(function(response){
					list = response.data;
					return list.find(function(elem){ return elem.id == id});
				})
			;
		}else{
			return $q.resolve(list.find(function(elem){ return elem.id == id}));
		}
	}

	return f;
});