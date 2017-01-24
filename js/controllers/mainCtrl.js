app.controller('MainCtrl', function($scope, PinFactory){
    console.log('MainCtrl loaded.  Show all pins from all users')

    PinFactory.getAllUserPinList()
        .then(function(val){
            console.log("All user pin list?", val)

            $scope.allUserPinList = val
        })
})

$('.materialboxed').materialbox();
