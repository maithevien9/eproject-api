var jwtDecode = require("jwt-decode");

module.exports = function (db, ID, price, InforRecyclable, callback) {
  var dataString = "";

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
  if (ID == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    if (dataString === "KHONG_THANH_CONG") {
      callback(dataString);
    } else {
      var sql = `INSERT INTO recyclables VALUES (null,'${ID}','${dateTime}',1,${price})`;

      var sql2 = `select ID from recyclables  WHERE CreateAtTime = '${dateTime}' and IDuser = '${ID}' ORDER BY id DESC LIMIT 1`;
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

              InforRecyclable.map((e) => {
                var sql4 = `insert into recyclablesdetail VALUES (${IDRy}, ${e.ID}, ${e.amount})`;
                db.query(sql4, function (err, results, fields) {
                  if (err) {
                    throw err;
                  } else {
                  }
                });
              });
            }
          });
        }
      });
      dataString = "THANH_CONG";
      callback(dataString);
    }
  }
};
