angular.module('movies', [
  'movies.factories',
  'movies.open',
  'movies.star',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './open/open.html',
    controller: 'OpenController'
  })
  .when('/open', {
    templateUrl: './open/open.html',
    controller: 'OpenController'
  })
  .when('/star', {
    templateUrl: './star/star.html',
    controller: 'StarController'
  })
  .otherwise({
    redirectTo: '/open'
  });
});
