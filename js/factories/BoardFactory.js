
  console.log("BoardFactory");

app.factory('BoardFactory', function($http) {
  return {
    getUserBoardList: function() {
      return $http.get(`https://somewhat-pinterested.firebaseio.com/boards.json`)
        // return $http.get(`https://somewhat-pinterested.firebaseio.com/boards.json?orderBy="title"&limitToFirst=2`) // this works
        .then(function(val) {
          console.log("val", val);
          return val.data;
        });
    },


    createNewBoard: function(uid, boardid, url, title) {

      let newBoard = {
        "uid": uid,
        "title": title,
        "boardid": boardid,
        "url": url
      };

      $http.post('https://somewhat-pinterested.firebaseio.com/pins.json', JSON.stringify(newBoard));
    }
  };
});
