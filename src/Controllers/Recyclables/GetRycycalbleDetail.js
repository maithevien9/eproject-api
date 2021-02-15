const db = require("../../Connect/Connect");
const GetRycycalbleDetail = require("../../model/Recyclables/GetRycycalbleDetail.model");
const verifyToken = require("../JWT/verifyToken");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetRycyclableDetail/{ID}:
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
  app.get("/GetRycyclableDetail/:ID", function (req, res) {
    GetRycycalbleDetail(db, req.params.ID, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
