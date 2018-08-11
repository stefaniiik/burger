const mysql = require('mysql');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});


//make mysql connection
connection.connect(function (err) {
  if (err) {
    console.error('ERROR: MYSQL connection error -- ' + err.stack + '/n/n');
  return;
  }
  console.log('connected as id' + connection.threadId);
});
//export
module.exports = connection;
