const db = require("../../../Connect/Connect");
const CreateNotityAD = require("../../../model/Carrier/Recyclables/CreateNotityAD.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /CreateNotifyAD:
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
   *              Name:
   *                type: string
   *              Detail:
   *                type: string
   *              token:
   *                type: string
   *              IDUser:
   *                type: string
   *            required:
   *                - Name
   *                - Detail
   *                - token
   *                - IDUser
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/CreateNotifyAD", function (req, res) {
    console.log(req.body.IDUser);
    CreateNotityAD(
      db,
      req.body.Name,
      req.body.Detail,
      req.body.token,
      req.body.IDUser,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
