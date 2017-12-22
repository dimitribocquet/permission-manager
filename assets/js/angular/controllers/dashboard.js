var app = angular.module('permissionManagerApp');

app.controller('DashboardCtrl', [
	'$scope', '$localStorage', '$sessionStorage', 'UserFactory', 'CategoryFactory', 'PermissionFactory',
	function ($scope, $localStorage, $sessionStorage, UserFactory, CategoryFactory, PermissionFactory){

		$scope.loggedUser = $localStorage.user;
		$scope.users = [];
		$scope.categories = [];
		$scope.permissions = [];

		UserFactory.getUsers()
			.then(function(data){
				$scope.users = data;
				return CategoryFactory.getCategories();
			})
			.then(function(data){
				$scope.categories = data;
				return PermissionFactory.getPermissions();
			})
			.then(function(data){
				$scope.permissions = data;
			})
		;

		$scope.getCategory = function(user){
			var cat = null;
			if($scope.categories){
				cat = $scope.categories.find(function(elem){return elem.id == user.categoryId});
			}

			return cat;
		};

		$scope.logAs = function(user){
			var loggedUser = user;
			loggedUser.category = $scope.categories.find(function(elem){return elem.id == user.categoryId});
			loggedUser.category.permissions = $scope.permissions.filter(function(elem){
				return loggedUser.category.permissionIds.find(function(id){
					return id == elem.id;
				})
			});

			$scope.loggedUser = $localStorage.user = loggedUser;
			console.log(loggedUser);
		}

		$scope.resetLogAs = function(){
			$scope.loggedUser = $localStorage.user = null;
		}

	}
]);