const db = require('../../Connect/Connect');
const NewRecyclables = require('../../model/Recyclables/NewRecyclables.model');
const verifyToken = require('../JWT/verifyToken');
const jwt = require('jsonwebtoken');
module.exports = function(app) {
	/**
     * @swagger
     *
     * /NewRecyclables:
     *   post:
     *    tags:
     *    - Recyclables
     *    parameters:
     *        - name: reqBody
     *          description: request Body
     *          in: body
     *          schema:
     *            type: object
     *            properties:
     *              token:
     *                type: string
     *              InforRecyclable:
     *                type: array
     *              ScheduleTime:
     *                type: string
     *            required:
     *                - token
     *                - InforRecyclable
     *                - ScheduleTime
     *    responses:
     *      '201':
     *        description: A successful response
     *      '422':
     *        description: login already exists
     */
	app.post('/NewRecyclables', verifyToken, function(req, res) {
		var ID;
		var token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, 'key', (err, authData) => {
			if (err) {
				throw err;
			} else {
				ID = authData.ID;
			}
		});

		NewRecyclables(db, ID, req.body.Price, req.body.Address, req.body.Phone, req.body.InforRecyclable, function(
			dataString
		) {
			res.json({
				dataString: dataString
			});
		});
	});
};
