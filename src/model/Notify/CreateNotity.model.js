var jwtDecode = require("jwt-decode");
module.exports = function (db, Name, Detail, ID, callback) {
  var dataString = "";
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  var hour = date_ob.getHours();
  var min = date_ob.getMinutes();
  var sec = date_ob.getSeconds();

  console.log(
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec
  );
  var dateTime =
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  if (Name == null && Detail == null && ID == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    if (dataString === "KHONG_THANH_CONG") {
      callback(dataString);
    } else {
      var sql = `insert into Notify VALUES (null,'${Name}', '${Detail}', ${ID}, "${dateTime}")`;
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
