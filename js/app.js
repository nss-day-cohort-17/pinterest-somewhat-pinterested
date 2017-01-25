console.log("app.js loaded")


const app = angular.module('pinterestApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    // Initialize Firebase
 firebase.initializeApp({
   apiKey: "AIzaSyBoxmTcMPKoZ12HwiX-0quM5Zlol-BFCCs",
   authDomain: "somewhat-pinterested.firebaseapp.com",
   databaseURL: "https://somewhat-pinterested.firebaseio.com",
   storageBucket: "somewhat-pinterested.appspot.com",
   messagingSenderId: "568015842356"
 });
 // firebase.initializeApp(config);

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
        controller: 'SingleUserBoardsCtrl',
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
