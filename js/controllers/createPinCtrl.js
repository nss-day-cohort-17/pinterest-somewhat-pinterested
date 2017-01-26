app.controller('CreatePinCtrl', function($scope, PinFactory, BoardFactory, AuthFactory){
    console.log('CreatePinCtrl loaded.')

  // Testing variables
  // $scope.uid = AuthFactory.getUserId()
  // $scope.boardid = "K66hzzzyyy" // figure out a way to get board id - probably from


  // Get users board list and add it to select fields options
    // $scope.userBoardList = BoardFactory.getUserBoardList(AuthFactory.getUserId())
    // console.log($scope.userBoardList)


  // $scope.theUserId = AuthFactory.getUserId()
    // .then(function(uid){
    //   console.log(uid)
    //   BoardFactory.getUserBoardList(uid)
    // })


  // console.log(AuthFactory)
  // setTimeout(function(){console.log(AuthFactory.getUserId())}, 3000)

  firebase.auth().onAuthStateChanged(function(user){

    if(user){
      $scope.uid = AuthFactory.getUserId()
      console.log($scope.uid)

      BoardFactory.getUserBoardList($scope.uid)
        .then(function(userList){
          console.log(userList)
          $scope.userBoardList = userList
        })

      // $scope.userBoardList = BoardFactory.getUserBoardList($scope.uid)
      // console.log("userBoardList", $scope.userBoardList)
    }
  })

  // When user clicks the make pen button do this
  $scope.makePinButton = function () {
    console.log("Make Pin button pressed")

    // console.log(AuthFactory)

    $scope.uid = firebase.auth().currentUser.uid


    console.log($scope.uid)
    console.log($scope.boardid)
    console.log($scope.pictureUrl)
    console.log($scope.title)

    // disabled for testing

    PinFactory.createNewPin($scope.uid, $scope.boardid, $scope.pictureUrl, $scope.title)

  }

})
