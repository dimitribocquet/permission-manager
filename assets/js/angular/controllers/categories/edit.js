var app = angular.module('permissionManagerApp');

app.controller('CategoryEditCtrl', [
	'$scope', '$state', '$stateParams', 'CategoryFactory', 'PermissionFactory',
	function ($scope, $state, $stateParams, CategoryFactory, PermissionFactory){
		var id = $stateParams.id;
		
		$scope.id = id;
		$scope.permissions = [];

		CategoryFactory.getCategory(id)
			.then(function(category){
				$scope.category = category;
				return PermissionFactory.getPermissions()
			})
			.then(function(permissions){
				$scope.permissions = permissions;
			})
		;

		$scope.save = function(){
			console.log('saved');

			$state.go('category');
		}

		$scope.cancel = function(){
			console.log('canceled');

			$state.go('category');
		}

		$scope.hasPermission = function(permission){
			return !!$scope.category.permissionIds.find(function(id){
				return permission.id == id;
			});
		}

		$scope.setPermission = function (permission, checked){
			if(checked){
				$scope.category.permissionIds.push(permission.id);
			}else{
				var index = $scope.category.permissionIds.indexOf(permission.id);
				if(index !== -1) $scope.category.permissionIds.splice(index, 1);
			}
		}
}
]);