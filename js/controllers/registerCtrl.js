app.controller("RegisterCtrl", function($scope, $location, AuthFactory){

  $scope.registerButton = function () {
    AuthFactory.register($scope.email, $scope.password)
      .then(function(){
        AuthFactory.putNewUserInFirebase()
      })
  }

});
