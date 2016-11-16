/**
 * Created by codeforcoffee on 11/15/16.
 */
angular.module('adoptionBlog')
  .controller('AdminCreateCtrl', function($scope, $http) {

    $scope.messages = [
      "Enter your entry and submit it.",
      "Thanks for submitting! Feel free to post another."
    ];

    $scope.activeMessage = $scope.messages[0];

    $scope.create = function(title, content, tags) {
      $http({
        url: 'http://localhost:9292/api/posts',
        method: 'POST',
        params: { title: title, content: content, tags: tags }
      }).success(function(results) {
        $scope.activeMessage = $scope.messages[1];
      }).error(function(err) {
        console.log('API fetch failed:');
        console.log(err);
      });
    };

  });