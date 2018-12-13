var Links = require("../models/links.js");
express = require('express');
app = express();
module.exports = function (app) {
  app.get("/api/:links?", function (req, res) {
    // check if spaces for multiple words
    var reqChars = req.params.links;
    if (reqChars) {
      var words = reqChars.split(" ");
      var titleStatement = [];
      var urlStatement = [];
      var mdStatement = [];
      var typeStatement = [];
      console.log(words);
      for (var i = 0; i < words.length; i++) {
        titleStatement.push({
          title: {
            $like: '%' + words[i] + '%'
          }
        }
        )
        urlStatement.push({
          url: {
            $like: '%' + words[i] + '%'
          }
        }
        )
        mdStatement.push({
          metadata: {
            $like: '%' + words[i] + '%'
          }
        }
        )
        typeStatement.push({
          typeid: {
            $like: '%' + words[i] + '%'
          }
        }
        )
      }

      // Query Start
      if (reqChars) {
        Links.findAll({
          where: {
            $or: [
              { $and: titleStatement },
              { $and: urlStatement },
              { $and: mdStatement },
              { $and: typeStatement }
            ]
          },
          //include: [Links.Types],
          order: [
            ['popularity', 'DESC']
          ],
          limit: 300

        }).then(function (result) {
          return res.json(result);
        });
      }
      else {
        Links.findAll({}).then(function (result) {
          return res.json(result);
        });
      }
    } else {
      return res.json(null);
    }
    // Query Ends
  });
  app.post("/api/new", function (req, res) {
    var link = req.body;
    Links.create({
      title: link.title,
      url: link.url,
      metadata: link.metadata,
      typeid: link.typeid
    });
  });
  // app.post("/api/login", function (req, res) {
  //   var login1 = req.body;
  //   var login2 = req.query;
  //   console.log(login1);
  //   console.log(login2);
  //   // var sso = req.body.sso;
  //   // var name = login.name;
  //   // alert(JSON.stringify(req));
  //   // alert("Data: " + req + "\nStatus: " + res);
  //   // console.log(login.name);
  //   // login.create({
  //   //     name: login.name,
  //   //     sso: login.sso
  //   // });
  // });
};
