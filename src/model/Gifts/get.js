module.exports = function (db, callback) {
  var dataString = '';
  var data = [];

  var sql = `select * from Gifts`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = 'THANH_CONG';
    callback(dataString, data);
  });
};
