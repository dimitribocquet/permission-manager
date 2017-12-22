var app = angular.module('permissionManagerApp');

app.controller('PermissionListCtrl', ['$scope', '$state', 'PermissionFactory', function ($scope, $state, PermissionFactory){
	$scope.permissions = [];

	PermissionFactory.getPermissions()
		.then(function(data){
			$scope.permissions = data;
		})
	;
}]);