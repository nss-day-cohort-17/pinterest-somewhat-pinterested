app.controller('CreatePinCtrl', function($scope, PinFactory, BoardFactory){
    console.log('CreatePinCtrl loaded.')

  // Testing variables
  $scope.uid = AuthFactory.getUserId()
  $scope.boardid = "K66hzzzyyyy"


  // Get users board list and add it to select fields options
    // do this later

  // When user clicks the make pen button do this
  $scope.makePinButton = function () {
    console.log("Make Pin button pressed")

    console.log($scope.uid)
    console.log($scope.boardid)
    console.log($scope.pictureUrl)
    console.log($scope.title)

    PinFactory.createNewPin($scope.uid, $scope.boardid, $scope.pictureUrl, $scope.title)

  }

})
