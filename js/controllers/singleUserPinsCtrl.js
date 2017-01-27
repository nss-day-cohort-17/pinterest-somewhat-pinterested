app.controller('SingleUserPinsCtrl', function($scope, PinFactory){
    console.log('MainCtrl loaded.  Show all pins from all users')

    $scope.uid = firebase.auth().currentUser.uid

    // firebase.auth().onAuthStateChanged()

    PinFactory.getSpecificUserPinsList($scope.uid)
        .then(function(val){
            console.log("single user pin list?", val)

            $scope.specificUserPinList = val
        })


    $scope.deletePinButton = function($event){
      console.log("delete button clicked")

      $scope.getElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
      // $scope.getElement = $($event.target)//.closest('div')
      console.log("get pin delete element", $scope.getElement)
      $scope.deleteThisKey = $scope.getElement.classList[0]


      PinFactory.deleteSpecificUserPin($scope.deleteThisKey)
    }
})
