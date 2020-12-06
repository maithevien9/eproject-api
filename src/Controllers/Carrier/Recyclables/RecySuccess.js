const db = require("../../../Connect/Connect");
const RecySuccess = require("../../../model/Carrier/Recyclables/RecySuccess.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /RecySuccess:
   *   post:
   *    tags:
   *    - Carrier
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              token:
   *                type: string
   *              IDRecy:
   *                type: string
   *              IDUser:
   *                type: string
   *            required:
   *                - token
   *                - IDRecy
   *                - IDUser
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/RecySuccess", function (req, res) {
    RecySuccess(
      db,
      req.body.token,
      req.body.IDRecy,
      req.body.IDUser,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
