const db = require('../../Connect/Connect');
const CreateRequest = require('../../model/Gifts/createRequest');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function (app) {
  app.post('/giftExchanges', function (req, res) {
    CreateRequest(db, req.body.giftId, req.body.userId, req.body.status, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
