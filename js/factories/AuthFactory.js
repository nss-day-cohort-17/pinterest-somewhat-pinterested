
"esversion: 6";

 app.factory('AuthFactory', ($q) => {
   return {
     login (email, pass) {
       // converts native ES6 promise to angular promise so no $scope.$apply needed
       return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass));
     },

     getUserId () {
       return firebase.auth().currentUser.uid;
       console.log(currentUser.uid);
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
