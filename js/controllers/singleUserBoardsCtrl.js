app.controller('SingleUserBoardsCtrl', function($scope, $location, BoardFactory, AuthFactory, PinFactory){

  $scope.uid = AuthFactory.getUserId()

  // Get users list of boards which will be displayed
  BoardFactory.getUserBoardList($scope.uid)
  .then(function(val){
            console.log("Specific user board list?", val);

            $scope.specificUserBoardList = val;
        });

  PinFactory.getUserPinsImagesForBoards(firebase.auth().currentUser.uid)
    .then(function(firstFourPinsList){
      console.log("first four pins", firstFourPinsList)

      $scope.firstFourPins = firstFourPinsList
    })



  $scope.deleteBoardButton = function ($event) {
    console.log("Delete Board Button pressed")
    // console.log(event)
    // console.log(event.target.parentElement.parentElement.parentElement)

    // get cards unique identifier key

    $scope.getElement = event.target.parentElement.parentElement.parentElement
    $scope.deleteThisKey = $scope.getElement.classList[0]

    console.log($scope.deleteThisKey)

    BoardFactory.deleteSpecificUserBoard($scope.deleteThisKey)

    // Figure out a way to just the view
    setTimeout(()=>{location.reload()}, 1000)

    // made this will just reload the view
    $location.url(`/yourBoards/`)
  }

});
