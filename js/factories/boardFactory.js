app.factory('BoardFactory', function($http){

  return {
          getUserBoardList: function(uid){
            return $http.get(`https://somewhat-pinterested.firebaseio.com/boards.json?orderBy="uid"&equalTo="${uid}"`)
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
          },


          deleteSpecificUserBoard: function(){

            $delete.
          }
})
