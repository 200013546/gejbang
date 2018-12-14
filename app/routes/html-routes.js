// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // add route loads the add.html page,
  app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page,
  app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  app.post("/view", function (req, res) {
    res.cookie('sso',req.body.sso);
    res.cookie('name',req.body.name);
    res.sendFile(path.join(__dirname, `../public/view.html`));
  });

  app.post("/addl", function (req, res) {
    res.cookie('sso',req.body.sso);
    res.cookie('name',req.body.name);
    res.sendFile(path.join(__dirname, `../public/add.html`));
  });
};
