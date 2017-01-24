app.controller('SingleUserPinsCtrl', function($scope, PinFactory){
    console.log('MainCtrl loaded.  Show all pins from all users')

    PinFactory.getSpecificUserPinsList()
        .then(function(val){
            console.log("All user pin list?", val)

            $scope.specificUserPinsList = val
        })
})
