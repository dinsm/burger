// Require the following npm packages inside of the server.js file:
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

//var router = require(path.join(__dirname, "controllers", "burgers_controller.js"));

var app = express();

// Open Server
var PORT = process.env.PORT || 3000;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public")); //app.use(express.static(process.cwd() + "/public"));

// Parse application
app.use(bodyParser.urlencoded({
    extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
//var routes = require(path.join(__dirname,"controllers","burgers_controller.js"));
app.use("/", routes);



// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});