//require('dotenv').config();
var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
        username: "root",
        password: "James1189", //process.env.DB_PASS, /// process.env.password
        database: "employee_management",
        host: "127.0.0.1",
        dialect: "mysql"

  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
