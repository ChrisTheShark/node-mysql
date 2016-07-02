"use strict";

exports = module.exports = function() {
    return require('config').get('db');
}

exports['@singleton'] = true;