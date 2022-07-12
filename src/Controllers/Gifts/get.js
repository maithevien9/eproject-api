const db = require('../../Connect/Connect');
const GetGifts = require('../../model/Gifts/get');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function (app) {
  app.get('/gifts', function (req, res) {
    GetGifts(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
