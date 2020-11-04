const db = require("../../Connect/Connect");
const getStatusReady = require("../../model/Recyclables/GetStatusReady.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /getStatusReady/{Token}:
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
  app.get("/getStatusReady/:Token/", function (req, res) {
    var Token = req.params.Token;
    console.log(Token);
    getStatusReady(db, Token, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
