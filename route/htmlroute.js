var path = require("path");

//route
module.exports = function(app) {
    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
  });
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //if not match
  app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
