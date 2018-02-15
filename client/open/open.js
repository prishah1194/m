angular.module('movies.open', [])

.controller('OpenController', function ($scope, $location, $route, Movies) {
  $scope.data = {};

  $scope.getMovies = function() {
    Movies.getOpen()
      .then(function(openMovies) {
        $scope.data.movies = openMovies;
      })
      .catch(function(error) {
         console.error(error);
      });
  };

  $scope.getMovies();

  $scope.submitMovie = function(movie) {
    $scope.loading = true;

    Movies.submitMovie({
   
      title: movie.title,
      genre: movie.genre,
      actor: movie.actor,
      actress: movie.actress,
      rating:movie.rating,
      star: false,
      status: true
    })
      .then(function() {
        $scope.loading = false;
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.starMovie = function(movie) {
    Movies.updateMovie(movie)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.deleteMovie = function(movie) {
    console.dir(movie);
    Movies.deleteMovie(movie)
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.name = 'OpenController';
});
