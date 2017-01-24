app.factory('BoardFactory', function($http){

  return {
            getUserBoardList: function(uid){
              // https://west-doctors-patients.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctor_id}"`
              return $http.get(`https://somewhat-pinterested.firebaseio.com/boards.json?orderBy="uid"&equalTo="${uid}"`)
              // `https://somewhat-pinterested.firebaseio.com/pins.json?orderBy="uid"&equalTo="${uid}"`
              // return $http.get(`https://somewhat-pinterested.firebaseio.com/boards.json?orderBy="title"&limitToFirst=2`) // this works
                .then(function(val){
                  console.log("val", val)
                  return val.data
              })
            },


          createNewBoard: function(uid, boardid, url, title){

              let newBoard = {
                "uid": uid,
                "title": title
              }

              $http.post('https://somewhat-pinterested.firebaseio.com/pins.json', JSON.stringify(newBoard))
          }
        }
})
