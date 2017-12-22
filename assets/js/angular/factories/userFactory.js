var app = angular.module('permissionManagerApp');

app.factory('UserFactory', function ($http, $q){
	var list = [];
	var f = {};

	f.getUsers = function(){
		if(list.length == 0){
			return $http.get('/fakeData/users.json')
				.then(function(response){
					list = response.data;
					return list;
				})
			;
		}else{
			return $q.resolve(list);
		}
	}

	f.getUser = function(id){
		if(list.length == 0){
			return $http.get('/fakeData/users.json')
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