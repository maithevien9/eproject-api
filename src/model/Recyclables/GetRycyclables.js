module.exports = function (db, ID, IDStatus, callback) {
  var dataString = "";
   (ID);
  var data = [];
  if (ID == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString, data);
  } else {
    if (dataString === "KHONG_THANH_CONG") {
      callback(dataString, data);
    } else {
      var sql = `SELECT * FROM recyclables WHERE IDStatus = ${IDStatus} and IDuser = ${ID} ORDER BY CreateAtTime DESC`;

      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          data = JSON.parse(JSON.stringify(results));
           (data);
          dataString = "THANH_CONG";
          callback(dataString, data);
        }
      });
    }
  }
};
