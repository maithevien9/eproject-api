var jwtDecode = require("jwt-decode");
module.exports = function (db, Token, callback) {
  var dataString = "";

  if (Token == null) {
    dataString = "KHONG_THANH_CONG1";

    callback(dataString);
  } else {
    try {
      var decoded = jwtDecode(Token);
      var IDuser = decoded.ID;
      console.log(IDuser);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
    }
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `SELECT ID, User, PassWord FROM user where ID = ${IDuser}`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        }
        if (results.length != 0) {
          dataString = "THANH_CONG";
          callback(dataString);
        } else {
          dataString = "KHONG_THANH_CONG";
          callback(dataString);
        }
      });
    }
  }
};
