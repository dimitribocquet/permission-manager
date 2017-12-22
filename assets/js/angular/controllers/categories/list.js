var app = angular.module('permissionManagerApp');

app.controller('CategoryListCtrl', ['$scope', '$state', 'CategoryFactory', 'PermissionFactory', function ($scope, $state, CategoryFactory, PermissionFactory){
	
	$scope.categories = [];
	$scope.permissions = [];

	CategoryFactory.getCategories()
		.then(function(data){
			$scope.categories = data;
			return PermissionFactory.getPermissions();
		})
		.then(function(data){
			$scope.permissions = data;
		})
	;

	$scope.getPermissions = function(category){
		var elem = null;
		if($scope.permissions){
			elem = $scope.permissions.filter(function(elem){
				return category.permissionIds.find(function(id){
					return id == elem.id;
				})
			});
		}

		return elem;
	};
}]);