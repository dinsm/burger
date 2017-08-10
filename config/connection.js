// Node Dependency
var mysql = require("mysql");

var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    // Set up MySQL connection.
    connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'dins',
        password : 'neals', // Add your password
        database : 'burgers_db' // Add your database
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


//     if(error){
//         return console.log('Error Message:', error)
//     } else {
//         console.log("connected as id " + connection.threadId);
// }

// exports.connection.connect(function(err) {
//      if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//          }
//      console.log("connected as id " + connection.threadId);
//     });

// Export connection for our ORM to use.
module.exports = connection;





