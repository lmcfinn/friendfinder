var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// What is (app)?
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);




app.set('port', (process.env.PORT || port));

//Start Server
app.listen(app.get('port'), function() {
 console.log("Node app is running on port", app.get('port'));
});