//Load
var noteData = require("../db/db.json");
const fs = require('fs');

// Route
module.exports = function (app){
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });
    console.log(noteData);
    app.post("api.notes", function (req, res){
        noteData.push(req.body);
        res.json(noteData);
        
    });
    app.delete("/api/notes", function (req, res){
        let delete = req.param.id;
    
    });
};
 