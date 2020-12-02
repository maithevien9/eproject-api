const db = require("../../Connect/Connect");
const NewRecyclables = require("../../model/Recyclables/NewRecyclables.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /NewRecyclables:
   *   post:
   *    tags:
   *    - Recyclables
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              token:
   *                type: string
   *              IDlevel:
   *                type: string
   *              CreateAtTime:
   *                type: string
   *            required:
   *                - token
   *                - IDlevel
   *                - CreateAtTime
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/NewRecyclables", function (req, res) {
    console.log("Time" + req.body.CreateAtTime);
    NewRecyclables(
      db,
      req.body.token,
      req.body.IDlevel,
      req.body.CreateAtTime,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
