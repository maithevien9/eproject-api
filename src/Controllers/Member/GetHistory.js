const db = require("../../Connect/Connect");
const GetHistory = require("../../model/Member/GetHistory.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetHistory/{Token}:
   *   get:
   *    tags:
   *    - Member
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
  app.get("/GetHistory/:Token/", function (req, res) {
    var Token = req.params.Token;
    console.log(Token);
    GetHistory(db, Token, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
