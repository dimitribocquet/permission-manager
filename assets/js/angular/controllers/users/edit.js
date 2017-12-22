var app = angular.module('permissionManagerApp');

app.controller('UserEditCtrl', function ($scope, $state, $stateParams, UserFactory){
	var id = $stateParams.id;

	$scope.id = id;
	UserFactory.getUser(id)
		.then(function(user){
			$scope.user = user;
		})
	;

	$scope.save = function(){
		console.log('saved');

		$state.go('user');
	}

	$scope.cancel = function(){
		console.log('canceled');

		$state.go('user');
	}
});