const db = require("../../Connect/Connect");
const CreateNotity = require("../../model/Notify/CreateNotity.model");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /CreateNotify:
   *   post:
   *    tags:
   *    - Notify
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
   *            required:
   *                - Name
   *                - Detail
   *                - token
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/CreateNotify", verifyToken, function (req, res) {
    var ID;
    jwt.verify(req.token, "key", (err, authData) => {
      if (err) {
        throw err;
      } else {
        ID = authData.ID;
      }
    });
    CreateNotity(db, req.body.Name, req.body.Detail, ID, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
