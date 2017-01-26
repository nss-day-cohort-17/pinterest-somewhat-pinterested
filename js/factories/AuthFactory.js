
"esversion: 6";
console.log('auth factory loaded')

 app.factory('AuthFactory', ($q, $http) => {
   return {

     login (email, pass) {
       // converts native ES6 promise to angular promise so no $scope.$apply needed
       return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass));
     },

     logOut () {
      console.log("AuthFactory logOut function called")
      return $q.resolve(firebase.auth().signOut())
     },

     getUserId () {
       return firebase.auth().currentUser.uid
       console.log("auth current user id", firebase.auth().currentUser.uid);
     },

     register (email, pass) {
        return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass))
     },

      // get user key name and post it to   users.json
      // redo and use AuthFactory.getUserId() ????
     putNewUserInFirebase () {
      var userId = firebase.auth().currentUser.uid
      var userEmail = firebase.auth().currentUser.email

      var newUser = {
                      "name": userEmail,
                      "uid": userId
                    }

      $http.post(`https://somewhat-pinterested.firebaseio.com/users.json`, JSON.stringify(newUser))
     }
   };
 });


//app.factory('AuthFactory', function() {
// let createUser = function (userObj) {
//   return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
//     .catch(function(error) {
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       // ....
//     });
// };

// let loginUser = function(userObj) {
//   console.log(userObj);
//   return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
//   .catch(function(error) {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//   });
// };

// let logoutUser = function() {
//   return firebase.auth().signOut();
// };

// let isAuthenticated = function() {
//   return (firebase.auth().currentUser) ? true : false;
// };


// return {createUser, loginUser, logoutUser, isAuthenticated};

// });
