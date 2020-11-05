const db = require("../../Connect/Connect");
const CreateHistory = require("../../model/Member/CreateHistory.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /CreateHistory:
   *   post:
   *    tags:
   *    - Member
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              token:
   *                type: string
   *              IDGift:
   *                type: string
   *              PriceGift:
   *                type: string
   *            required:
   *                - token
   *                - IDGift
   *                - PriceGift
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/CreateHistory", function (req, res) {
    CreateHistory(
      db,
      req.body.token,
      req.body.IDGift,
      req.body.PriceGift,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
