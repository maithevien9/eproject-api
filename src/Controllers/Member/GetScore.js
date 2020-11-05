const db = require("../../Connect/Connect");
const GetScore = require("../../model/Member/GetScore.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetScore/{Token}:
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
  app.get("/GetScore/:Token/", function (req, res) {
    var Token = req.params.Token;
    console.log(Token);
    GetScore(db, Token, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
