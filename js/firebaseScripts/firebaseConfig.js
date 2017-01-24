///////////////////////////////
///      login form     ///////
///////////////////////////////



// Work in Progress


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBoxmTcMPKoZ12HwiX-0quM5Zlol-BFCCs",
  authDomain: "somewhat-pinterested.firebaseapp.com",
  databaseURL: "https://somewhat-pinterested.firebaseio.com",
  storageBucket: "somewhat-pinterested.appspot.com",
  messagingSenderId: "568015842356"
};
firebase.initializeApp(config);

///// event listener on authorization change
firebase.auth().onAuthStateChanged(() => {
  if (firebase.auth().currentUser !== null) {
    //logged in
    $('#userMovies').removeClass('hidden');
    $("#search-your-movies").addClass('active')
    $('#findNewMovies').addClass('hidden');
    $('.login-page').addClass('hidden');
  } else {
    //logged out
    $('.login-page').removeClass('hidden');
    $('#search-your-movies').removeClass('active')
    $('#userMovies').addClass('hidden');
    $('#findNewMovies').addClass('hidden');
  }
})

///// sign in
$('.form-signin').submit((e) => {
  e.preventDefault();

  let email = $('input[type="email"]').val();
  let password = $('input[type="password"]').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // reset the form to empty when you log out
      $('form')[0].reset();
    })
    .then(() => {
      $('.login-page').addClass('hidden');
    })
});

///// add new user
$('#register').click((e) => {
  e.preventDefault();

  let email = $('input[type="email"]').val();
  let password = $('input[type="password"]').val();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // reset the form to empty when you log out
      $('form')[0].reset();
    })
    .then(() => {
      $('.login-page').addClass('hidden');
    });
});

///// sign out
$('#logoutButton').click(() => {
  firebase.auth().signOut();
});



// Testing
var uid = firebase.auth().currentUser.uid
