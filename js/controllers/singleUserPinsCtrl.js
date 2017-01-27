app.controller('SingleUserPinsCtrl', function($scope, PinFactory){
    console.log('MainCtrl loaded.  Show all pins from all users')

    $scope.uid = firebase.auth().currentUser.uid

    // firebase.auth().onAuthStateChanged()

    PinFactory.getSpecificUserPinsList($scope.uid)
        .then(function(val){
            console.log("single user pin list?", val)

            $scope.specificUserPinList = val
        })
})
