var jwtDecode = require('jwt-decode');
const { v4: uuidv4 } = require('uuid');
module.exports = function (db, giftId, ID, status, callback) {
  var dataString = '';

  if (dataString === 'KHONG_THANH_CONG') {
    callback(dataString);
  } else {
    var sql = `insert into giftExchanges  VALUES ('${uuidv4()}','${ID}','${giftId}','${status}')`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        dataString = 'THANH_CONG';
        callback(dataString);
      }
    });
  }
};
