// Node Dependencies
var express = require("express");
var router = express.Router();
//var path = require("path");
var body = require("body-parser");
var burger = require("../models/burger.js");
//var burger = require(path.join(__dirname, "..", "models", "burger.js"));


// Create routes
// ----------------------------------------------------

router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create a New Burger
router.post("/", function (req, res) { ///burgers/create
    var id = req.body.name;
    if(id === ""){
        id = "Empty Burger";
    }
    burger.create(id, function() {
        console.log("scoreee");
        res.redirect("/");
    });
});


router.put("/:id", function(req,res) { ///burgers/update/:id
    var devorOrNot = (req.body.devoured === "true");
    console.log(req.body.devoured);
    //var id = req.params.id;
    //var condition = "id = " + req.params.id;

    burger.update(devorOrNot, req.params.id, function(){
        res.redirect("/");
    });
});

// Export routes
module.exports = router;











