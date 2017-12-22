var app = angular.module('permissionManagerApp');

app.controller('CategoryEditCtrl', function ($scope, $state, $stateParams, CategoryFactory){
	var id = $stateParams.id;

	$scope.id = id;
	CategoryFactory.getCategory(id)
		.then(function(category){
			$scope.category = category;
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
});