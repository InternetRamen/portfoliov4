const express = require('express');
const router = express.Router();
const createError = require("http-errors")

router.get('/', function(req, res, next) {
        res.render('index');
});
router.get("/about", function (req, res, next) {
    res.render("about");
});


module.exports = router;