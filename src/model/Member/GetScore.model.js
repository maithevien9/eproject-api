var jwtDecode = require("jwt-decode");
module.exports = function (db, Token, callback) {
  var dataString = "";
  var data = [];
  if (Token === "") {
    dataString = "KHONG_THANH_CONG";

    callback(dataString, data);
  } else {
    try {
      var decoded = jwtDecode(Token);
      var IDuser = decoded.ID;
      console.log(IDuser);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
    }
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `SELECT score FROM Member where ID = ${IDuser}`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        }
        data = JSON.parse(JSON.stringify(results));
        dataString = "THANH_CONG";
        callback(dataString, data);
      });
    }
  }
};
