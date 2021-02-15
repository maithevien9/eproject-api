module.exports = function (db, ID, callback) {
    var dataString = "";
    var data = [];
    if (ID == null) {
      dataString = "KHONG_THANH_CONG";
      callback(dataString, data);
    } else {
      if (dataString === "KHONG_THANH_CONG") {
        callback(dataString, data);
      } else {
        var sql = `select * from recyclablesdetail WHERE IDRecy = ${ID}`;
  
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
  