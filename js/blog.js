'use strict';

/* Blog Module */

angular.module('MyApp.blog', ['MyApp.blog.entries'])
.config(['$routeProvider', function config( $routeProvider ) {
  $routeProvider.when('/blog', {
    controller: 'BlogController',
    templateUrl: 'partial/blog.html'
  });
}])
	
.controller('BlogController', [ '$scope', function BlogController( $scope ) {
	$scope.Title = "This is my Blog";
}])