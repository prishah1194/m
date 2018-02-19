angular.module('movies.status', [])

.controller('StatusController', function ($scope, $location, $route, Movies) {
  $scope.data = {};

  $scope.getMovies = function() {
    Movies.getStatus()
    .then(function(statusMovies) {
      $scope.data.movies = statusMovies;
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  $scope.getMovies();
 

  $scope.openMovie = function(movie) {
    Movies.updateStatusMovie(movie)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.deleteMovie = function(movie) {
    Movies.deleteMovie(movie)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.name = 'StatusController';
});
