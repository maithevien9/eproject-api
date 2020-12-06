module.exports = function (db, TimeLine, callback) {
  var dataString = "";
  var data = [];

  var sql = `select recyclables.ID, recyclables.IDuser , inforuser.Address, inforuser.X, inforuser.Y ,inforuser.Name, inforuser.Phone from recyclables inner JOIN  inforuser ON recyclables.IDuser = inforuser.ID WHERE recyclables.Status = 0 and recyclables.CreateAtTime  = "${TimeLine}"`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "THANH_CONG";
    callback(dataString, data);
  });
};
