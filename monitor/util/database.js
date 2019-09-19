const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ruzhan34128119',
    database: 'monitor'
});

connection.connect();

module.exports = connection;
