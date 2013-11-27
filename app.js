/**
 * Module dependencies.
 */
var restify = require('restify'),
    uuid = require('node-uuid'),
    users = require('./lib/users'),
    config = require('./config');


var server = restify.createServer({
    name: config.app.name,
    version: config.app.version
});

server.get('/users/:name', users.getUser);
server.head('/users/:name', users.getUser);

/**
 * Application starts here
 */
server.listen(config.app.port, function() {
    console.log('%s listening at %s', server.name, server.url)
});