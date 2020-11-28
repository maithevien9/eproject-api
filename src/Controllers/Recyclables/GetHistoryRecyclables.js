const db = require("../../Connect/Connect");
const GetHistoryRecyclables = require("../../model/Recyclables/GetHistoryRecyclables.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetHistoryRecyclables/{Token}:
   *   get:
   *    tags:
   *    - Recyclables
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
  app.get("/GetHistoryRecyclables/:Token/", function (req, res) {
    var Token = req.params.Token;

    GetHistoryRecyclables(db, Token, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};


