/**
 * Created by codeforcoffee on 11/15/16.
 */
angular.module('adoptionBlog')
.controller('AdminDeleteCtrl', function($scope, $http) {

  $scope.posts = [];

  $scope.fetch = function() {
    $http.get('http://localhost:9292/api/posts').success(function(results) {
      $scope.posts = results;
    }).error(function(err) {
      console.log('API fetch failed:');
      console.log(err);
    });
  };

  $scope.delete = function(blog) {
    var check = confirm('Are you sure you want to erase this entry?');
    if (check) {
      $http.delete('http://localhost:9292/api/posts/' + blog.id).success(function(result) {
        console.log('Erased ' + blog.id);
        $scope.fetch();
      });
    }
  };

  $scope.fetch();

});