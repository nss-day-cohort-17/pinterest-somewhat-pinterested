console.log("app.js loaded")

const app = angular.module('pinterestApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html'
    })
    .when('/register', {
        controller: 'RegisterCtrl',
        templateUrl: 'partials/register.html'
    })
    .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'partials/login.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})
