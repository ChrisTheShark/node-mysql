"use strict";
const mysql = require('mysql');

exports = module.exports = function(settings) {
  return mysql.createPool({
    connectionLimit : settings.connectionLimit,
    host            : settings.host,
    port            : settings.port,
    user            : settings.user,
    password        : settings.password,
    database        : settings.database
  });
}

exports['@singleton'] = true;
exports['@require'] = [ './settings' ];