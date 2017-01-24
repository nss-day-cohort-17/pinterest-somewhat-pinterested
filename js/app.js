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
    .when('/yourStuffs', {
        controller: 'test',
        templateUrl: 'partials/userPage.html'
    })
    .when('/yourPins', {
        controller: 'SingleUserPinsCtrl',
        templateUrl: 'partials/userPins.html'
    })
    .when('/yourPins/:somePin', {
        controller: 'test',
        templateUrl: 'test'
    })
    .when('/yourBoards', {
        controller: 'UserBoardsCtrl',
        templateUrl: 'partials/userBoards.html'
    })
    .when('/yourBoards:someBoard', {
        controller: 'test',
        templateUrl: 'test/login.html'
    })
    .when('/createPin', {
        controller: 'CreatePinCtrl',
        templateUrl: 'partials/createPin.html'
    })
    .when('/createBoard', {
        controller: 'test',
        templateUrl: 'partials/createboard.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})