//Load
var noteData = require("../db/db.json");

// Route
module.exports = function (app){
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });
    console.log(noteData);
    app.post("api.notes", function (req, res){

    });
    app.delete("/api/notes", function (req, res){

    });
};
 