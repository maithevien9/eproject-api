var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");

const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
var Controllers = require("./src/Controllers/API");
const db = require("./src/Connect/Connect");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['.routes/*.js']
  apis: [
    "./src/Controllers/User/Login.js",
    "./src/Controllers/User/Register.js",
    "./src/Controllers/User/ChangInfor.js",
    "./src/Controllers/User/CheckLogin.js",
    "./src/Controllers/Recyclables/NewRecyclables.js",
    "./src/Controllers/Recyclables/ChangStatusRecy.js",
    "./src/Controllers/Recyclables/GetStatusReady.js",
    "./src/Controllers/Member/CreateHistory.js",
    "./src/Controllers/Member/GetHistory.js",
    "./src/Controllers/Gift/GetGift.js",
    "./src/Controllers/Recyclables/GetLevel.js",
    "./src/Controllers/Member/GetScore.js",
    "./src/Controllers/Notify/CreateNotity.js",
    "./src/Controllers/Notify/GetNotify.js",
    "./src/Controllers/Member/getHistoryScrore.js",
    "./src/Controllers/Recyclables/GetHistoryRecyclables.js",
    "./src/Controllers/User/GetInfor.js",
    "./src/Controllers/Carrier/Recyclables/GetLocalRecy.js",
    "./src/Controllers/Carrier/Recyclables/ConfirmRecy.js",
    "./src/Controllers/Carrier/Recyclables/CreateNotityAD.js",
    "./src/Controllers/Carrier/Recyclables/RecySuccess.js",
  ],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", function (req, res) {
  res.send("hello");
});
Controllers(app);

app.listen(8001);
