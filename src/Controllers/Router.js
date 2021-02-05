var Login = require("./User/Login");
var Register = require("./User/Register");
var ChangInfor = require("./User/ChangInfor");
var CheckLogin = require("./User/CheckLogin");
var NewRecyclables = require("./Recyclables/NewRecyclables");
var ChangeStatusRece = require("./Recyclables/ChangStatusRecy");

var CreateNotify = require("./Notify/CreateNotity");
var GetNotify = require("./Notify/GetNotify");

var GetInfor = require("./User/GetInfor");
var GetRycyclables = require("./Recyclables/GetRycyclables");
module.exports = function (app) {
  console.log("this is to to Controllers");
  Login(app);
  Register(app);
  ChangInfor(app);
  CheckLogin(app);
  NewRecyclables(app);
  ChangeStatusRece(app);
  CreateNotify(app);
  GetNotify(app);
  GetInfor(app);
  GetRycyclables(app);
};
