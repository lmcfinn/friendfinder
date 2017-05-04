
var friendData = require("../data/friend.js");
// var friendArray = require("friendArray");

module.exports = function(app) {

  //Read friendData
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Post new user to the server
  app.post("/api/friends", function(req, res) {

    // console.log(req.body);
    
    //Create a var to store the new user's scores
    var newPersonScores = req.body.scores;

    // console.log("newPersonScores", newPersonScores);
    // console.log("exsiting person", friendData[0]);

    //Create a var to store the difference in scores between the new user vs existing ones 
    var totalDifference = 0;

    //Create an array to house the difference of each user
    var differences = [];
   
    //If there is more than one person in the database, run the code below to find the best match
    if (friendData.length > 1) {

      //Get into each object in the friendArray from friends.js
      friendData.forEach(function(user) {
        console.log("all users", user)
        //Compare the difference between each score in the scores array
        for (var i = 0; i < newPersonScores.length; i++) {
          //Process absolute values and also turn values in the scores arrry into an integer
          totalDifference += Math.abs(parseInt(newPersonScores[i]) - user.scores[i]);
        };
        //Push each totalDifference into the differences arrray
        differences.push(parseInt(totalDifference));
      });

      console.log(differences)

      //Find the smallest totalDifference in the differences array
      var minimalDiff = Math.min.apply(null, differences);
      console.log("min", minimalDiff);

      //Match the minimalDiff with the profile in the friendArray
      for (var j = 0; j < differences.length; j++) {
        if(differences[j] == minimalDiff) {
          res.json(friendData[j])
          console.log("best match", friendData[j])
        };
      };
    //If only one person in the database(friend.js), then display that one profile
    } else {
      res.json(friendData);
    };
    
    //Push the new person to the database
    friendData.push(req.body);
  });
};
