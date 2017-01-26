app.controller('NavCtrl', function($scope, AuthFactory){
    // console.log('MainCtrl loaded.  Show all pins from all users')

    $scope.logOutButton = function () {
      console.log("log out button clicked")
      console.log("AuthFactory", AuthFactory)
      AuthFactory.logOut()
    }
})
