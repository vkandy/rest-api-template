/**
 * Performs CRUD operations on User
 */
var moment = require('moment'),
    util = require('util'),
    uuid = require('node-uuid'),
    config = require('../config');

/**
 * Get a user.
 */
exports.getUser = function(req, res) {
    res.json({
        user_id: uuid.v1(),
        created: moment()
    });
};