var jwtDecode = require("jwt-decode");
module.exports = function (db, Token, callback) {
  var dataString = "";
  var data = [];
  var IDuser = 0;
  if (Token === "") {
    dataString = "KHONG_THANH_CONG";

    callback(dataString, data);
  } else {
    try {
      var decoded = jwtDecode(Token);
      IDuser = decoded.ID;
      console.log(IDuser);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
    }
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `select * from historyrecyclables where IDUser = ${IDuser} ORDER BY CreateAtTime DESC`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          data = JSON.parse(JSON.stringify(results));
          dataString = "THANH_CONG";
          callback(dataString, data);
        }
      });
    }
  }
};
