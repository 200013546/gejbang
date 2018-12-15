var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Link = sequelize.define("links", {
  title: Sequelize.STRING,
  url: Sequelize.STRING,
  sso: Sequelize.STRING,
  view: Sequelize.INTEGER,
  metadata: Sequelize.TEXT,
  typeid: Sequelize.STRING
});
Link.sync();
module.exports = Link;
