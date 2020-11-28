const db = require("../../Connect/Connect");
const GetInfor = require("../../model/User/GetInfor.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetInfor/{Token}:
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
  app.get("/GetInfor/:Token/", function (req, res) {
    var Token = req.params.Token;

    GetInfor(db, Token, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
