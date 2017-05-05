
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
    
    //Create a variable to store the new user's scores
    var newPersonScores = req.body.scores;
    // console.log("newPersonScores", newPersonScores);
    // console.log("exsiting person scores", friendData[0].scores);

    //Why is it that when these variables are placed out of the forEach loop, the results are different? 
    // var eachDifference = 0;
    // var totalDifference = 0;

    //Create an array to house the difference of each user
    var differenceList = [];
   
    //If there is more than one person in the database, run the code below to find the best match
    if (friendData.length > 1) {

      // Get into each object in the friendArray from friends.js
      friendData.forEach(function(user) {
        // console.log("all users", user)

        //Create a var to store the difference in scores between the new user vs existing ones 
        var eachDifference = 0;
        var totalDifference = 0;
        
        //Compute the difference in each score between the new member and an existing member 
        for (var i = 0; i < newPersonScores.length; i++) {
          //Process absolute values and also turn values in the scores arrry into an integer
          eachDifference = Math.abs(parseInt(newPersonScores[i]) - user.scores[i]);
          // console.log("each diff", eachDifference)

          totalDifference += eachDifference;
          // console.log("totalDifference", totalDifference)
        };
        //Push each totalDifference into the differences arrray
        differenceList.push(parseInt(totalDifference));
      });

      console.log(differenceList)

      //Find the smallest totalDifference in the differences array
      var minimalDiff = Math.min.apply(null, differenceList);
      // console.log("min", minimalDiff);

      //Match the minimalDiff with the profile in the friendArray
      for (var j = 0; j < differenceList.length; j++) {
        if(differenceList[j] == minimalDiff) {
          res.json(friendData[j])
          // console.log("best match", friendData[j])
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
