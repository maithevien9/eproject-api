var jwtDecode = require('jwt-decode');
module.exports = function (db, requestGiftId, Status, callback) {
  var dataString = '';

  if (Status == null) {
    dataString = 'KHONG_THANH_CONG';
    callback(dataString);
  } else {
    if (dataString != 'KHONG_THANH_CONG') {
      var sql = `UPDATE giftExchanges SET status = ${Status} WHERE id = '${requestGiftId}'`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          dataString = 'THANH_CONG';
          callback(dataString);
        }
      });
    } else {
      callback(dataString);
    }
  }
};
