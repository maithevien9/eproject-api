module.exports = function (db, callback) {
  var dataString = "";
  var data = [];

  var sql = `SELECT * FROM gift`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "THANH_CONG";
    callback(dataString, data);
  });
};
