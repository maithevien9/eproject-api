const Connect = require("../../Connect/Connect");
const GetRycyclablesFull = require("../../model/Recyclables/GetRycyclablesFull.model");
const verifyToken = require("../JWT/verifyToken");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetRycyclablesFull:
   *   get:
   *    tags:
   *    - Recyclables
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetRycyclablefull", function (req, res) {
    GetRycyclablesFull(Connect, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
