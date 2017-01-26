app.factory('BoardFactory', function($http, AuthFactory){

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

              console.log(newBoard)

              $http.post('https://somewhat-pinterested.firebaseio.com/boards.json', JSON.stringify(newBoard))
          },

          deleteSpecificUserBoard: function(boardName){
            console.log("delete board function")
            console.log("delete url", `https://somewhat-pinterested.firebaseio.com/boards/${boardName}.json`)
            $http.delete(`https://somewhat-pinterested.firebaseio.com/boards/${boardName}.json`)
          }
        }
})
