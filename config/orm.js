var connection = require('./connection.js');
//var path = require("path");
//var orm = require(path.join(__dirname, "..", "config", "orm.js"));

var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM ??";
        connection.query(dbQuery,[table], function(err,result) {
            if(err) throw err;
            cb(result);
        });
    },

    insertOne: function(vals, cb) {
        var dbQuery = "INSERT INTO burgers (name, devoured) VALUES (?, ?)";//"INSERT INTO burgers (name) VALUES (?)"; //"INSERT INTO ?? (??) VALUES (?)";
        connection.query(dbQuery,[vals, false],function(err, result) {
            console.log(dbQuery);
            if(err) {throw err;}
            cb(result);
        });
    },

    updateOne: function(vals, id,cb) {
        var dbQuery = "UPDATE burgers SET ? WHERE ?";//"UPDATE burgers SET devoured=? WHERE id=?"; //"UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(dbQuery, [ {devoured: vals}, {id: id}], function(err, result) {
            if(err)
            {throw err;}
            cb(result);
        })
    }
};

// Export the ORM object in module.exports.
module.exports = orm;