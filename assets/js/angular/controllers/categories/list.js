var app = angular.module('permissionManagerApp');

app.controller('CategoryListCtrl', ['$scope', '$state', 'CategoryFactory', function ($scope, $state, CategoryFactory){
	CategoryFactory.getCategories()
		.then(function(data){
			$scope.categories = data;
		})
	;
}]);