const db = require('../../Connect/Connect');
const GetRequest = require('../../model/Gifts/getRequest');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function (app) {
  app.get('/giftExchanges', function (req, res) {
    GetRequest(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
