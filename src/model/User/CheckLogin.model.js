var jwtDecode = require("jwt-decode");
module.exports = function (db, ID, callback) {
  var dataString = "";

  if (ID === "") {
    dataString = "KHONG_THANH_CONG1";

    callback(dataString);
  } else {
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `SELECT ID, User, PassWord FROM user where ID = ${ID}`;
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
