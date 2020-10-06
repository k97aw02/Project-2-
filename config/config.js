require('dotenv').config();
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL);
 }
 else {
module.exports = {
    development: {
        username: "root",
        password: process.env.DB_PASS, /// process.env.password
        database: "Employee_management",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql"
    }
};
 }
connection.connect();
module.exports = connection;
// sedding
