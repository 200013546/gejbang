var Links = require("../models/links.js");
module.exports = function (app) {
  app.get("/api/:links?", function (req, res) {
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
            ['typeid', 'ASC']
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

  // app.delete("/api/:id", function (req, res) {
  //   connection.query("DELETE	FROM	links	WHERE	id	=	?", [req.params.id], function (err, result) {
  //     if (err) return res.status(500).end();	//	If	an	error	occurred,	send	a	generic	server	failure
  //     else if (result.affectedRows === 0)
  //       return res.status(404).end();	//	If	no	rows	were	changed,	then	the	ID	must	not	exist,	so	404
  //     res.status(200).end();
  //   });
  // });

  // Add new entry to DB links
  app.post("/api/new", function (req, res) {
    var link = req.body;
    Links.create({
      title: link.title,
      url: link.url,
      sso: link.sso,
      view: link.view,
      metadata: link.metadata,
      typeid: link.typeid
    });
  });
};
