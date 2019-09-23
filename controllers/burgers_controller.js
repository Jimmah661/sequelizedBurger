var express = require('express');
var burg = require('../models/burger.js');
var router = express.Router();

router.get("/", function (req, res) {
    burg.all(function (data) {
        var hbsObject = {
            burg: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgs", function (req, res) {
    burg.insert(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result) {
        res.json({ id: result.insertId })
    })
});

router.put("/api/burgs/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);
    burg.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;