
var friendData = require("../data/friend.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

      console.log("route", req.body)

      friendData.push(req.body);
      // friendArray.push(req.body);

      var sum = 0;

      // console.log("score", req.body.scores)


      req.body.scores.forEach( 
        function addNumber(value) { sum += parseInt(value); }
      );
      console.log(sum)

      


  });
};
