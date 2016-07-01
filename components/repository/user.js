"use strict";

exports = module.exports = (database) => {
  return new User(database);
}

function User(database) {
    this.database = database;
    this.findAll = (callback)  => {
        database.query('select * from user', (error, rows, fields) => {
            if (error) { return callback(error); }
            return callback(null, rows);
        });
    }
};

User.prototype.findAll = (callback)  => {
    this.database.query('select * from user', (error, rows, fields) => {
        if (error) { return callback(error); }
        return callback(null, rows);
    });
}

exports['@singleton'] = true;
exports['@require'] = [ './database' ];