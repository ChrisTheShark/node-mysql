"use strict";
const mysql = require('mysql'),
      dbConfig = require('config').get('db');

exports = module.exports = function() {
  return mysql.createPool({
    connectionLimit : dbConfig.connectionLimit,
    host            : dbConfig.host,
    port            : dbConfig.port,
    user            : dbConfig.user,
    password        : dbConfig.password,
    database        : dbConfig.database
  });
}

exports['@singleton'] = true;