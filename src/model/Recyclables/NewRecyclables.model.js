var jwtDecode = require("jwt-decode");
module.exports = function (db, token, IDlevel, callback) {
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
      var sql2 = `select ID from recyclables  WHERE IDLevel = '${IDlevel}' and IDuser = '${ID}' ORDER BY id DESC LIMIT 1`;
      // var sql2 = `UPDATE member SET Score = Score + ${ScoreLv} WHERE ID =  ${ID}`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          // dataString = "THANH_CONG";
          // callback(dataString);
          db.query(sql2, function (err, results2, fields) {
            if (err) {
              throw err;
            } else {
              IDs = JSON.parse(JSON.stringify(results2));
              var IDRy = IDs[0].ID;
              console.log(IDRy);
              var sql3 = `insert into historyrecyclables VALUES (null, ${IDRy}, ${ID},"Chờ vận chuyển", null, "${dateTime}")`;
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
      });
    }
  }
};
