angular.module('movies.factories',[])

.factory('Movies', function ($http) {

  var getOpen = function() {
    return $http({
      method: 'GET',
      url: '/api/open'
    })
    .then(function(res) {
      return res.data;
    });
  };

  var getStar = function() {
    return $http({
      method: 'GET',
      url: '/api/star'
    })
    .then(function(res) {
      return res.data;
    });
  };

  var submitMovie = function(movie) {
    return $http({
      method: 'POST',
      url: '/api/movie',
      data: movie
    });
  };

  var updateMovie = function(data) {
    return $http({
      method: 'PUT',
      url: '/api/movie',
      data: data
    });
  };

  var deleteMovie = function(movie) {
    return $http({
      method: 'POST',
      url: '/api/delete',
      data: movie
    });
  };

  return {
    getOpen: getOpen,
    getStar: getStar,
    submitMovie: submitMovie,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
  };
});
