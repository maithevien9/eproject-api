const db = require("../../Connect/Connect");
var changInfor = require("../../model/User/ChangInfor.model");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /ChangInfor:
   *   put:
   *    tags:
   *    - User
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              Token:
   *                type: string
   *              Name:
   *                type: string
   *              Address:
   *                type: string
   *              Phone:
   *                type: string
   *              X:
   *                type: string
   *              Y:
   *                type: string
   *            required:
   *                - Token
   *                - Name
   *                - Address
   *                - Phone
   *                - X
   *                - Y
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.put("/ChangInfor", verifyToken, function (req, res) {
    var ID;
    jwt.verify(req.token, "key", (err, authData) => {
      if (err) {
        dataString = "KHONG_THANH_CONG";
      } else {
        ID = authData.ID;
      }
    });
    changInfor(
      db,
      ID,
      req.body.Name,
      req.body.Address,
      req.body.Phone,
      req.body.X,
      req.body.Y,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
