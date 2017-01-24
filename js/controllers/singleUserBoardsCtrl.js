app.controller('SingleUserBoardsCtrl', function($scope, BoardFactory){

  $scope.uid = "54321"

  BoardFactory.getUserBoardList($scope.uid)
  .then(function(val){
            console.log("All user board list?", val);

            $scope.specificUserBoardList = val;
        });
});
