module.exports = function(db, callback) {
	var dataString = '';
	var data = [];

	var sql = `SELECT recyclables.ID,recyclables.IDuser,recyclables.NameProduct,recyclables.Address, recyclables.Phone, recyclables.CreateAtTime, recyclables.Price, inforuser.Name, inforuser.X, inforuser.Y  FROM recyclables inner JOIN inforuser ON recyclables.IDuser = inforuser.ID WHERE recyclables.IDStatus = 1  ORDER BY recyclables.CreateAtTime DESC`;

	db.query(sql, function(err, results, fields) {
		if (err) {
			throw err;
		} else {
			data = JSON.parse(JSON.stringify(results));
			dataString = 'THANH_CONG';
			callback(dataString, data);
		}
	});
};
