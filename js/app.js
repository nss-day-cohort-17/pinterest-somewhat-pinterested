console.log("app.js loaded")


const app = angular.module('pinterestApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

<<<<<<< HEAD
     // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBoxmTcMPKoZ12HwiX-0quM5Zlol-BFCCs",
        authDomain: "somewhat-pinterested.firebaseapp.com",
        databaseURL: "https://somewhat-pinterested.firebaseio.com",
        storageBucket: "somewhat-pinterested.appspot.com",
        messagingSenderId: "568015842356"
      };
      firebase.initializeApp(config);
=======
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBoxmTcMPKoZ12HwiX-0quM5Zlol-BFCCs",
      authDomain: "somewhat-pinterested.firebaseapp.com",
      databaseURL: "https://somewhat-pinterested.firebaseio.com",
      storageBucket: "somewhat-pinterested.appspot.com",
      messagingSenderId: "568015842356"
    });
    // firebase.initializeApp(config);

    const checkForAuth = {
      checkForAuth ($location) {
        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/login')
          }
        })
      }
    }
>>>>>>> 5d17a0f075761fc29c94b68137b6ed63cda4449b


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
        templateUrl: 'partials/userPins.html',
        resolve: checkForAuth
    })
    .when('/yourPins/:somePin', {
        controller: 'test',
        templateUrl: 'test'
    })
    .when('/yourBoards', {
        controller: 'SingleUserBoardsCtrl',
        templateUrl: 'partials/userBoards.html',
        resolve: checkForAuth
    })
    .when('/yourBoards/:someBoard', {
        controller: 'test',
        templateUrl: 'test/login.html'
    })
    .when('/createPin', {
        controller: 'CreatePinCtrl',
        templateUrl: 'partials/createPin.html',
        resolve: checkForAuth
    })
    .when('/createBoard', {
        controller: 'test',
        templateUrl: 'partials/createboard.html',
        resolve: checkForAuth
    })
    .otherwise({
        redirectTo: '/'
    })
})
