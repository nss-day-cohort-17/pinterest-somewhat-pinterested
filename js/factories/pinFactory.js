app.factory('PinFactory', function($http){

  return {
            getSpecificUserPinsList: function(uid){
              // https://west-doctors-patients.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctor_id}"`)
              // https://somewhat-pinterested.firebaseio.com/pins.json?orderBy="uid"&equalTo="${user.uid}"`)
              return $http.get(`https://somewhat-pinterested.firebaseio.com/pins.json?orderBy="uid"&equalTo="${uid}"`)
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            },

            createNewPin: function(boardid, url, title){

              let newPin = {
                "uid": AuthFactory.getUserId(),
                "boardid": boardid,
                "url": url,
                "title": title
              }

              $http.post('https://somewhat-pinterested.firebaseio.com/pins.json', JSON.stringify(newPin))
          },

            getAllUserPinList: function(){

              return $http.get('https://somewhat-pinterested.firebaseio.com/pins.json')
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
          }
        }
})
