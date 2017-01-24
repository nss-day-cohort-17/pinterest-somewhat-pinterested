  console.log("BoardViewCtrl");

app.controller('BoardViewCtrl', function($scope, BoardFactory){
  // $scope.items = [];
  BoardFactory.getUserBoardList()
  .then(function(val){
            console.log("All user board list?", val);

            $scope.allUserBoardList = val;
        });
});
