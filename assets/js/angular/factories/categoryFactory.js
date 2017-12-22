var app = angular.module('permissionManagerApp');

app.factory('CategoryFactory', function ($http, $q){
	var list = [];
	var f = {};

	f.getCategories = function(){
		if(list.length == 0){
			return $http.get('/fakeData/categories.json')
				.then(function(response){
					list = response.data;
					return list;
				})
			;
		}else{
			return $q.resolve(list);
		}
	}

	f.getCategory = function(id){
		if(list.length == 0){
			return $http.get('/fakeData/categories.json')
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