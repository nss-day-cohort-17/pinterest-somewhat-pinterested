app.controller('CreatePinCtrl', function($scope, PinFactory, BoardFactory){
    console.log('CreatePinCtrl loaded.')

    // Get users board list and add it to select fields options

    BoardFactory.getUserBoardList()
      .then(function(val){
        console.log(val)
      })
})
