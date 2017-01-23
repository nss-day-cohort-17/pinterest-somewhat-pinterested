app.factory('BoardFactory', function($http){

  return {
            getUserBoardList: function(){
              // https://west-doctors-patients.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctor_id}"`)
              return $http.get('https://somewhat-pinterested.firebaseio.com/boards.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            }
          }
})
