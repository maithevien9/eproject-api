var jwtDecode = require("jwt-decode");
module.exports = function (db, Token, Name, Address, Phone, X, Y, callback) {
  var dataString = "";
  var ID = "";
  console.log(Token + Name + Address + Phone + X + Y);

  try {
    var decoded = jwtDecode(Token);
    var ID = decoded.ID;
    console.log(ID);
  } catch (err) {
    dataString = "KHONG_THANH_CONG";
  }
  var sql = `UPDATE inforuser SET Name='${Name}', Phone='${Phone}', Address='${Address}', X = '${X}' ,Y = '${Y}' WHERE ID ='${ID}'`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    if (dataString != "KHONG_THANH_CONG") dataString = "THANH_CONG";
    callback(dataString);
  });
};
