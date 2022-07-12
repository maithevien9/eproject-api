const db = require('../../Connect/Connect');
const UpdateStatus = require('../../model/Gifts/updateStatus');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function (app) {
  app.put('/giftExchanges', function (req, res) {
    UpdateStatus(db, req.body.requestGiftId, req.body.status, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
