const db = require('../../Connect/Connect');
const SearchRecycalbles = require('../../model/Recyclables/SearchRecycalbles.model');
const verifyToken = require('../JWT/verifyToken');
module.exports = function(app) {
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
	app.get('/SearchRecycalbles/:KeyWord', function(req, res) {
		SearchRecycalbles(db, req.params.KeyWord, function(dataString, data) {
			res.json({
				dataString: dataString,
				data: data
			});
		});
	});
};
