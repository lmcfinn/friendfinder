
var friendData = require("../data/friend.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
      
      //Where can i see this console log?
      console.log(req.body)

      friendData.push(req.body);
  });
};
