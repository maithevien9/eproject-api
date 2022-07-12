module.exports = function (db, callback) {
  var dataString = '';
  var data = [];

  var sql = `SELECT giftExchanges.id, giftExchanges.status, inforuser.Name, inforuser.Address, Gifts.name, Gifts.price FROM giftExchanges inner JOIN  inforuser ON giftExchanges.userId = inforuser.ID inner JOIN  Gifts ON giftExchanges.giftId = Gifts.id`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = 'THANH_CONG';
    callback(dataString, data);
  });
};
