const db = require("../../Connect/Connect");
const GetNotify = require("../../model/Notify/GetNotify.model");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetNotify/{Token}:
   *   get:
   *    tags:
   *    - Notify
   *    parameters:
   *        - name: Token
   *          description: Token
   *          in: path
   *          type: string
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetNotify/", verifyToken, function (req, res) {
    var ID;
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, "key", (err, authData) => {
      if (err) {
        throw err;
      } else {
        ID = authData.ID;
      }
    });
    GetNotify(db, ID, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
