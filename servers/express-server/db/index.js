const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "12345678",
  database: "fe_server"
});
db.connect();

module.exports = db;
