/**
 * Manage Customer, Campaigns and AdGroups
 */
var pg = require('pg'),
    moment = require('moment'),
    util = require('util'),
    uuid = require('node-uuid'),
    config = require('../config');

var params = {
    user: config.app.pg.username,
    password: config.app.pg.password,
    database: config.app.pg.database,
    host: config.app.pg.host,
    port: config.app.pg.port
};


/**
 * Create something.
 */
exports.createSomething = function(parameters, callback) {
    var client = new pg.Client(params);
    client.connect();
    var id = uuid.v1();

    var sql = [
        'WITH x AS (',
        'INSERT INTO table1(id, end_time)',
        'VALUES ($1, now())',
        'RETURNING id',
        ')',
        'INSERT INTO table2(id)',
        'SELECT $2',
        'FROM x'
    ].join(' ');

    client.query(sql, [
        id        
    ], function(error, result) {
        client.end();
        callback(error, result);
    });
};
