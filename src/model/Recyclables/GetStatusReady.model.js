var jwtDecode = require("jwt-decode");
module.exports = function (db, Token, callback) {
  var dataString = "";
  var data = [];
  if (Token == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString, data);
  } else {
    try {
      var decoded = jwtDecode(Token);
      var ID = decoded.ID;
      console.log(ID);
    } catch (err) {
      dataString = "KHONG_THANH_CONG1";
      console.log(err);
    }
    if (dataString != "KHONG_THANH_CONG1") {
      var sql = `select * from recyclables WHERE Status = 0 and IDuser = ${ID}`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          data = JSON.parse(JSON.stringify(results));
          console.log(data.length);
          if (data.length === 0) {
            dataString = "Handled";
            callback(dataString, data);
          } else {
            dataString = "Handling";
            callback(dataString, data);
          }
        }
      });
    } else {
      callback(dataString);
    }
  }
};
