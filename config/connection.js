// Require the MySQL application
var mysql = require('mysql');

// Create the connection information
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "james",
        password: "Pancakes2019",
        database: "burgers_db"
    });
};

// initiate the connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    };
    console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;