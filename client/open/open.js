//Create a new module
var app=angular.module('movies.open', [])
//We create an AngularJS Module, app, for our application. 
//Then we add the controller's constructor function to the module using the .controller() method. 
//This keeps the controller's constructor function out of the global scope
app.controller('OpenController', function ($scope, $route, Movies) {
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

  

  $scope.sortBy = function(sortField) {
    $scope.reverseOrder = ($scope.sortField === sortField) ? !$scope.reverseOrder : false;
    $scope.sortField = sortField;
  };


  $scope.submitMovie = function(movie) {
    $scope.loading = true;
    Movies.submitMovie({
      title: movie.title,
      genre: movie.genre,
      actor: movie.actor,
      actress: movie.actress,
      rating:movie.rating,
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
