var jwtDecode = require("jwt-decode");
module.exports = function (db, IDRece, Status, callback) {
  var dataString = "";

  if (IDRece == null && Token == null && Status == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `UPDATE recyclables SET IDstatus =  ${Status} WHERE ID =   ${IDRece}`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          dataString = "THANH_CONG";
          callback(dataString);
        }
      });
    } else {
      callback(dataString);
    }
  }
};
