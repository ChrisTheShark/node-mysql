"use strict";
const mysql = require('mysql');

exports = module.exports = function() {
  return mysql.createPool({
    connectionLimit : 10,
    host            : "localhost",
    port            : 3306,
    user            : "root",
    password        : "password",
    database        : "sharks"
  });
}

exports['@singleton'] = true;