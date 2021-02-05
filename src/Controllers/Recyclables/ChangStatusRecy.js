const db = require("../../Connect/Connect");
var ChangeStatusRece = require("../../model/Recyclables/ChangStatusRecy.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /ChangeStatusRece:
   *   put:
   *    tags:
   *    - Recyclables
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              IDRece:
   *                type: string
   *              Status:
   *                type: string
   *            required:
   *                - IDRece
   *                - Status
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.put("/ChangeStatusRece", function (req, res) {
    ChangeStatusRece(
      db,
      req.body.IDRece,
      req.body.Status,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
