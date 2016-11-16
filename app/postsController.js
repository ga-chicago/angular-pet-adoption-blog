/**
 * Created by codeforcoffee on 11/15/16.
 */
angular.module('adoptionBlog')
.controller('PostsCtrl', function($scope, $http) {

  $scope.posts = [];

  $scope.sanitizeTags = function(tags) {
    return tags.split(',').join(' & ');
  };

  $scope.fetch = function() {
    $http.get('http://localhost:9292/api/posts').success(function(results) {
      $scope.posts = results;
    }).error(function(err) {
      console.log('API fetch failed:');
      console.log(err);
    });
  };

  // fetch on instantiation
  $scope.fetch();
});
