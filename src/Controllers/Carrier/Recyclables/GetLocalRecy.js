const db = require("../../../Connect/Connect");
const GetLocalRecy = require("../../../model/Carrier/Recyclables/GetLocalRecy.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetLocalRecy/{TimeLine}:
   *   get:
   *    tags:
   *    - Carrier
   *    parameters:
   *        - name: TimeLine
   *          description: TimeLine
   *          in: path
   *          type: string
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetLocalRecy/:TimeLine/", function (req, res) {
    var TimeLine = req.params.TimeLine;
    GetLocalRecy(db, TimeLine, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
