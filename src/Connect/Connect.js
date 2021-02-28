var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "i19a01vupo85tzim",
  password: "tzmul8dp2yslx7d1",
  database: "n5mfw5fdhxyvngv3",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;

// mysql://bf525d49fe0172:026c8444@us-cdbr-east-03.cleardb.com/heroku_e3fa5a40dc31d04?reconnect=true
