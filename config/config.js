require('dotenv').config();
module.exports = {
  development: {
    username: "root",
    password: "SilverSurfer",
    database: "pets_login",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "root",
    database: "pets_login",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "root",
    database: "pets_login",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}