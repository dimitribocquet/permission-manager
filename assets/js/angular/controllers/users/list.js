var app = angular.module('permissionManagerApp');

app.controller('UserListCtrl', ['$scope', '$state', 'UserFactory', 'CategoryFactory', function ($scope, $state, UserFactory, CategoryFactory){
	
	$scope.users = [];
	$scope.categories = [];

	UserFactory.getUsers()
		.then(function(data){
			$scope.users = data;
			return CategoryFactory.getCategories();
		})
		.then(function(data){
			$scope.categories = data;
		})
	;

	$scope.getCategory = function(user){
		var cat = null;
		if($scope.categories){
			cat = $scope.categories.find(function(elem){return elem.id == user.categoryId});
		}

		return cat;
	};


}]);