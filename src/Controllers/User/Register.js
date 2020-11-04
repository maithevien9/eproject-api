const db = require("../../Connect/Connect");
const Register = require("../../model/User/Register.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /Register:
   *   post:
   *    tags:
   *    - User
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              User:
   *                type: string
   *              PassWord:
   *                type: string
   *            required:
   *                - User
   *                - PassWord
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/Register", function (req, res) {
    Register(db, req.body.User, req.body.PassWord, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
