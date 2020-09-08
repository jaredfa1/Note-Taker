
//require
var express = require("express");
var path = require("path");
var fs = require("fs");
//express app
var app = express();
var PORT = process.env.PORT || 3000;

// Parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
//listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " +PORT);
});

// routes
require("./route/apiroute") (app);
require("./route/htmlroute")(app);
