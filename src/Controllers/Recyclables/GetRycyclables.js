const db = require("../../Connect/Connect");
const GetRycyclables = require("../../model/Recyclables/GetRycyclables");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /NewRecyclables/{IDStatus}::
   *   post:
   *    tags:
   *    - Recyclables
   *    parameters:
   *        - name: IDStatus
   *          description: IDStatus
   *          in: path
   *          type: string
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetRycyclables/:IDStatus", verifyToken, function (req, res) {
    var ID;
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, "key", (err, authData) => {
      if (err) {
        throw err;
      } else {
        ID = authData.ID;
      }
    });
    GetRycyclables(db, ID, req.params.IDStatus, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
