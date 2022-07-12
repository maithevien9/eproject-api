const db = require('../../Connect/Connect');
const CreateRequest = require('../../model/Gifts/createRequest');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function (app) {
  app.post('/giftExchanges', verifyToken, function (req, res) {
    var ID;
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'key', (err, authData) => {
      console.log({ err });

      if (err) {
        dataString = 'KHONG_THANH_CONG';
      } else {
        ID = authData.ID;
      }
    });
    CreateRequest(db, req.body.giftId, req.body.userId, req.body.status, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
