var app = angular.module('permissionManagerApp', [
	'ui.router',
	'ngStorage'
]);

app.run(function($rootScope, $location, $state, $transitions, AclFactory) {	
	$transitions.onBefore({}, function(transition){
		return AclFactory.isAllowed(transition.from(), transition.to())
			.then(function(result){
				if(result){
					return true;
				}else{
					return transition.router.stateService.target('dashboard');
					
				}
			})
			.catch(function(error){
				return transition.router.stateService.target('dashboard');
				
			})
		;
	})
});
  
app.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise('/dashboard');

			$stateProvider
				.state({
					name: 'dashboard',
					url: '/dashboard',
					templateUrl: 'partials/dashboard.html',
					controller: 'DashboardCtrl',
				})
				.state({
					name: 'user',
					url: '/users',
					templateUrl: 'partials/users/list.html',
					controller: 'UserListCtrl',
					data: {
						permission: 'user.list'
					}
				})
				.state({
					name: 'userEdit',
					url: '/users/:id',
					templateUrl: 'partials/users/edit.html',
					controller: 'UserEditCtrl',
					data: {
						permission: 'user.edit'
					}
				})
				.state({
					name: 'category',
					url: '/categories',
					templateUrl: 'partials/categories/list.html',
					controller: 'CategoryListCtrl',
					data: {
						permission: 'category.list'
					}
				})
				.state({
					name: 'categoryEdit',
					url: '/categories/:id',
					templateUrl: 'partials/categories/edit.html',
					controller: 'CategoryEditCtrl',
					data: {
						permission: 'category.edit'
					}
				})
				.state({
					name: 'permission',
					url: '/permissions',
					templateUrl: 'partials/permissions/list.html',
					controller: 'PermissionListCtrl',
					data: {
						permission: 'permission.list'
					}
				})
				.state({
					name: 'permissionEdit',
					url: '/permissions/:id',
					templateUrl: 'partials/permissions/edit.html',
					controller: 'PermissionEditCtrl',
					data: {
						permission: 'permission.edit'
					}
				})
			;
		}
	])
;