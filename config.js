/**
 * Declare all config parameters.
 */
exports.app = {

    name: 'my-app',
    port: '8000',
    version: '1.0.0',

    // PG credentials anything://user:password@host:port/database
    pg: {
        host: 'localhost',
        port: 5432,
        username: '',
        password: '',
        database: ''
    }
}