const db = require("../../Connect/Connect");
const GetLevel = require("../../model/Recyclables/GetLevel.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetLevel/:
   *   get:
   *    tags:
   *    - Recyclables
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetLevel/", function (req, res) {
    GetLevel(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
