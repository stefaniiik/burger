const mysql = require('mysql');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wizard_schools_db"
});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
//make mysql connection
connection.connect(function(err){
  if(err){
  console.error('ERROR: MYSQL connection error -- '+ err.stack+ '/n/n');
  });
  
  //export
  module.exports = connection;
    