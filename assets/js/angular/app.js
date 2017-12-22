// var app = angular.module('permissionManagerApp', [
// 	'ngRoute'
// ]);
  
// app.config(['$locationProvider', '$routeProvider',
// 		function($locationProvider, $routeProvider){
// 			$locationProvider.hashPrefix('!');

// 			var routeCfg = {
// 				controller: 'PermissionManagerCtrl',
// 				templateUrl: 'templates/index.html'
// 			};

// 			$routeProvider
// 				.when('/', routeCfg)
// 				.otherwise({
// 					redirectTo: '/'
// 				})
// 			;
// 		}
// 	])
// ;

// // app.directive('ngCustomBlur', function(){
// // 	return function(scope, elem, attrs){
// // 		elem.bind('blur', function(){
// // 			scope.$apply(attrs.ngCustomBlur);
// // 		});
// // 	};
// // });
// 
// 

var app = angular.module('permissionManagerApp', [
	'ui.router',
	'ngStorage'
]);

app.run(function($rootScope, $location, $state, $transitions, AclFactory) {
	console.log($state, $transitions);
	
	$transitions.onBefore({}, function(transition){
		console.log('fdgdfg',transition.to().data);
		return AclFactory.isAllowed(transition.from(), transition.to())
			.then(function(result){
				if(result){
					console.log('result',result);
					return true;
				}else{
					console.log('no', result);
					return transition.router.stateService.target('dashboard');
					
				}
			})
			.catch(function(error){
				console.log('error',error);
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
					resolve: {
						permission: function(){
							return 'user.list';
						}
					},
					data: {
						permission: 'user.list'
					}
				})
				.state({
					name: 'userEdit',
					url: '/users/:id',
					templateUrl: 'partials/users/edit.html',
					controller: 'UserEditCtrl',
				})
				.state({
					name: 'category',
					url: '/categories',
					templateUrl: 'partials/categories/list.html',
					controller: 'CategoryListCtrl',
				})
				.state({
					name: 'categoryEdit',
					url: '/categories/:id',
					templateUrl: 'partials/categories/edit.html',
					controller: 'CategoryEditCtrl',
				})
				.state({
					name: 'permission',
					url: '/permissions',
					templateUrl: 'partials/permissions/list.html',
					controller: 'PermissionListCtrl',
				})
				.state({
					name: 'permissionEdit',
					url: '/permissions/:id',
					templateUrl: 'partials/permissions/edit.html',
					controller: 'PermissionEditCtrl',
				})
			;
		}
	])
;

// app.directive('ngCustomBlur', function(){
// 	return function(scope, elem, attrs){
// 		elem.bind('blur', function(){
// 			scope.$apply(attrs.ngCustomBlur);
// 		});
// 	};
// });