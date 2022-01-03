const express = require('express');
const router = express.Router();
const createError = require("http-errors")

router.get('/', function(req, res, next) {
        res.render('index');
});
router.get("/about", function (req, res, next) {
    res.render("about");
});
router.get("/portfolio", function (req, res, next) {
    next(createError(404))
});

module.exports = router;