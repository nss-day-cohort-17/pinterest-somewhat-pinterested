app.controller('SingleUserBoardsCtrl', function($scope, $location, BoardFactory, AuthFactory){

  $scope.uid = AuthFactory.getUserId()

  BoardFactory.getUserBoardList($scope.uid)
  .then(function(val){
            console.log("Specific user board list?", val);

            $scope.specificUserBoardList = val;
        });


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
