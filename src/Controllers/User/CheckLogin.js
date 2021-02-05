const db = require("../../Connect/Connect");
const CheckLogin = require("../../model/User/CheckLogin.model");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /CheckLogin/{Token}:
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
  app.get("/CheckLogin/", verifyToken, function (req, res) {
    var ID;
    jwt.verify(req.token, "key", (err, authData) => {
      if (err) {
        dataString = "KHONG_THANH_CONG";
      } else {
        ID = authData.ID;
      }
    });
    CheckLogin(db, ID, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
