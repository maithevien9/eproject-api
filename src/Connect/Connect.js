var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "bf525d49fe0172",
  password: "026c8444",
  database: "heroku_e3fa5a40dc31d04",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;

// mysql://bf525d49fe0172:026c8444@us-cdbr-east-03.cleardb.com/heroku_e3fa5a40dc31d04?reconnect=true
