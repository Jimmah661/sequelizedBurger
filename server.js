// require Express package
var express = require('express');

// Provide port information
var PORT = process.env.PORT || 8000;

// Generate the express app
var app = express();

// define the static content
app.use(express.static("public"));

// provide middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Activate handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import the routes
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on address: http://localhost:" + PORT)
});
