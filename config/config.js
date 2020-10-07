module.exports = {
    development: {
      username: "b8zv3pw1y9n7ph1x",
      password: "gqipq3ttsdqfafvn",
      database: "YOUR JAWS DB DATABASE NAME",
      host: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      dialect: "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect":  "mysql"
    }
  }