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
	'ui.router'
]);
  
app.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise('/users');

			$stateProvider
				.state({
					name: 'user',
					url: '/users',
					templateUrl: 'partials/users/list.html',
					controller: 'UserListCtrl',
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
					templateUrl: 'partials/permissions/list.html'
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