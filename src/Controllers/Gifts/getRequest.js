const db = require('../../Connect/Connect');
const GetRequest = require('../../model/Gifts/getRequest');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function (app) {
  app.get('/giftExchanges/:userId', function (req, res) {
    GetRequest(db, req.params?.userId, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
