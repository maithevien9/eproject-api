const db = require("../../Connect/Connect");
const GetInfor = require("../../model/User/GetInfor.model");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetInfor:
   *   get:
   *    tags:
   *    - User
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
  app.get("/GetInfor/", verifyToken, function (req, res) {
    var ID;
    jwt.verify(req.token, "key", (err, authData) => {
      if (err) {
        throw err;
      } else {
        ID = authData.ID;
      }
    });
    GetInfor(db, ID, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
