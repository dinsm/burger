// Node Dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Create routes
// ----------------------------------------------------

router.get("/", function(req,res) {
    burger.selectAll(function(result) {
        var hbsObject = {burgers: result};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create a New Burger
router.post("/burgers/create", function (req, res) {
    //var name = req.body.burger_name;
    burger.create("name", req.body.name,function() {
        //console.log("scoreee");
        res.redirect("/");
    });
});


router.put("/burgers/update/:id", function(req,res) {
    console.log(req.body);
    //var devorOrNot = req.body.devoured;
    var id = req.params.id;
    //var condition = "id = " + req.params.id;

    burger.update(id,"devoured", 1, req.params.id, function(){ //{ devoured: devorOrNot === 'true' }

        res.redirect("/");
    });
});

// Export routes
module.exports = router;