const mysql = require('mysql');
const { HOST, USERNAME, PASSWORD, DATABASE } = require('../config/config');
const connection = mysql.createConnection({
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE

});
connection.connect((error) => {
    if (error) {
        console.log("Error connecting database: " + error.stack);
    }
    // console.log(HOST, USERNAME, PASSWORD, DATABASE);
    console.log('Database connected as id: ' + connection.threadId);
});
module.exports = connection;
