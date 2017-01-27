app.controller('CreateBoardCtrl', function($scope, BoardFactory, AuthFactory){

  $scope.makeBoardButton = function () {
    console.log("Make Board button pressed")

    $scope.uid = AuthFactory.getUserId()

    console.log($scope.uid)
    console.log($scope.title)

    BoardFactory.createNewBoard($scope.uid, $scope.title)

  }

})
