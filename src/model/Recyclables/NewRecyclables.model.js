var jwtDecode = require("jwt-decode");
module.exports = function (db, token, IDlevel, callback) {
  var dataString = "";
  var ID = "";
  if (IDlevel == null && token == null) {
    dataString = "KHONG_THANH_CONG1";
    callback(dataString);
  } else {
    try {
      var decoded = jwtDecode(token);
      ID = decoded.ID;
      console.log(ID);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
      console.log(err);
    }
    if (dataString === "KHONG_THANH_CONG") {
      callback(dataString);
    } else {
      var sql = `insert into recyclables VALUES (null,'${IDlevel}', false, '${ID}')`;
      // var sql2 = `UPDATE member SET Score = Score + ${ScoreLv} WHERE ID =  ${ID}`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          dataString = "THANH_CONG";
          callback(dataString);
        }
      });
    }
  }
};
