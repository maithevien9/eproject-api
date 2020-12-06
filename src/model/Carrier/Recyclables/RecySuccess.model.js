var jwtDecode = require("jwt-decode");
module.exports = function (db, token, IDRecy, IDUser, callback) {
  var dataString = "";
  var ID = "";
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  var hour = date_ob.getHours();
  var min = date_ob.getMinutes();
  var sec = date_ob.getSeconds();

  var dateTime =
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  if (IDRecy == null && token == null) {
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
      var sql = `UPDATE recyclables SET STATUS = 2  WHERE ID = ${IDRecy}`;

      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          var sql3 = `insert into historyrecyclables VALUES (null, ${IDRecy}, ${IDUser},"Vận chuyển thành công", null, "${dateTime}",${ID})`;
          db.query(sql3, function (err, results, fields) {
            if (err) {
              throw err;
            } else {
              dataString = "THANH_CONG";
              callback(dataString);
            }
          });
        }
      });
    }
  }
};
