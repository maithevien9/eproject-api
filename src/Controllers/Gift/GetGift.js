const db = require("../../Connect/Connect");
const GetGift = require("../../model/Gift/GetGift.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetGift/:
   *   get:
   *    tags:
   *    - Gift

   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetGift/", function (req, res) {
    GetGift(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
