var orm = require("../config/orm.js");
//var table = "burgers";

// create the code that will call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (col, objColValues,id, cb) {
        orm.update("burgers", col, objColValues,id, function (res) {
            cb(res);
        });
    }

    // delete: function (condition, cb) {
    //     orm.delete(table, condition, function (res) {
    //         cb(res);
    //     });
    };

module.exports = burger;



// var burgers = {
//     selectAll: function (cb) {
//         orm.selectAll(function(result){
//             cb(result);
//             //orm.all("burgers", cb);
//         });
//     },
//
//     create: function (burger_name, cb) {
//         orm.create(burger_name, function (result) {
//             cb(result);
//         });
//     },
//
//     update: function (devoured,id, cb) {
//         orm.update(devoured,id, function (result) {
//             cb(result);
//         });
//     }
//
//     // delete: function (condition, cb) {
//     //     orm.delete(table, condition, function (res) {
//     //         cb(res);
//     //     });
// };