const db = require("../../Connect/Connect");
const GetHistoryScore = require("../../model/Member/getHistoryScrore.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetHistoryScore/{Token}:
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
  app.get("/GetHistoryScore/:Token/", function (req, res) {
    var Token = req.params.Token;

    GetHistoryScore(db, Token, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
