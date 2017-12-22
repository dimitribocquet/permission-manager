var app = angular.module('permissionManagerApp');

app.controller('PermissionEditCtrl', ['$scope', '$state', '$stateParams', 'PermissionFactory', 
	function ($scope, $state, $stateParams, PermissionFactory){
		var id = $stateParams.id;

		$scope.id = id;
		PermissionFactory.getPermission(id)
			.then(function(permission){
				$scope.permission = permission;
			})
		;

		$scope.save = function(){
			console.log('saved');

			$state.go('permission');
		}

		$scope.cancel = function(){
			console.log('canceled');

			$state.go('permission');
		}
	}
]);