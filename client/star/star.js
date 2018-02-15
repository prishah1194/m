angular.module('movies.star', [])

.controller('StarController', function ($scope, $location, $route, Movies) {
  $scope.data = {};

  $scope.getMovies = function() {
    Movies.getStar()
    .then(function(staredMovies) {
      $scope.data.movies = staredMovies;
    })
    .catch(function(error) {
      console.error(error);
    });
  };


  $scope.getMovies();

  $scope.openMovie = function(movie) {
    Movies.updateMovie(movie)
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

  $scope.name = 'StarController';
});
