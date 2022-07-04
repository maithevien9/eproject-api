var mysql = require('mysql');
var connection = mysql.createConnection({
  // host: "us-cdbr-east-03.cleardb.com",
  // user: "bf525d49fe0172",
  // password: "026c8444",
  // database: "heroku_e3fa5a40dc31d04",
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'eproject',
  port: 8889,
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "eproject",
});
// connection.connect(function (err) {
//   if (err) console.log(err);
// });
connection.connect(function (err) {
  if (err) {
    console.log('error when connecting to db:', err);
  }
});

module.exports = connection;

// host: "us-cdbr-east-03.cleardb.com",
//   user: "bf525d49fe0172",
//   password: "026c8444",
//   database: "heroku_e3fa5a40dc31d04",
// mysql://bf525d49fe0172:026c8444@us-cdbr-east-03.cleardb.com/heroku_e3fa5a40dc31d04?reconnect=true
