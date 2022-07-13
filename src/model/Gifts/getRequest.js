module.exports = function (db, userId, callback) {
  var dataString = '';
  var data = [];

  var sql = !userId
    ? `SELECT giftExchanges.id, giftExchanges.status, inforuser.Name, inforuser.Address, Gifts.name, Gifts.price, Gifts.image FROM giftExchanges inner JOIN  inforuser ON giftExchanges.userId = inforuser.ID inner JOIN  Gifts ON giftExchanges.giftId = Gifts.id`
    : `SELECT giftExchanges.id, giftExchanges.status, inforuser.Name, inforuser.Address, Gifts.name, Gifts.price, Gifts.image FROM giftExchanges inner JOIN  inforuser ON giftExchanges.userId = inforuser.ID inner JOIN  Gifts ON giftExchanges.giftId = Gifts.id where giftExchanges.userId = '${userId}'`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = 'THANH_CONG';
    callback(dataString, data);
  });
};
