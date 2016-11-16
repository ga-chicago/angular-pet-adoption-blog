// Declare app level module which depends on views, and components
angular.module('adoptionBlog', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', {
      templateUrl: 'ngViews/home.html',
      controller: 'PostsCtrl'
    })
    .when('/admin', {
      templateUrl: 'ngViews/adminDelete.html',
      controller: 'AdminDeleteCtrl'
    })
    .when('/create', {
      templateUrl: 'ngViews/adminCreate.html',
      controller: 'AdminCreateCtrl'
    });

  // default route
  $routeProvider.otherwise({redirectTo: '/'});
}]);
