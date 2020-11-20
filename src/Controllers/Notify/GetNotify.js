const db = require("../../Connect/Connect");
const GetNotify = require("../../model/Notify/GetNotify.model");
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
  app.get("/GetNotify/:Token/", function (req, res) {
    var Token = req.params.Token;

    GetNotify(db, Token, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
