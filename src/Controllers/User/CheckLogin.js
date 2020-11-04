const db = require("../../Connect/Connect");
const CheckLogin = require("../../model/User/CheckLogin.model");
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
  app.get("/CheckLogin/:Token/", function (req, res) {
    var Token = req.params.Token;
    console.log(Token);
    CheckLogin(db, Token, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
