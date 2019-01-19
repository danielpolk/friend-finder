// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sets up Express app to use path directory.
app.use(express.static(__dirname + '/public'));


// Requires apiRoutes.js and htmlRoutes.js files
// =============================================================
app.use("./app/routing/apiRoutes.js");
app.use("./app/routing/htmlRoutes.js");


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});